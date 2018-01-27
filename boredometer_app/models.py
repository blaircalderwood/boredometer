from django.db import models


class Lesson(models.Model):
    id = models.CharField(unique=True, max_length=5, primary_key=True)
    participants = models.IntegerField(default=0)
    amount_bored = models.IntegerField(default=0)

    def __str__(self):
        return str(self.id)


class QuizQuestion(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    order = models.IntegerField(default=0)
    viewable = models.BooleanField(default=False)
    question = models.CharField(max_length=256)
    answer_a = models.CharField(max_length=50)
    answer_b = models.CharField(max_length=50)
    answer_c = models.CharField(max_length=50)
    answer_d = models.CharField(max_length=50)

    def __str__(self):
        return str(self.question)
