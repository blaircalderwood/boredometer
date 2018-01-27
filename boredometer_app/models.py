from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class Lesson(models.Model):
    id = models.CharField(unique=True, max_length=6, primary_key=True)
    participants = models.IntegerField(default=0)
    amount_bored = models.IntegerField(default=0)

    def __str__(self):
        return str(self.id)

    @staticmethod
    def get(lesson_id):
        lesson_id = lesson_id.lower()
        try:
            return Lesson.objects.get(id=lesson_id)
        except ObjectDoesNotExist:
            raise ObjectDoesNotExist

    def add_participant(self):
        self.participants += 1
        self.save()

    def add_to_bored(self):
        self.amount_bored += 1
        self.save()

    def end(self):
        self.delete()
