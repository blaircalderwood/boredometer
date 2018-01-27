from boredometer_app.models import Lesson, QuizQuestion
from django.core.exceptions import ObjectDoesNotExist
from boredometer_app.logic.random_id import RandomId


def create():
    lesson = Lesson.objects.create(id=RandomId().create())
    return lesson


def end(lesson_id):
    get_lesson(lesson_id).delete()


def get_lesson(lesson_id):
    try:
        return Lesson.objects.get(id=lesson_id)
    except ObjectDoesNotExist:
        raise ObjectDoesNotExist


def add_participant(lesson):
    lesson.participants += 1
    lesson.save()


def get_questions(lesson):
    questions = QuizQuestion.objects.filter(lesson=lesson, viewable=True)
    return questions


def add_to_bored(lesson_id):
    lesson = get_lesson(lesson_id)
    lesson.amount_bored += 1
    lesson.save()
