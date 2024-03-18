from django.db import models

class Food(models.Model):
    foodName = models.CharField(max_length=32)
    description = models.TextField()
    price = models.FloatField()
    foodPhoto = models.ImageField(null=True, blank=True, upload_to="food_images/")
    foodCategory = models.ForeignKey("Category", on_delete=models.CASCADE)


    def __str__(self):
        return self.foodName

class Category(models.Model):
    categoryName = models.CharField(max_length=32)
    categoryPhoto = models.ImageField(null=True, blank=True, upload_to="category_images/")

    def __str__(self):
        return self.categoryName
