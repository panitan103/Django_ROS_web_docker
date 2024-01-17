FROM ros:noetic-ros-base-focal

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-pip \
    python3-move-base-msgs \
    python3-rosdep \
    python3-rosinstall \
    python3-rosinstall-generator \
    python3-wstool \
    build-essential \
    ffmpeg \
    ros-$ROS_DISTRO-gazebo-ros-pkgs \
    ros-$ROS_DISTRO-geometry-tutorials \
    ros-$ROS_DISTRO-turtlebot3 \
    ros-$ROS_DISTRO-turtlebot3-msgs \
    ros-$ROS_DISTRO-turtlebot3-simulations \
    ros-$ROS_DISTRO-async-web-server-cpp \
    ros-$ROS_DISTRO-roswww \
    ros-$ROS_DISTRO-rosbridge-server \
    ros-$ROS_DISTRO-tf2-web-republisher \
    ros-$ROS_DISTRO-slam-gmapping \
    ros-$ROS_DISTRO-navigation \
    && rm -rf /var/lib/apt/lists/*

ADD django_ros_ws/ /django_ros_ws

WORKDIR /django_ros_ws

RUN rosdep install --from-paths src --ignore-src -r -y

RUN /bin/bash -c 'source /opt/ros/noetic/setup.bash;cd /django_ros_ws; catkin_make'

COPY ros_entrypoint.sh /usr/local/bin/ros_entrypoint.sh

RUN  chmod 755 /usr/local/bin/ros_entrypoint.sh

EXPOSE 11311

EXPOSE 9090

EXPOSE 8085


ENTRYPOINT ["/usr/local/bin/ros_entrypoint.sh"]

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

ADD django_ros_web/ /django_ros_web

WORKDIR /django_ros_web 

RUN pip3 install -U -r requirements.txt

EXPOSE 8000

EXPOSE 11311

EXPOSE 9090

RUN python3 manage.py collectstatic --noinput

#CMD ["python", "manage.py", "runserver", "0:8000"]


