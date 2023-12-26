from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import HouseViewset,MessageViewset

post_router = DefaultRouter()
post_router.register(r'homes',HouseViewset, basename='homes') 
message_router = DefaultRouter()
message_router.register(r'message',MessageViewset, basename='message') 


urlpatterns = [
    path('', include(post_router.urls)),
    path('message/', include(message_router.urls)),

]
