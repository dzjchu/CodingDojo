from django.shortcuts import render

def index(request):
  print "Processed index page"
  return render(request, 'my_portfolio/index.html')

def testimonials(request):
  return render(request, 'my_portfolio/testimonials.html')
