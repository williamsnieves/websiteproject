from .base import *
# SECURITY WARNING: don't run with debug turned on in production!
#utf-8
DEBUG = True
TEMPLATE_DEBUG = True

DATABASES = {
    'default': {
        'ENGINE':'django.db.backends.postgresql_psycopg2',
        'NAME': 'willisite',
        'USER': 'postgres',
        'PASSWORD': '1234',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '2!_vn197v&w2v-4^hwz448r)oxf^iozfzgija1fp60@)p74%d%'

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'autofixture',
    'django_extensions',
    'rest_framework',
    'apps.biography',
    'apps.skills',
    'apps.categories',
    'apps.portfolios',
    'apps.tags',
    'apps.labs',
    'apps.tutorials',
    'apps.comments',
)

INTERNAL_IPS = ("127.0.0.1",)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'willisiteback.urls'

STATIC_URL = '/static/'

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'django.contrib.staticfiles.finders.FileSystemFinder',
)


STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.CachedStaticFilesStorage'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'content')
#MEDIA_ROOT = os.sep.join(os.path.abspath(__file__).split(os.sep)[:2] + ['media'])
MEDIA_ROOT = os.path.join(PROJECT_ROOT, 'media')
MEDIA_URL = '/media/'

EMAIL_USE_TLS = True

EMAIL_HOST = 'smtp.gmail.com'

EMAIL_HOST_USER = 'williamsnieves@gmail.com'

EMAIL_HOST_PASSWORD = 'ERwilli12345678.'

EMAIL_PORT = 587