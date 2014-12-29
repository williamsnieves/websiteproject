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

router = routers.DefaultRouter()
router.register(r'biography', BiographyViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'portfolios', PortfolioViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'labs', LabViewSet)
router.register(r'tutorials', TutorialViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'willisiteback.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls))
)
