### To install all requirements ###
bash install.sh
It will ask you to install turtlebot simulation or not

Verified installation with 
- Jetson Nano Ubuntu 20.04 ROS noetic
- Mac air M1 Parallel ubuntu 20.04 ROS noetic
- Raspberry Pi 4 4GB Ubuntu 20.04 ROS noetic

###############################################################################################################

### to run launch file django Web ###
roslaunch django_ros django_ros_web.launch 

### to run web_socket ###
roslaunch django_ros web_socket.launch 

### to run turtlebot slam simulation ###
roslaunch django_ros turtlebot_sim.launch

### to run realsense point cloud test ###
roslaunch django_ros realsense_pointcloud_demo.launch

### to run image streaming ###
roslaunch django_ros image_stream.launch

###############################################################################################################

### Django_ros with Turtlebot_simulation slam mapping ###
roslaunch django_ros django_ros_web.launch turtle:=true mode_turtles:=mapping slam:=gmapping web_socket:=true
  turtle => true,false 
  	true => Open turtle simulation in same terminal 
  	false(default) => Open only django_ros
  mode_turtles => (dafault mapping) to enable turtlebot mode 
 	mapping => to enable mapping mode
	    slam => gmapping(default), cartographer, hector, karto, frontier_exploration  (Use in mapping mode) 
  web_socket => true,false
  	true => turn on websocket in the same terminal
  	false(default) => must run web_socket in other terminal
  	
### Django_ros with Turtlebot_simulation navigation ###
roslaunch django_ros django_ros_web.launch turtle:=true mode_turtles:=navigate map_location:=$HOME/map.yaml web_socket:=true
  turtle => true,false 
  	true => Open turtle simulation in same terminal 
  	false(default) => Open only django_ros
  mode_turtles => (dafault mapping) to enable turtlebot mode 
 	navigate => to enable navigate mode
	    map_location => Location and name of saved map default will be in $HOME/map.yaml (Use in navigate mode) 
  web_socket => true,false
  	true => turn on websocket in the same terminal
  	false(default) => must run web_socket in other terminal
  	
### Django_ros with Realsense ###
roslaunch django_ros django_ros_web.launch realsense:=true stream_realsense:=true model:=true web_socket:=true
   realsense => true,false
	true => Open realsense ros
	false(default) => Open only django_ros
   model => true,false
	true => Open realsense model
	false => Open only realsense ros
   stream_realsense > true,false
   	true(default) => turn on streamimg image it will stream all image that apear in roscore. Can check in localhost:8080
   	false => not streaming image
   web_socket => true,false
  	true => turn on websocket in the same terminal
  	false(default) => must run web_socket in other terminal


###############################################################################################################

### Turtlebot_simulation slam mapping ###
roslaunch django_ros turtlebot_sim.launch mode:=mapping  slam:=gmapping web_socket:=true
  mode => (dafault mapping) to enable turtlebot mode
  	mapping => to enable mapping mode
	    slam => gmapping(default), cartographer, hector, karto, frontier_exploration (Use in mapping mode) 
  web_socket => true,false
  	true => turn on websocket in the same terminal
  	false(default) => must run web_socket in other terminal

### Turtlebot_simulation navigation ###
roslaunch django_ros turtlebot_sim.launch mode:=navigate map_location:=$HOME/map.yaml web_socket:=true
   mode => (dafault mapping) to enable turtlebot mode 
	navigate => to enable navigate mode
 	    map_location => Location of saved map (Use in navigate mode) 
   web_socket => true,false
  	true => turn on websocket in the same terminal
  	false(default) => must run web_socket in other terminal

###############################################################################################################

### Realsense point cloud ###
roslaunch django_ros realsense_pointcloud_demo.launch web_socket:=true mode:=camera stream:=true
   mode => (dafault camera) to enable realsense camera
	camera(dafault) => to run rs_camera_640_480.launch
	rgbd => to run rs_camera_rgbd.launch

   web_socket => true,false
  	true => turn on websocket in the same terminal
  	false(default) => must run web_socket in other terminal
  	
   stream > true,false
   	true(default) => turn on streamimg image it will stream all image that apear in roscore. Can check in localhost:8080
   	false => not streaming image
   	
   width_cam > (default 640) Width of realsense image 
   
   height_cam > (default 480) height of realsense image 
   
   fps_cam > (default 6) frame rate of realsense image
   
   camera_reset > true,false
   	true => Enable initial reset for realsense camera
   	false(default) => Disable initial reset for realsense camera

   model > true,false
	true => Launch realsense ros with D435 model
	false(default) => Run realsense with normal mode


###############################################################################################################


In case that have to use robot in different IP (EX. Roscore&django 192.168.1.104 | robot 192.168.1.22)

Edit IP in 'django_ros_web/static/js/ros_web_socket.js' to robot IP(or ip that run websocket)

roscore
export ROS_HOSTNAME=192.168.1.104
export ROS_MASTER_URI=http://192.168.1.104:11311

robot
export ROS_HOSTNAME=192.168.1.22
export ROS_MASTER_URI=http://192.168.1.104:11311

OR

Websocket will help to run ros web in different roscore (EX. django 192.168.1.104 | robot 192.168.1.22)
that means it not have to run in the same roscore.

Edit IP in 'django_ros_web/static/js/ros_web_socket.js' to robot IP(or ip that run websocket)



