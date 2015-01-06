from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView, DetailView, ListView
from apps.biography.models import Biography
from apps.portfolios.models import Portfolio
from apps.categories.models import Category
from apps.labs.models import Lab


class HomeViewMixin(object):

    def get_context_data(self, **kwargs):
        context = super(HomeViewMixin, self).get_context_data(**kwargs)
        context_object_name="home_list"
        profile = Biography.objects.all()

        context['profile'] = profile

        for prof in profile:
            listdesc = prof.category_list_short.split(",")

        # shortdesc = {
        #     'itemsdesc': {
        #         'maintit': listdesc[0],
        #         'firsttit': listdesc[1],
        #         'secondtit': listdesc[2],
        #         'thirdtit': listdesc[3]
        #     }
        # }

        #print(shortdesc)

        context['shortdescription'] = listdesc

        return context

class HomeView(HomeViewMixin, TemplateView):

    template_name = 'home/home.html'



class PortFolioViewMixin(object):
    def get_context_data(self, **kwargs):
        context = super(PortFolioViewMixin, self).get_context_data(**kwargs)
        categories = Category.objects.all()
        context['categories'] = categories
        return context

class PortfolioView(PortFolioViewMixin, TemplateView):

    template_name = 'portfolio/portfolio.html'


class LabsView(ListView):
    model = Lab
    context_object_name = "lab_list"
    template_name = 'labs/labs.html'

    def get_context_data(self, **kwargs):
        context = super(LabsView, self).get_context_data(**kwargs)
        context['isImage'] = True
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


class DetailCategorylMixin(object):
    pass



class DetailCategoryView(ListView):
    model = Portfolio
    context_object_name = "category_list"
    template_name = 'portfolio/detailcategory.html'

    def get_queryset(self):
        if self.kwargs.get('category_name'):
            category_id = Category.objects.get(name=self.kwargs['category_name']).id
            queryset = self.model.objects.filter(id_categories=category_id)
        else:
            queryset = super(DetailCategoryView, self).get_queryset()

        return queryset


class DetailPortfolioView(DetailView):
    model = Portfolio
    context_object_name = "portfolio_detail"
    template_name = 'portfolio/detailportfolio.html'

    def get_queryset(self):
        if self.kwargs.get('slug'):
            queryset = self.model.objects.filter(slug=self.kwargs['slug'])
        else:
            queryset = super(DetailPortfolioView, self).get_queryset()

        return queryset
