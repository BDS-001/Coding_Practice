
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("user/<str:username>", views.profile, name="profile"),
    path("following", views.following_page, name="following_page"),

    #api route
    path("<int:post_id>/like/<int:clicked>", views.like, name="like"),
    path("user/<str:username>/data", views.profile_data, name="profile"),
    path("user/<str:username>/follow", views.follow, name="follow"),
    path("following/posts", views.get_follower_posts, name="get_follower_posts"),
]
