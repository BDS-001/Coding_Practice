from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Listing(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="listings_usernames")
    title = models.CharField(max_length=52)
    item_description = models.CharField(max_length=280, default='No description provided.')
    category = models.CharField(max_length=280, default='No categories provided.')
    starting_bid = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    image = models.ImageField(upload_to="auctions/files/listing_images", null=True)

    def __str__(self):
        return f"{self.title} by {self.user}"

class Bid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bids_usernames")
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name="listing_bids")
    bid = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.user} bid ${self.bid}"

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comment_usernames")
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name="listing_comments")
    comment = models.CharField(max_length=280)

    def __str__(self):
        return f"{self.user} commented: \"{self.comment}\""
    

# 12345678c
# bds