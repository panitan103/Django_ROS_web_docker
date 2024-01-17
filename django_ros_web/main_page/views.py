
from django.shortcuts import render
import os
import time



# Create your views here.
def index(request):
    return render(request,"index.html")

def image_stream(request):
    return render(request,"image_stream.html")

def mapping(request):
    save_map=request.GET.get('save_map')
    if save_map=='save_map':
        print(save_map)
        os.system("rosrun map_server map_saver -f ~/map") 
    return render(request,"mapping.html")

def map_3d(request):
    return render(request,"map_3d.html")

def navigate(request):
    #load_map=0
    #stop_navigate=0
    #clear_map=0
   
    if request.method == 'GET':
        load_map=request.GET.get('load_map')
        stop_navigate=request.GET.get('stop_command')
        clear_map=request.GET.get('clear_map')
        
        if load_map=='load':
            print(load_map)
            os.system("rosrun map_server map_server $HOME/map.yaml") 

        
        if stop_navigate=='stop':
            print(stop_navigate)
            os.system("rostopic pub -1 /move_base/cancel actionlib_msgs/GoalID -- {}") 
        
        if clear_map=='clear':
            print(clear_map)
            os.system("kill $(ps aux | grep map_server | awk '{print $2}')") 
            

    return render(request,"navigate.html")


def model_3d(request):
    return render(request,"model_3d.html")

def point_cloud(request):
    return render(request,"point_cloud.html")

def test(request):
    return render(request,"test.html")
