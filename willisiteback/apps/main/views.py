import datetime
from django.http import HttpResponse
from django.shortcuts import render, render_to_response

# Create your views here.
from django.template import RequestContext
from django.views.generic import TemplateView, DetailView, ListView, CreateView
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from apps.biography.models import Biography
from apps.portfolios.models import Portfolio
from apps.categories.models import Category
from apps.labs.models import Lab
from apps.tutorials.models import Tutorial
from apps.comments.models import Comment
from apps.skills.models import Skill
from django import http
import json
from django.core import serializers
from django.core.urlresolvers import resolve


class HomeViewMixin(object):

    def get_context_data(self, **kwargs):
        context = super(HomeViewMixin, self).get_context_data(**kwargs)
        context_object_name="home_list"
        profile = Biography.objects.all()
        skills = Skill.objects.all()

        context['profile'] = profile
        context['skills'] = skills

        categories = Category.objects.all()
        context['categories'] = categories

        current_url = resolve(self.request.path_info).url_name

        context['current_url'] = current_url



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

class GameView(HomeViewMixin, TemplateView):

    template_name = 'games/ninjasurviving.html'


class PortFolioViewMixin(object):
    def get_context_data(self, **kwargs):
        context = super(PortFolioViewMixin, self).get_context_data(**kwargs)
        categories = Category.objects.all()
        context['categories'] = categories
        current_url = resolve(self.request.path_info).url_name

        context['current_url'] = current_url
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
        current_url = resolve(self.request.path_info).url_name

        context['current_url'] = current_url
        return context

class DetailLabsView(DetailView):
    model = Lab
    context_object_name = "lab_detail"
    template_name = 'labs/detaillabs.html'

    def get_context_data(self, **kwargs):
        context = super(DetailLabsView, self).get_context_data(**kwargs)
        context['isImage'] = True
        context["info_author"] = Biography.objects.all()
        context["comment_counter"] = Comment.objects.filter(lab_id=self.object.id).count()
        current_url = resolve(self.request.path_info).url_name

        context['current_url'] = current_url
        self.object = self.get_object()
        context["comments"] = Comment.objects.filter(lab_id=self.object.id)
        return context

    def query_set(self):
        if self.kwargs.get('slug'):
            queryset = self.model.objects.filter(slug=self.kwargs['slug'])
        else:
            queryset = super(DetailLabsView, self).get_queryset()

        return queryset

class TutorialView(ListView):
    model = Tutorial
    context_object_name = "tutorial_list"
    template_name = 'tutorials/tutorials.html'

    def get_context_data(self, **kwargs):
        context = super(TutorialView, self).get_context_data(**kwargs)
        current_url = resolve(self.request.path_info).url_name

        context['current_url'] = current_url
        return context

class DetailTutorialView(DetailView):
    model = Tutorial
    context_object_name = "tutorial_detail"
    template_name = 'tutorials/detailtutorials.html'


    def get_context_data(self, **kwargs):
        context = super(DetailTutorialView, self).get_context_data(**kwargs)
        context["info_author"] = Biography.objects.all()
        context["comment_counter"] = Comment.objects.filter(tutorial_id=self.object.id).count()
        current_url = resolve(self.request.path_info).url_name

        context['current_url'] = current_url

        self.object = self.get_object()
        context["comments"] = Comment.objects.filter(tutorial_id=self.object.id)

        print(context)

        return context

    def query_set(self):
        if self.kwargs.get('slug'):
            queryset = self.model.objects.filter(slug=self.kwargs['slug'])
        else:
            queryset = super(DetailTutorialView, self).get_queryset()

        return queryset

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



class JSONResponseMixin(object):
    def render_to_response(self, context):
        "Returns a JSON response containing 'context' as payload"
        return self.get_json_response(self.convert_context_to_json(context))

    def get_json_response(self, content, **httpresponse_kwargs):
        "Construct an `HttpResponse` object."
        return http.HttpResponse(content,
                                 content_type='application/json',
                                 **httpresponse_kwargs)

    def convert_context_to_json(self, context):
        "Convert the context dictionary into a JSON object"
        # Note: This is *EXTREMELY* naive; in reality, you'll need
        # to do much more complex handling to ensure that arbitrary
        # objects -- such as Django model instances or querysets
        # -- can be serialized as JSON.
        return json.dumps(context)

class CommentsView(JSONResponseMixin, CreateView):
    model = Comment
    context_object_name = "comment_detail"
    template_name = 'comments/comments.html'

    @method_decorator(csrf_protect)
    def post(self, request, *args, **kwargs):

        for items in request.POST:
            data = items

        data_json = json.loads(data)
        print(data_json)

        if data_json['id_tutorial']:
            tutorial = Tutorial.objects.get(id=int(data_json['id_tutorial']))
            comment = Comment(comment=data_json['comment'], destination=data_json['network'], created=datetime.datetime.today(), username=data_json['username'], link_profile_image=data_json['image'], tutorial_id=tutorial)


        if data_json['id_lab']:
            lab = Lab.objects.get(id=int(data_json['id_lab']))
            comment = Comment(comment=data_json['comment'], destination=data_json['network'], created=datetime.datetime.today(), username=data_json['username'], link_profile_image=data_json['image'], lab_id=lab)

        comment.save()

        comments = Comment.objects.all()
        comments_serialize = serializers.serialize('json', comments)
        comments_load = json.loads(comments_serialize)
        data_comments = json.dumps(comments_load[0])

        print(comments_serialize)

        data_json["commet_count"] = Comment.objects.count()
        data_json["comments"] = comments_serialize

        return self.render_to_response(data_json)

    def render_to_response(self, context):
        return self.render_to_response(self, context)

    def render_to_response(self, context):
        if self.request.is_ajax():
            return JSONResponseMixin.render_to_response(self, context)
        else:
            return self.render_to_response(self, context)





def custom404(request):
    return render(request, '404.html')


def custom500(request):
    return render(request, '500.html')


