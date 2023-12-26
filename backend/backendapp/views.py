from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from .models import House, Message
from .serializers import HouseSerializers, MessageSerializer
from rest_framework.viewsets import ModelViewSet


class HouseViewset(ModelViewSet):
    serializer_class = HouseSerializers
    queryset = House.objects.all()


class MessageViewset(ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    
 