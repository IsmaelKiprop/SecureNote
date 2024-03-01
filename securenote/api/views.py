from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.serializers import Serializer
from .models import Note
from .serializers import NoteSerializer
from api import serializers
from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login as auth_login


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/<id>/',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': "Note data schema"},
            'description': 'Creates a new note with data sent in the post request'
        },
        {
            'Endpoint': '/notes/<id>/update/',
            'method': 'PUT',
            'body': {'body': "Updated note data schema"},
            'description': 'Updates an existing note with data sent in the request'
        },
        {
            'Endpoint': '/notes/<id>/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an existing note'
        },
    ]
    return Response(routes)

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if not username or not password:
        return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username is already taken'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create_user(username=username, password=password)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        auth_login(request, user)  # Use auth_login instead of login to avoid conflict
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])  # Add permission class for authentication
def getNotes(request):
    if request.method == 'GET':
        return getNotesList(request)
    if request.method == 'POST':
        return createNote(request)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])  # Add permission class for authentication
def getNote(request, pk):
    if request.method == 'GET':
        return getNoteDetail(request, pk)
    if request.method == 'PUT':
        return updateNote(request, pk)
    if request.method == 'DELETE':
        return deleteNote(request, pk)

@api_view(['POST'])
@permission_classes([IsAuthenticated])  # Add permission class for authentication
def createNote(request):
    data = request.data
    if 'body' not in data:
        return Response({'detail': 'Missing "body" in request data'}, status=status.HTTP_400_BAD_REQUEST)
    note = Note.objects.create(body=data['body'])
    serializer = NoteSerializer(note)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])  # Add permission class for authentication
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])  # Add permission class for authentication
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')