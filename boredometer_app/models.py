from django.db import models


class Lesson(models.Model):
    number = models.IntegerField(unique=True)
    participants = models.IntegerField(default=0)
    amount_bored = models.IntegerField(default=0)

    def __str__(self):
        return self.number
