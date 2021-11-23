from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin

admin.autodiscover()

import hello.views

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

# path "load_cards" hello.views.load_cards
urlpatterns = [
    path("", hello.views.index, name="index"),
    path("db/", hello.views.db, name="db"),
    path("admin/", admin.site.urls),
    path("load_cards/",hello.views.cards,name="cards_found"),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
