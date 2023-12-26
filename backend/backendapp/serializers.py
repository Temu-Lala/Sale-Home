from rest_framework.serializers import ModelSerializer
from .models import House,Message
class HouseSerializers(ModelSerializer):
    class Meta:
        model = House
        fields ='__all__'



class MessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'      










