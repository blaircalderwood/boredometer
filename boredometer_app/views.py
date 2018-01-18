from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from boredometer_app.logic import lessons
from boredometer_app.forms import JoinForm


def voting_screen(req, lesson_number):
    lesson = lessons.get_lesson(lesson_number)
    lessons.add_participant(lesson)
    return render(req, 'voting_screen.html', {'lesson': lesson})


def main_screen(req):

    if req.method == "POST":
        form = JoinForm(req.POST)

        if form.is_valid():
            cleaned_form = form.cleaned_data
            return redirect('vote', lesson_number=cleaned_form['lesson_number'])

    return render(req, 'main_screen.html', {'form': JoinForm})


def create(req, lesson_number=''):

    if lesson_number is not '':
        try:
            lesson = lessons.get_lesson(lesson_number)
        except ObjectDoesNotExist:
            return render(req, 'no_lesson_found.html', {'lesson_number': lesson_number})
    else:
        lesson = lessons.create()

    return redirect('view_lesson', lesson_number=lesson.number)


def join(req, form_data):
    print(form_data)
    return redirect('main_screen')


def view_lesson(req, lesson_number):
    lesson = lessons.get_lesson(lesson_number)
    return render(req, 'view_lesson.html', {'lesson': lesson})


def update_lesson(req, lesson_number):
    lesson = lessons.get_lesson(lesson_number)
    return JsonResponse({'amount_bored': lesson.amount_bored, 'participants': lesson.participants})


def bored(req, lesson_number):
    lessons.add_to_bored(lesson_number)
    return render(req, 'main_screen.html')


def update_screen(req, lesson, page):
    lesson.refresh_from_db()
    return render(req, page, {'lesson': lesson})


def clear_bored(req, lesson_number):
    lesson = lessons.get_lesson(lesson_number)
    lesson.amount_bored = 0
    lesson.save()
    return render(req, 'view_lesson.html', {'lesson': lesson})


def end_lesson(req, lesson_number):
    lesson = lessons.get_lesson(lesson_number)
    lesson.delete()
    return render(req, 'main_screen.html')