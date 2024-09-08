from django.db import models # type: ignore

# Create your models here.

class Books(models.Model):
    # Required fields
    name = models.CharField(max_length=100, unique=True)  # Increased max_length for longer titles
    author = models.CharField(max_length=100)
    published_date = models.DateField()
    ISBN = models.CharField(max_length=13, unique=True)  # Ensure ISBN is unique
    stock = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    category = models.CharField(max_length=20,choices=[('Action', 'Action'), ('Romantic', 'Romantic'), ('Comic', 'Comic')], blank=True, null=True)  # Category of the book

    # Optional fields
    description = models.TextField(blank=True, null=True)  # Optional description
    publisher = models.CharField(max_length=100, blank=True, null=True)  # Optional publisher info
    language = models.CharField(max_length=30, blank=True, null=True)  # Language of the book
    pages = models.IntegerField(blank=True, null=True)  # Number of pages
    edition = models.CharField(max_length=20, blank=True, null=True)  # Optional edition details
    format = models.CharField(max_length=30, choices=[('Hardcover', 'Hardcover'), ('Paperback', 'Paperback'), ('Ebook', 'Ebook')], blank=True, null=True)  # Book format
    is_available = models.BooleanField(default=True)  # Availability status
    books_img = models.ImageField(upload_to='books_images/', blank=True, null=True)  # Book cover image

    # Additional fields for e-commerce
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def availability_status(self):
        return "Available" if self.is_available else "Out of Stock"

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    def __str__(self):
        return self.name
