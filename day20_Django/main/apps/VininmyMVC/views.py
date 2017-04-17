from django.shortcuts import render

def index(request):
  return render(request, 'VininmyMVC/index.html')
def show(request):
  print request.method
  return render(request, 'VininmyMVC/show_users.html')
