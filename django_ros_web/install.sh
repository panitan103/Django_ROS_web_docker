##############Only first time###########


### install django_ros package and dependency ###
sudo apt update -y
sudo apt upgrade -y

cd ~/django_ros_web/django_ros_ws
rosdep install --from-paths src --ignore-src -r -y
catkin_make

### install Python requirement###
cd ..

sudo apt install -y python3-pip python3-move-base-msgs

source ~/django_ros_web/.venv/bin/activate
pip3 install -U -r requirements.txt
deactivate
### Add source and export to bashrc ###
echo "source ~/django_ros_web/django_ros_ws/devel/setup.bash" >> ~/.bashrc
echo "export TURTLEBOT3_MODEL=burger" >> ~/.bashrc
source ~/.bashrc

echo -e "\e[93m\n\e[1mFinished install Django ROS.\n\e[0m"

read -p $'\e[32mInstall Turtlebot Simulation? [Y,n] \e[0m: ' turtle_sim
read -p $'\e[32mInstall Realsense ROS ? [Y,n] \e[0m: ' realsense

#########################################
############# Turtlebot simulation#######

case $turtle_sim in 
  y|Y) sudo apt install -y ros-$ROS_DISTRO-gazebo-ros-pkgs ros-$ROS_DISTRO-geometry-tutorials ros-$ROS_DISTRO-turtlebot3 ros-$ROS_DISTRO-turtlebot3-msgs ros-$ROS_DISTRO-turtlebot3-simulations
	
	
	echo -e "\e[96m\n\e[1mFinished install Turtlebot Simulation.\n\e[0m";;
  
esac
#########################################
############# Realsense #######
case $realsense in 
  y|Y) cp ~/django_ros_web/install_realsense.sh ~/
  sudo chmod +x ~/install_realsense.sh
  bash ~/install_realsense.sh
  sudo apt install -y ros-$ROS_DISTRO-realsense2-camera ros-$ROS_DISTRO-realsense2-description
	
	echo -e "\e[96m\n\e[1mFinished install Realsense ROS.\n\e[0m";;
	
esac

echo -e "\e[91m\n\e[1mExit installation.\n\e[0m"
