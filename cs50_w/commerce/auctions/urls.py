from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("create_listing", views.create_listing, name="create_listing"),
    path("Listing Details/<int:listing_id>", views.listing_details, name="listing_details"),
    path("Listing Details/<int:listing_id>/bid", views.bid, name="new_bid"),
    path("Listing Details/<int:listing_id>/comment", views.comment, name="new_comment")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
