# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

import random, string

def index(request):
  return render(request, 'randomword/index.html')

def wordgen(request):
  if 'counter' in request.session:
    request.session['counter'] += 1
  else:
    request.session['counter'] = 1

  word = ''
  letters = list(string.ascii_lowercase)
  for times in range (0, 14):
        word = word + str(random.choice(letters))
  words = {
    'random_word': word
  }
  return render(request, 'randomword/index.html', words)

def reset(request):
    request.session.clear()
    return redirect('/')