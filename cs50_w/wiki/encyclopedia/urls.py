from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("new_page", views.new_page, name="new_page"),
    path("random", views.random, name="random"),
    path("search/<str:q>", views.match_search, name="search"),
    path("<str:entry_name>", views.wiki_page, name="wiki_page"),
    path("<str:entry_name>/edit", views.edit_page, name="edit_page"),
]
