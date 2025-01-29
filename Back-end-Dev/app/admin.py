from django.contrib import admin
from .models import Testimonials, Contact, Project, BlogPost

# Register your models here.

admin.site.register(Testimonials)
admin.site.register(Contact)
admin.site.register(Project)
admin.site.register(BlogPost)