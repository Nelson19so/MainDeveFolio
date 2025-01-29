from django.db import models

# Create your models here.

class Testimonials(models.Model):
  name = models.CharField(max_length=20)
  work = models.CharField(max_length=20)
  testimonial = models.TextField(max_length=700)
  date_added = models.DateTimeField(auto_now_add=True)
  profile = models.ImageField(upload_to='profile/', blank=True, null=True)

  class Meta:
    ordering = ['-date_added']

  def __str__(self):
    return self.name

class Contact(models.Model):
  name = models.CharField(max_length=20)
  mobile_no = models.CharField(max_length=17)
  email = models.EmailField(max_length=30)
  description = models.TextField(max_length=700)
  date_added = models.DateTimeField(auto_now_add=True)

  class Meta:
    ordering = ["-date_added"]

  def __str__(self):
    return self.name
  
class Project(models.Model):
  projetct_name = models.CharField(max_length=200)
  article = models.CharField(max_length=200)
  link = models.CharField(max_length=500)
  project_Img = models.ImageField(upload_to='project/', blank=False, null=False)

  def __str__(self):
    return self.projetct_name
  
class BlogPost(models.Model):
  topic = models.CharField(max_length=200)
  heading = models.CharField(max_length=500)
  description = models.TextField(max_length=1000)
  blogpost_img = models.ImageField(upload_to='blogpost/', blank=False, null=False)
  date_posted = models.DateTimeField(auto_now_add=True)

  class Meta:
    ordering = ["-date_posted"]

  def __str__(self):
    return self.heading