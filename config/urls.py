from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .api import api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("vite/", TemplateView.as_view(template_name="vite.html"), name="vite"),
    path("api/", api.urls),
]
