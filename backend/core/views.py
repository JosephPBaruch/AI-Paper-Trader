from django.http import JsonResponse

def my_get_handler(request, param1, param2):
    # Your logic here
    data = {'message': f'GET request received with parameters: {param1}, {param2}'}
    return JsonResponse(data)