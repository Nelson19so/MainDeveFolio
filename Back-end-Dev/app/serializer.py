from rest_framework import serializers
from .models import Contact, Testimonials, Project, BlogPost

# create serializers here

# contact serializer
class ContactSerializercreate(serializers.ModelSerializer):
 
 class Meta:
    model = Contact
    fields = ["id", "name", "mobile_no", "email", "description", "date_added"]

# Testimonial serializer
class TestimonialSerializerCreate(serializers.ModelSerializer):
  
  class Meta:
    model = Testimonials
    fields = ["id", "name", "work", "testimonial", "profile", "date_added"]

class ProjectSerializerCreate(serializers.ModelSerializer):
 
 class Meta:
    model = Project
    fields = ["id", "projetct_name", "article", "link", "project_Img"]

class BlogPostSerializerCreate(serializers.ModelSerializer):
 
  class Meta:
    model = BlogPost
    fields = ["id", "topic", "heading", "description", "blogpost_img", "date_posted"]