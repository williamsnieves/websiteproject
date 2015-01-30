from django.conf.urls import patterns, url
from django.conf import settings
from django.views.generic import TemplateView
from .views import HomeView, PortfolioView, LabsView, TutorialView, SiteExperimentalView, DetailCategoryView, DetailPortfolioView, DetailTutorialView, DetailLabsView, CommentsView
from apps.main import views
from .helpers import PortfolioHelper

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^portfolio/$', PortfolioView.as_view(), name='portfolio'),
    url(r'^portfolio/(?P<category_name>\w+)/$', DetailCategoryView.as_view(), name='detail-category'),
    url(r'^portfolio/(?P<category_name>\w+)/(?P<slug>[\w\-]+)/$', DetailPortfolioView.as_view(), name='detail-portfolio'),
    url(r'^labs/$', LabsView.as_view(), name='labs'),
    url(r'^tutorials/$', TutorialView.as_view(), name='tutorials'),
    url(r'^comments/$', CommentsView.as_view(), name='comments'),
    url(r'^tutorials/(?P<slug>[\w\-]+)/$', DetailTutorialView.as_view(), name='tutorials'),
    url(r'^labs/(?P<slug>[\w\-]+)/$', DetailLabsView.as_view(), name='labs'),
    url(r'^site-experiment/$', SiteExperimentalView.as_view(), name='site-experiment'),
    url(r'^404/$', views.custom404, name='404'),
    url(r'^500/$', views.custom500, name='500'),
)



