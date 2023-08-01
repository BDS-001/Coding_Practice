from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.forms import ModelForm
from django import forms

from .models import User, Listing, Bid, Comment


def index(request):
    return render(request, "auctions/index.html", {
        "listings": Listing.objects.all()
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
            return render(request, "auctions/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "auctions/login.html")


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
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "auctions/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "auctions/register.html")

@login_required
def create_listing(request):
    #form = CreateListing(request.POST, request.FILES)
    if request.method == "POST":
        user = request.user
        title = request.POST["title"]
        starting_bid = request.POST["starting_bid"]
        description = request.POST["description"]
        categories = request.POST["categories"]
        image = request.FILES['img']
        try:
            list = Listing(user=user, title=title, item_description=description, category=categories, starting_bid=starting_bid, image=image)
            list.save()
        except IntegrityError:
            return render(request, "auctions/create_listing.html", {
                "message": "Listing not created"
            })
            
        
    return render(request, "auctions/create_listing.html")


def listing_details(request, listing_id):
    listing = Listing.objects.get(pk=listing_id)
    return render(request, "auctions/listing_details.html", {
        "listings":listing,
        "categories": listing.category.split(","),
        "bid_history": Bid.objects.filter(listing=listing_id),
        "comments": Comment.objects.filter(listing=listing_id)
    })

@login_required
def comment(request, listing_id):
    if request.method == "POST":
        user = request.user
        listing = Listing.objects.get(pk=listing_id)
        comment = request.POST["comment"]
        if bid > listing.starting_bid:
            try:
                new_comment = Bid(user=user, listing=listing, comment=comment)
                new_comment.save()
            except IntegrityError:
                return render(request, "auctions/comment.html", {
                    "listing":listing,
                    "message": "Listing not created"
                    })

    listing = Listing.objects.get(pk=listing_id)
    return render(request, "auctions/comment.html", {
        "listing":listing
    })

@login_required
def bid(request, listing_id):
    if request.method == "POST":
        user = request.user
        listing = Listing.objects.get(pk=listing_id)
        bid = float(request.POST["bid"])
        if bid > listing.starting_bid:
            try:
                new_bid = Bid(user=user, listing=listing, bid=bid)
                new_bid.save()
                Listing.objects.filter(pk=listing_id).update(starting_bid=bid)
            except IntegrityError:
                return render(request, "auctions/bid.html", {
                    "listing":listing,
                "message": "Listing not created"
                })

    listing = Listing.objects.get(pk=listing_id)
    return render(request, "auctions/bid.html", {
        "listing":listing
    })