#This is url.py in the django app
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter 


router= DefaultRouter()

router.register('books', BookViewSet, basename='books')

urlpatterns = router.urls
