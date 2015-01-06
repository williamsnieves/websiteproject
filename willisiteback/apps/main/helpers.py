from django.conf.urls import patterns, url
from .views import DetailCategoryView, DetailPortfolioView, PortfolioView


class PortfolioHelper():

    url = ()

    def built_url(self, view, name):
        self.url = url(r'^portfolio/mobile/$', view, name)

    def get_urls(self):
        self.built_url(r'^portfolio/mobile/$', DetailCategoryView.as_view(), name='detail-category')
        return self.url
