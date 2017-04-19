# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):
  name = models.CharField(max_length = 45)
  description = models.CharField(max_length = 45)
  weight = models.PositiveIntegerField()
  price = models.IntegerField()
  cost = models.IntegerField()
  category = models.CharField(max_length = 28)