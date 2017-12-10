# Django-ReactJS Skeleton

[![GitHub license](https://img.shields.io/github/license/tales-info/django-reactjs-skeleton.svg)](https://github.com/tales-info/django-reactjs-skeleton/blob/master/LICENSE)



Base an application using Django and ReactJS.

## Requirements

- Python 3.6
- NodeJS 5.5.1

## Installation

Python

```ssh
pip install -r requirements.txt
```

Node JS
```ssh
npm install
```

## Run django project

This will start a local server at http://localhost:8000 where you can see the example page of Single Page Application with ReactJS.

```ssh
python manage.py runserver
```

The URL http://localhost:8000/admin open django interface admin.

## Build/Watch ReactJS App

Build scritps and stylesheet
```ssh
npm run build
```

Watch any modifications to the files. With each modification the application is rebuilt.

```ssh
npm run watch
```

The application is built in the ```./assets/dist``` directory.
