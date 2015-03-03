from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static



#handler404 = 'apps.main.views.handler404'
#handler500 = 'apps.main.views.handler500'

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'willisiteback.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^officewilli/', include(admin.site.urls)),
    url('', include('apps.main.urls')),
    url(r'^ckeditor/', include('ckeditor.urls')),

)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
