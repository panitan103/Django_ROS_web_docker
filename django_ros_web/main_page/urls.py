"""GUI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path

from . import views
#from django.conf.urls import url


urlpatterns = [
    path('',views.index),
    path('image_stream/',views.image_stream),
    path('mapping/',views.mapping),
    path('navigate/',views.navigate),
    path('map_3d/',views.map_3d),
    path('point_cloud/',views.point_cloud),
    path('model_3d/',views.model_3d),
    path('test/',views.test),


]

