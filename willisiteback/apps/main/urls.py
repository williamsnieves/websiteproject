from django.conf.urls import patterns, url
from .views import HomeView, PortfolioView, LabsView, TutorialView, SiteExperimentalView

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^portfolio/$', PortfolioView.as_view(), name='portfolio'),
    url(r'^labs/$', LabsView.as_view(), name='labs'),
    url(r'^tutorials/$', TutorialView.as_view(), name='tutorials'),
    url(r'^site-experiment/$', SiteExperimentalView.as_view(), name='site-experiment'),
)