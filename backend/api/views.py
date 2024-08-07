from django.shortcuts import render #type:ignore
from django.http import HttpResponse #type:ignore
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response


class BookViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Books.objects.all()
    serializer_class = BookSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=404)

    def retrieve(self, request, pk=None):
        books= self.queryset.get(pk=pk)
        serializer = self.serializer_class(books)
        return Response(serializer.data)

    def update(self, request, pk=None):
        books= self.queryset.get(pk=pk)
        serializer = self.serializer_class(books, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=404)

    def destroy(self, request, pk=None):
        books= self.queryset.get(pk=pk)
        books.delete()
        return Response(status=204)