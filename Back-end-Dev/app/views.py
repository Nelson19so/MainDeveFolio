from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Contact, Testimonials, Project, BlogPost
from .serializer import ContactSerializercreate, TestimonialSerializerCreate, ProjectSerializerCreate, BlogPostSerializerCreate

# Create your views here.

# Contact Create View
class ContactpageListCreateapiView(generics.ListCreateAPIView):
  queryset = Contact.objects.all()
  serializer_class = ContactSerializercreate

# posting serializer
  def post(self, request):
    serializer = ContactSerializercreate(data=request.data)

    if serializer.is_valid():
      serializer.save()
      return Response({"message": "contactsuccessfully sent to Nelson"}, status=status.HTTP_201_CREATED)
    
    return Response({"error": "please check your form and try again."}, status=status.HTTP_400_BAD_REQUEST)
  
# Getting Contact
  def get(self, request):
    queryset = Contact.objects.all()
    serializer = ContactSerializercreate(queryset, many=True)
    return Response(serializer.data)
  
class ContactRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Contact.objects.all()
  serializer_class = ContactSerializercreate
  lookup_field = "pk"


# Testionial Create View
class TestimoniaListCreateAPIView(generics.ListCreateAPIView):
  queryset = Testimonials.objects.all()
  serializer_class = TestimonialSerializerCreate

# posting testimonial
  def post(self, request):
    testimonial = TestimonialSerializerCreate(data=request.data)

    if testimonial.is_valid():
      testimonial.save()
      return Response({"message":"Testimonial posted successfully"}, status=status.HTTP_201_CREATED)
    
    return Response({"error":"somthing went bad while posting your testimonials"}, status=status.HTTP_400_BAD_REQUEST)
  
# getting testimonial datas
  def get(self, request):
    queryset = Testimonials.objects.all()
    serializer = TestimonialSerializerCreate(queryset, many=True)
    return Response(serializer.data)
  
class TestimonialRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Testimonials.objects.all()
  serializer_class = TestimonialSerializerCreate
  lookup_field = 'pk'


#project testimonial
class ProjectSerializerCreateApiView(generics.ListCreateAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializerCreate

# posting data
  def post(self, request):
    Project = ProjectSerializerCreate(data=request.data)

    if Project.is_valid():
      Project.save()
      return Response({"message":"New project succesfully added!"}, status=status.HTTP_201_CREATED)
    
    return Response({"error":"something went wrong while posting your project."}, status=status.HTTP_400_BAD_REQUEST)
  
# getting data
  def get(self, request):
    queryset = Project.objects.all()
    serializer = ProjectSerializerCreate(queryset, many=True)
    return Response(serializer.data)

class ProjectSerializerRetrieveUpdateDestroyApiView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializerCreate
  lookup_field = "pk"


# blog post view
class BlogPostCreateApiView(generics.ListCreateAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializerCreate

# posting data
  def post(self, request):
    serializer = BlogPostSerializerCreate(data=request.data)

    if serializer.is_valid():
      serializer.save()
      return Response({"message":"successfully sent blogpost"}, status=status.HTTP_201_CREATED)
    
    return Response({"error":"something went wrong posting blogpost."}, status=status.HTTP_400_BAD_REQUEST)
  
  def get(self, request):
    queryset = BlogPost.objects.all()
    serializer = BlogPostSerializerCreate(queryset, many=True)
    return Response(serializer.data)
  
class BlogPostRetrieveUpdateDestroyApiView(generics.RetrieveUpdateDestroyAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializerCreate
  lookup_field = "pk"