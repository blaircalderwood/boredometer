from django.contrib import admin
from django.urls import path
from boredometer_app import views as main_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('vote', main_views.main_screen, name='vote'),
    path('vote/<str:lesson_id>/', main_views.voting_screen, name='vote'),
    path('vote/<str:lesson_id>/bored', main_views.bored, name='bored'),
    path('join', main_views.join, name='join'),
    path('', main_views.main_screen, name='main_screen'),
    path('create', main_views.create, name='create'),
    path('lesson/<str:lesson_id>/', main_views.view_lesson, name='view_lesson'),
    path('lesson/<str:lesson_id>/update', main_views.update_teachers_lesson, name='update_lesson'),
    path('lesson/<str:lesson_id>/clearbored', main_views.clear_bored, name='clear_bored'),
    path('lesson/<str:lesson_id>/end', main_views.end_lesson, name='end_lesson'),
    path('lesson/<str:lesson_id>/nextquestion', main_views.next_question, name='next_question'),
]
