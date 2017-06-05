from django.shortcuts import render,HttpResponse
import datetime

def index(request):
  now = datetime.datetime.now()
  context = {
  "datetime":now
  }
  return render(request,'time_display/index.html', context)