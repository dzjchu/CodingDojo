from django.shortcuts import render,redirect


# Create your views here.
def index(request):
  return render(request, 'products/index.html')


def create(request):
  
  return redirect('/')