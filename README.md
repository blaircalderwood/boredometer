# Boredometer

## Getting started on Mac

### Installing Python 3

Install Python 3 using Brew:
```brew install python3```

Check if Python3 is already accessible in Terminal:
```python3 --version```

If it is not accessible then add it to your path:

```export PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"```

If you have installed Python in another location then change the path accordingly.

### Installing Pip3

Pip3 can be installed by running:

```brew postinstall python3```

### Installing Django

```pip3 install django```

### Installing other dependencies via NPM
```npm install```

## Running the project

The project can be run using 

```python3 manage.py runserver```

If the database models have been altered in any way then they will need to be migrated. Do this by running:

```python3 manage.py makemigrations && python3 manage.py migrate```
