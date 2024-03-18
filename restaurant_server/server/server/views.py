from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
import django_filters

from backend.serializers import *
from backend.models import *


class FoodViewset(viewsets.ModelViewSet):
    queryset = Food.objects.all().order_by('foodName')
    serializer_class = FoodSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['foodCategory']


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer