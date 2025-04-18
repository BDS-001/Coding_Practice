from django.contrib import admin

from .models import User, Listing, Bid, Comment


class ListingAdmin(admin.ModelAdmin):
    readonly_fields = ("id",)

# Register your models here.
admin.site.register(User)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Bid)
admin.site.register(Comment)