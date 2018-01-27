from django.contrib import admin
from django.urls import path
from boredometer_app import views as main_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main_views.main_screen, name='main_screen'),
    path('vote/', main_views.main_screen),
    path('vote/<str:lesson_id>/', main_views.voting_screen, name='vote'),
    path('vote/<str:lesson_id>/update', main_views.update_students_lesson, name='update_vote'),
    path('vote/<str:lesson_id>/bored', main_views.bored, name='bored'),
    path('create/', main_views.create, name='create'),
    path('lesson/', main_views.main_screen),
    path('lesson/<str:lesson_id>/', main_views.view_lesson, name='view_lesson'),
    path('lesson/<str:lesson_id>/update', main_views.update_teachers_lesson, name='update_lesson'),
    path('lesson/<str:lesson_id>/nextsection', main_views.next_section, name='next_section'),
    path('lesson/<str:lesson_id>/end', main_views.end_lesson, name='end_lesson'),
    path('share/<str:lesson_id>/', main_views.share_lesson, name='share_lesson'),
]
