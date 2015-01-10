"""
Django settings for willisiteback project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
from django.core.exceptions import ImproperlyConfigured
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
APPS_DIR = os.path.dirname(os.path.dirname(__file__))
PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))


def get_env_variable(variable_name):

    try:
        return os.environ[variable_name]
    except:
        error_msg = "set the %s enviroment variable" % variable_name
        raise ImproperlyConfigured(error_msg)



# Quick-start development settingsasd - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/