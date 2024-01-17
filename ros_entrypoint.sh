#!/bin/bash
set -e
#set -u

source "/opt/ros/$ROS_DISTRO/setup.bash"
source "/django_ros_ws/devel/setup.bash"
export TURTLEBOT3_MODEL=burger


exec "$@"