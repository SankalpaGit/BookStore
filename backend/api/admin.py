from django.contrib import admin
from .models import User, Profile, Books, Cart, CartItem, Order, OrderItem, Review

# Register your models here.
admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Books)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Review)