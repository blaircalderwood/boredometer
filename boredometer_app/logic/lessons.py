from boredometer_app.models import Lesson
from django.core.exceptions import ObjectDoesNotExist


def create():
    highest_lesson_number = Lesson.objects.order_by('-number').first()
    next_lesson_number = highest_lesson_number.number + 1
    lesson = Lesson.objects.create(number=next_lesson_number)
    return lesson


def end(lesson_number):
    get_lesson(lesson_number).delete()


def get_lesson(lesson_number):
    try:
        return Lesson.objects.get(number=lesson_number)
    except ObjectDoesNotExist:
        raise ObjectDoesNotExist


def add_participant(lesson):
    lesson.participants += 1
    lesson.save()


def add_to_bored(lesson_number):
    lesson = get_lesson(lesson_number)
    lesson.amount_bored += 1
    lesson.save()
