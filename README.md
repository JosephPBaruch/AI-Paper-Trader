# Django-unreacted-stock
React and Django combined to create a web application displaying and analyzing stock prices. 

# Frontend 
npm run dev


virtualenv env 
source bin/activate       
pip install django djangorestframework django-cors-headers
django-admin startproject core
python manage.py migrate

python manage.py makemigrations <!-- Run the backend-->
python manage.py runserver