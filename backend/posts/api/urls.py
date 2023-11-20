from django.urls import path
from rest_framework.routers import DefaultRouter 
from .views import PostViewSet

post_router = DefaultRouter()
post_router.register(r'posts', PostViewSet)

'''

# your_app_name/urls.py
from django.urls import path
from .views import my_get_handler

urlpatterns = [
    path('my-get-endpoint/', my_get_handler, name='my_get_handler'),
]'''