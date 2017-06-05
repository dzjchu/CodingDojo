from django.conf.urls import url
from . import views

urlpatterns = [
  url(r'^$', views.index),
  url(r'^wordgen$', views.wordgen),
  url(r'^reset$', views.reset),
]