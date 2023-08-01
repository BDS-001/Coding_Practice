from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    
    def serialize(self):
        return {
            "id": self.id,
            "username": self.username
        }

class Post(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="post_user")
    post_body = models.TextField(max_length=300)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User,blank=True, related_name='likes')

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.username,
            "body": self.post_body,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            "likes": self.likes.count()
        }

    def __str__(self) -> str:
        return f'{self.id}, {self.timestamp}, {self.likes}'

class Followers(models.Model):
    author = models.ForeignKey("User", on_delete=models.CASCADE, related_name="profile_author")
    follower = models.ForeignKey("User", on_delete=models.CASCADE, related_name="profile_follower")