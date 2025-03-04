from django.shortcuts import render
import json
import os
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView


# Load JSON data from file
def load_json_data():
    file_path = os.path.join(settings.BASE_DIR, 'JiocinemaClone', 'data', 'movies_data.json')
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

# API View to return JSON response
class MoviesDataView(APIView):
    def get(self, request, *args, **kwargs):
        data = load_json_data()
        return Response(data)


# Create your views here.
