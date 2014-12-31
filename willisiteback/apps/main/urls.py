from django.conf.urls import patterns, url
from .views import HomeView, PortfolioView, LabsView, TutorialView, SiteExperimentalView, DetailCategory, DetailPortfolio

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^portfolio/$', PortfolioView.as_view(), name='portfolio'),
    url(r'^portfolio/movil/$', DetailCategory.as_view(), name='detail-category'),
    url(r'^portfolio/movil/detail/$', DetailPortfolio.as_view(), name='detail-portfolio'),
    url(r'^labs/$', LabsView.as_view(), name='labs'),
    url(r'^tutorials/$', TutorialView.as_view(), name='tutorials'),
    url(r'^site-experiment/$', SiteExperimentalView.as_view(), name='site-experiment'),
)