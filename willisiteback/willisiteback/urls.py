from django.conf.urls import patterns, include, url
from django.contrib import admin
from apps.biography.views import BiographyViewSet
from apps.skills.views import SkillViewSet
from apps.portfolios.views import PortfolioViewSet
from apps.categories.views import CategoryViewSet
from apps.tags.views import TagViewSet
from apps.labs.views import LabViewSet
from apps.tutorials.views import TutorialViewSet
from apps.comments.views import CommentViewSet
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'biography', BiographyViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'portfolios', PortfolioViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'labs', LabViewSet)
router.register(r'tutorials', TutorialViewSet)
router.register(r'comments', CommentViewSet)

#handler404 = 'apps.main.views.handler404'
#handler500 = 'apps.main.views.handler500'

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'willisiteback.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls)),
    url('', include('apps.main.urls')),
    url(r'^ckeditor/', include('ckeditor.urls')),

)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
