
from unicodedata import name
from django.urls import path
from .views import *
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home, name='home'),
    path('about/', aboutus, name='about'),
    path('services/', servicesv, name='services'),
    path('faqs/', faqsv, name='faqs'),
    path('contact/', contactv, name='contact'),
    
]
urlpatterns += staticfiles_urlpatterns()
if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
        
