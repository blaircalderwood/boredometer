from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from boredometer_app.forms import JoinForm
from boredometer_app.models import Lesson
from boredometer_app.logic.random_id import RandomId


def voting_screen(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    lesson.add_participant()
    return render(req, 'voting_screen.html', {'lesson': lesson})


def main_screen(req):

    if req.method == "POST":
        form = JoinForm(req.POST)

        if form.is_valid():
            cleaned_form = form.cleaned_data
            return redirect('vote', lesson_id=cleaned_form['lesson_id'])

    return render(req, 'main_screen.html', {'form': JoinForm})


def create(req, lesson_id=''):

    lesson_id = lesson_id
    if lesson_id is not '':
        try:
            lesson = Lesson.get(lesson_id)
        except ObjectDoesNotExist:
            return render(req, 'no_lesson_found.html', {'lesson_id': lesson_id})
    else:
        lesson = Lesson.objects.create(id=RandomId().create())

    return redirect('view_lesson', lesson_id=lesson.id)


def view_lesson(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    return render(req, 'view_lesson.html', {'lesson': lesson})


def update_teachers_lesson(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    return JsonResponse({'amount_bored': lesson.amount_bored, 'participants': lesson.participants})


def update_students_lesson(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    questions = lesson.get_questions()
    return JsonResponse({'lesson': lesson, 'questions': questions})


def bored(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    lesson.add_to_bored()
    return render(req, 'main_screen.html')


def clear_bored(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    lesson.amount_bored = 0
    lesson.save()
    return render(req, 'view_lesson.html', {'lesson': lesson})


def end_lesson(req, lesson_id):
    lesson = Lesson.get(lesson_id)
    lesson.delete()
    return render(req, 'main_screen.html')
