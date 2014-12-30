from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
from django.views.generic import TemplateView


class HomeView(TemplateView):

    template_name = 'home/home.html'

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        context.update({'three': 'shit!!!'})
        return context


class PortfolioView(TemplateView):

    template_name = 'portfolio/portfolio.html'

    def get_context_data(self, **kwargs):
        context = super(PortfolioView, self).get_context_data(**kwargs)
        return context

class LabsView(TemplateView):
    template_name = 'labs/labs.html'

    def get_context_data(self, **kwargs):
        context = super(LabsView, self).get_context_data(**kwargs)
        return context

class TutorialView(TemplateView):
    template_name = 'tutorials/tutorials.html'

    def get_context_data(self, **kwargs):
        context = super(TutorialView, self).get_context_data(**kwargs)
        return context

class ContactView(TemplateView):
    template_name = 'contact/contact.html'

    def get_context_data(self, **kwargs):
        context = super(ContactView, self).get_context_data(**kwargs)
        return context

class SiteExperimentalView(TemplateView):
    template_name = 'siteexperiment/siteexperiment.html'

    def get_context_data(self, **kwargs):
        context = super(SiteExperimentalView, self).get_context_data(**kwargs)
        return context

