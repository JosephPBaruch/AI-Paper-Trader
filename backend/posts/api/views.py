from rest_framework.viewsets import ModelViewSet
from ..models import Post 
from .serializers import PostSerializer
from django.http import JsonResponse

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serilizer_class = PostSerializer
    

def my_get_handler(request, param1, param2):
    # Your logic here
    data = {'message': f'GET request received with parameters: {param1}, {param2}'}
    return JsonResponse(data)