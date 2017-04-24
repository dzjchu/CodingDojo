from django.shortcuts import render, redirect
from . models import Book

def index(request):
  print Book.objects.all()

  context = {
    "all_books" : Book.objects.all()
  }
  return render(request, 'first_app/index.html', context)

def create(request):
  if request.method == 'POST':
    book = Book.objects.create(title = request.POST['title'], author = request.POST['author'], year = request.POST['year'])
  return redirect('/')