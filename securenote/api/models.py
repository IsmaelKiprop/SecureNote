from django.db import models

class Note(models.Model):
    user = models.ForeignKey('auth.User', null=True, blank=True, on_delete=models.CASCADE)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[:50]