#!/bin/bash
cd ~/django_ros_web
source .venv/bin/activate
python3 manage.py collectstatic --noinput
python3 manage.py runserver 0:8000
