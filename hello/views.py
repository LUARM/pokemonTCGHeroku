from django.shortcuts import render
from django.http import HttpResponse
import requests
import json

from .models import Greeting
from django.http import HttpResponse

# Create your views here.
def index(request):
    #r = requests.get('http://httpbin.org/status/418')
    r = requests.get('https://api.pokemontcg.io/v1/cards?types=dragon')
    print(r.text)
    #return HttpResponse('<pre>' + r.text + '</pre>')
    return render(request, "hello.html", {"text": r.text})

#new method that makes request to the pokemontcg
# return r.text
def cards(request):
    print("it prints here")
    cardType = request.GET.get('card_type')
    print(cardType)
    r = requests.get('https://api.pokemontcg.io/v1/cards?types=' + cardType)
    return HttpResponse(r.text, content_type="application/json")
 
    #return r.text

def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
