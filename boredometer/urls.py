from django.contrib import admin
from django.urls import path
from boredometer_app import views as main_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('vote', main_views.main_screen, name='vote'),
    path('vote/<int:lesson_number>/', main_views.voting_screen, name='vote'),
    path('vote/<int:lesson_number>/bored', main_views.bored, name='bored'),
    path('', main_views.main_screen, name='main_screen'),
    path('create/', main_views.create, name='create'),
    path('lesson/<int:lesson_number>/', main_views.view_lesson, name='view_lesson'),
    path('lesson/<int:lesson_number>/update', main_views.update_lesson, name='update_lesson'),
    path('lesson/<int:lesson_number>/clearbored', main_views.clear_bored, name='clear_bored'),
    path('lesson/<int:lesson_number>/end', main_views.end_lesson, name='end_lesson'),
]
