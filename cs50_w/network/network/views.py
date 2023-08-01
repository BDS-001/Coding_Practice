import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView
from django.core.paginator import Paginator
from .models import User, Post, Followers



def index(request):
    if request.method == "POST":
        user = request.user
        post_body = request.POST['body']
        try:
            post = Post(user=user, post_body=post_body)
            post.save()
            return HttpResponseRedirect(reverse('index'))
        except IntegrityError:
            return render(request, "network/index.html", {
                "message": "post not created"
            })

    posts = Post.objects.all()
    posts = posts.order_by("-timestamp").all()
    p = Paginator(posts, 2)

    page = request.GET.get("page")
    if not page:
        page = 1
    else:
        page = int(page)
        if page < 1:
            page = 1
        elif page > p.num_pages:
            page = p.num_pages
    
    posts = p.page(page)
    return render(request, "network/index.html", {
        "p": p,
        "posts": posts,
        "username": request.user.username,
        "prev": posts.previous_page_number() if posts.has_previous() else None,
        "next": posts.next_page_number() if posts.has_next() else None,
    })


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "network/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "network/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "network/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "network/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "network/register.html")

def profile(request, username):
    message = None
    author = False

    try:
        profile_user = User.objects.get(username=username)
        if request.user.id == profile_user.id:
            author = True
    except:
        profile_user = None
        message = f'The User "{username}" Does Not Exist'


    return render(request, "network/profile.html", {
        "profile_user": profile_user,
        "message": message,
        "author": author
    })

def profile_data(request, username):
    # Filter emails returned based on mailbox
    try:
        profile_user = User.objects.get(username=username)
    except User.DoesNotExist:
        return JsonResponse({"error": "Email not found."}, status=404)


    user_posts = Post.objects.filter(user=profile_user)
    user_posts = user_posts.order_by("-timestamp").all()
    post_data = [post.serialize() for post in user_posts]
    print(post_data)
    return JsonResponse([post.serialize() for post in user_posts], safe=False)

@csrf_exempt
@login_required
def follow(request, username):
    #get the two users
    profile_user = User.objects.get(username=username)
    request_user = User.objects.get(pk=request.user.id)

    try:
        following = Followers.objects.get(author=profile_user, follower = request_user)
    except:
        following = None

    #post method means change follow relationship
    if request.method == "POST":
        if following:
            following.delete()
            print('removed')
            return JsonResponse({"message": "User has unfollowed"}, status=201)
        else:
            follower = Followers(author=profile_user, follower = request_user)
            follower.save()
            print('added')
            return JsonResponse({"message": "User has followed"}, status=201)

    # get method means return status
    elif request.method == "GET":
        if following:
            return JsonResponse({"label": "Unfollow", "status": "following"}, status=201)
        else:
            return JsonResponse({"label": "Follow" , "status": "not following"}, status=201)

        data = json.loads(request.body)
        if data.get("follow") is not None:
            print(data["follow"])
    
def following_page(request):
    return render(request, "network/following.html")

def get_follower_posts(request):
    user = request.user.id
    following = Followers.objects.filter(follower=user)
    ids = [following.author.id for following in following]
    posts = Post.objects.filter(user__in=ids)
    posts = posts.order_by("-timestamp").all()
    return JsonResponse([post.serialize() for post in posts], safe=False)


    
def like(request, post_id, clicked):
    post = Post.objects.get(pk=post_id)
    user = User.objects.get(pk=request.user.id)

    if clicked:
        if user in post.likes.all():
            post.likes.remove(user)
            liked = False
        else:
            post.likes.add(user)
            liked = True
    else:
        if user in post.likes.all():
            liked = True
        else:
            liked = False

    return JsonResponse({"likes": post.likes.count(), 'liked': liked})