from django.contrib import admin  # type: ignore
from .models import Books

# Register your models here.
admin.site.register(Books)