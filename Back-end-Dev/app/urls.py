from django.urls import path
from . import views

urlpatterns = [
  path('contact/', views.ContactpageListCreateapiView.as_view(), 
       name="ContactpageListCreateapiView"),
  path('contact/<int:pk>/', views.ContactRetrieveUpdateDestroyAPIView.as_view(), 
       name="ContactRetrieveUpdateDestroyAPIView"),
  path('testimonial/', views.TestimoniaListCreateAPIView.as_view(),
       name="TestimoniaListCreateAPIView"),
  path('testimonial/<int:pk>/', views.TestimonialRetrieveUpdateDestroyAPIView.as_view(), 
       name='TestimonialRetrieveUpdateDestroyAPIView'),
  path('project/', views.ProjectSerializerCreateApiView.as_view(), name="ProjectSerializerCreateApiView"),
  path('project/<int:pk>/', views.ProjectSerializerRetrieveUpdateDestroyApiView.as_view(), 
       name="ProjectSerializerRetrieveUpdateDestroyApiView"),
  path('blogpost/', views.BlogPostCreateApiView.as_view(), name="BlogPostCreateApiView"),
  path('blogpost/<int:pk>/', views.BlogPostRetrieveUpdateDestroyApiView.as_view(), 
       name="BlogPostRetrieveUpdateDestroyApiView"),
]