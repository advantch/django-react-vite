from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from apps.common.views import HealthView
from .api import api

urlpatterns = [
    path("admin/", admin.site.urls),
    path('chat/', include('apps.chat.urls')),

    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("dash/", TemplateView.as_view(template_name="dash.html"), name="dash"),
    path("team/", TemplateView.as_view(template_name="team.html"), name="team"),
    path("stats", HealthView.as_view(), name="stats"),
    path("vite/", TemplateView.as_view(template_name="vite.html"), name="vite"),
    path("ht/", include("health_check.urls")),
    path("api/", api.urls),
]
