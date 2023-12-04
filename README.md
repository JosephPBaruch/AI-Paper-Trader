# Django-unreacted-stock
React and Django combined to create a web application displaying and analyzing stock prices. 

# Frontend 
npm run dev

# Run Backend
source bin/activate       (go into env first then run this line)
python manage.py makemigrations (Go into backend) ( Make And "Push" Changes )
python manage.py runserver (Run the backend)


## Creating backend
virtualenv env 
pip install django djangorestframework django-cors-headers
django-admin startproject core
python manage.py migrate

## Frontend Notes
- Create Routes at /Users/joseph.baruch/REPO/Django-unreacted-stock/frontend/src/App.jsx
- Include jsx files into App.jsx and copy form
- Go to different Routes with navigate('/route') or '<Link to='/route' >'

## Backend Notes
- Create and manage backend endpoints at /Users/joseph.baruch/REPO/Django-unreacted-stock/backend/core/urls.py
- Backend handlers at /Users/joseph.baruch/REPO/Django-unreacted-stock/backend/core/views.py


