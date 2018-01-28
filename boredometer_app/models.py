from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from uuid import uuid4


class Lesson(models.Model):
	id = models.CharField(unique=True, max_length=6, primary_key=True)
	section_number = models.IntegerField(default=0)
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

	def add_participant(self, participant_id=''):
		try:
			if participant_id is not '':
				participant = Participant.objects.get(id=participant_id)
				print(participant, participant.lesson)
				if participant.lesson.id != self.id:
					participant = self.increase_participants()
			else:
				participant = self.increase_participants()
		except ObjectDoesNotExist:
			participant = self.increase_participants(participant_id)

		return participant.id

	def increase_participants(self, participant_id=''):
		participant = Participant.objects.create(lesson=self, id=participant_id)
		self.participants += 1
		self.save()
		return participant

	def add_to_bored(self):
		self.amount_bored += 1
		self.save()

	def clear_bored(self):
		self.amount_bored = 0
		self.save()

	def end(self):
		self.delete()

	def next_section(self):
		self.section_number += 1
		self.save()


class Participant(models.Model):
	id = models.CharField(unique=True, primary_key=True, max_length=36, default='')
	lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)

	def __str__(self):
		return str(self.id)

	def save(self, *args, **kwargs):
		if self.id is '':
			self.id = str(uuid4())
		super(Participant, self).save(*args, **kwargs)
