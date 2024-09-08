from rest_framework import serializers
from .models import *

from rest_framework import serializers
from .models import Books

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = (
            'name', 'author', 'published_date', 'description', 'ISBN', 'stock', 'price','category', 'publisher', 'language', 'pages', 'edition', 'format','is_available', 'books_img', 'discount_price'
        )

