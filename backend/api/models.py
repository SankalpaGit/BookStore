from django.db import models # type: ignore
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
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



class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    # Add related_name to avoid conflicts with Django's auth.User
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Change the related name to avoid clash
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Change the related name to avoid clash
        blank=True
    )

    def __str__(self):
        return self.username


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    address = models.TextField(blank=True, null=True)  # Editable later by user
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    postal_code = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'


@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Cart of {self.user.username}'



class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    book = models.ForeignKey(Books, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    added_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.quantity} of {self.book.name} in {self.cart.user.username}\'s cart'



class Order(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Shipped', 'Shipped'),
        ('Delivered', 'Delivered'),
        ('Canceled', 'Canceled')
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')
    order_date = models.DateTimeField(auto_now_add=True)
    delivery_address = models.TextField()
    payment_method = models.CharField(max_length=50, default='Credit Card')

    def __str__(self):
        return f'Order {self.id} by {self.user.username}'



class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    book = models.ForeignKey(Books, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.quantity} of {self.book.name} in Order {self.order.id}'



class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Books, on_delete=models.CASCADE)
    rating = models.IntegerField()  # e.g., from 1 to 5
    comment = models.TextField(blank=True, null=True)
    review_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review by {self.user.username} on {self.book.name}'
