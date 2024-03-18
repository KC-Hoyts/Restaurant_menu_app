from .models import *
from rest_framework import serializers

class FoodSerializer(serializers.ModelSerializer):

   class Meta:
       model = Food
       fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):

   class Meta:
       model = Category
       fields = ['id', 'categoryName', "categoryPhoto"]