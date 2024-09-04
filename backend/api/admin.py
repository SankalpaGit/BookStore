from django.contrib import admin  # type: ignore
from .models import Books, Donation

# Register your models here.
admin.site.register(Books)