from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from boredometer_app.forms import JoinForm
from boredometer_app.models import Lesson
from boredometer_app.logic.random_id import RandomId


def voting_screen(req, lesson_id, participant_id=''):
	try:
		lesson = Lesson.get(lesson_id)
		participant_id = lesson.add_participant(participant_id)
		return render(req, 'voting_screen.html', {'lesson': lesson, 'sectionNumber': lesson.section_number})
	except ObjectDoesNotExist:
		return render(req, 'no_lesson_found.html')


def add_to_participants(req, lesson_id, participant_id=''):
	lesson = Lesson.get(lesson_id)
	participant_id = lesson.add_participant(participant_id)
	return JsonResponse({'participantId': participant_id})


def main_screen(req):
	if req.method == "POST":
		form = JoinForm(req.POST)

		if form.is_valid():
			cleaned_form = form.cleaned_data
			try:
				Lesson.get(cleaned_form['lesson_id'])
				return redirect('vote', lesson_id=cleaned_form['lesson_id'])
			except ObjectDoesNotExist:
				return render(req, 'main_screen.html', {'form': JoinForm, 'error': 'no_session_id'})

	return render(req, 'main_screen.html', {'form': JoinForm})


def create(req, lesson_id=''):
	if lesson_id is not '':
		try:
			lesson = Lesson.get(lesson_id)
		except ObjectDoesNotExist:
			return render(req, 'no_lesson_found.html', {'lesson_id': lesson_id})
	else:
		lesson = Lesson.objects.create(id=RandomId().create())

	return redirect('view_lesson', lesson_id=lesson.id)


def share_lesson(req, lesson_id):
	lesson = Lesson.get(lesson_id)
	return render(req, 'share_lesson.html', {'lesson': lesson})


def view_lesson(req, lesson_id):
	lesson = Lesson.get(lesson_id)
	return render(req, 'view_lesson.html', {'lesson': lesson})


def next_section(req, lesson_id):
	lesson = Lesson.get(lesson_id)
	lesson.clear_bored()
	lesson.next_section()
	return render(req, 'view_lesson.html', {'lesson': lesson})


def end_lesson(req, lesson_id):
	lesson = Lesson.get(lesson_id)
	lesson.delete()
	return redirect('main_screen')


def update_teachers_lesson(req, lesson_id):
	lesson = Lesson.get(lesson_id)
	return JsonResponse({'amount_bored': lesson.amount_bored, 'participants': lesson.participants})


def update_students_lesson(req, lesson_id):
	try:
		lesson = Lesson.get(lesson_id)
		return JsonResponse({'success': True, 'lesson.id': lesson.id, 'sectionNumber': lesson.section_number})
	except ObjectDoesNotExist:
		return JsonResponse({'success': False})


def bored(req, lesson_id):
	lesson = Lesson.get(lesson_id)
	lesson.add_to_bored()
	return JsonResponse({'success': True})
