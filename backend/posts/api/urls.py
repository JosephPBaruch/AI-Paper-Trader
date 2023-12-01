from django.urls import path
from rest_framework.routers import DefaultRouter 
from .views import PostViewSet, my_get_handler

post_router = DefaultRouter()
post_router.register(r'posts', PostViewSet)

urlpatterns = [
    path('my_endpoint', my_get_handler),
]