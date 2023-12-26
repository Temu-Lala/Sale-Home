from django.db import models

# Create your models here.


class House(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length = 500)
    photo_of_out_view = models.ImageField(upload_to="house_photos", blank=False)
    photo_of_salon_view = models.ImageField(upload_to="house_photos", blank=False)
    photo_of_baedroom_view = models.ImageField(upload_to="house_photos", blank=False)
    photo_of_bathroom_view = models.ImageField(upload_to="house_photos", blank=False)
    photo_of_kichn_view = models.ImageField(upload_to="house_photos", blank=False)
    baderoom = models.IntegerField(default = 0)
    bathrooms = models.IntegerField(default=0)
    description = models.TextField(max_length = 1000000)
    status = models.CharField(max_length=20, choices=[("available", "Available"), ("sold", "Sold"), ("limited", "Limited"), ("pending", "Pending")])
    price = models.DecimalField(max_digits=100, decimal_places=2)
    square_footage = models.IntegerField()
    city = models.CharField(max_length = 500)
    address = models.CharField(max_length = 500)
    year_built = models.IntegerField()


    def __str__(self):
        return self.name



class Message(models.Model):
    name = models.CharField(max_length = 500)
    email = models.EmailField(max_length = 500)
    Message = models.TextField(max_length = 1000000)

    def __str__(self):
        return self.name



