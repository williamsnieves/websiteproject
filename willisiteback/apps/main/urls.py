from django.conf.urls import patterns, url
from .views import HomeView, PortfolioView, LabsView, TutorialView, SiteExperimentalView, DetailCategoryView, DetailPortfolioView
from .helpers import PortfolioHelper

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^portfolio/$', PortfolioView.as_view(), name='portfolio'),
    url(r'^portfolio/(?P<category_name>\w+)/$', DetailCategoryView.as_view(), name='detail-category'),
    url(r'^portfolio/(?P<category_name>\w+)/(?P<slug>[\w\-]+)/$', DetailPortfolioView.as_view(), name='detail-portfolio'),
    url(r'^labs/$', LabsView.as_view(), name='labs'),
    url(r'^tutorials/$', TutorialView.as_view(), name='tutorials'),
    url(r'^site-experiment/$', SiteExperimentalView.as_view(), name='site-experiment'),
)