from django.db import models # type: ignore

# Create your models here.


class Books(models.Model):
    name = models.CharField(max_length=25, unique=True)
    author = models.CharField(max_length=25)
    published_Date = models.DateField()
    description = models.TextField(max_length=100)
    isAvailable = models.BooleanField(default=False)
    ISBN = models.CharField(max_length=13)  # ISBN is a 13-character string
    stock=models.IntegerField()
    booksImg = models.ImageField(upload_to='books_images/')  # specify the upload directory

    def availability_status(self):
        return "Available" if self.isAvailable else "Stock Out"

    def __str__(self):
        return self.name
    
class Donation(models.Model):
    name = models.CharField(max_length=25, unique=True)
    author = models.CharField(max_length=25)
    published_Date = models.DateField()
    description = models.TextField(max_length=100)
    isAvailable = models.BooleanField(default=False)
    ISBN = models.CharField(max_length=13)  # ISBN is a 13-character string
    stock = models.IntegerField()
    booksImg = models.ImageField(upload_to='donations_images/')  # specify the upload directory

    def availability_status(self):
        return "Available" if self.isAvailable else "Stock Out"

    def __str__(self):
        return self.name
