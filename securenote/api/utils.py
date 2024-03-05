from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer

def getNotesList(request):
    notes = Note.objects.filter(user=request.user).order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

def getNoteDetail(request, pk):
    note = Note.objects.get(id=pk, user=request.user)
    serializer = NoteSerializer(note)
    return Response(serializer.data)

def createNote(request):
    data = request.data
    data['user'] = request.user.id  # Associate note with authenticated user
    serializer = NoteSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

def updateNote(request, pk):
    try:
        note = Note.objects.get(id=pk, user=request.user)
    except Note.DoesNotExist:
        return Response("Note not found", status=404)

    serializer = NoteSerializer(instance=note, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

def deleteNote(request, pk):
    try:
        note = Note.objects.get(id=pk, user=request.user)
    except Note.DoesNotExist:
        return Response("Note not found", status=404)

    note.delete()
    return Response('Note was deleted!')
