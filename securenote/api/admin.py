from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Note, CustomUser

# Register Note model
admin.site.register(Note)

# Register CustomUser model with default UserAdmin
admin.site.register(CustomUser)
