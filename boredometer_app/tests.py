from django.test import TestCase
from boredometer_app.models import Lesson, Participant
from uuid import uuid4
from django.core.exceptions import ObjectDoesNotExist


class LessonTestCase(TestCase):
	def setUp(self):
		self.testCase = Lesson.objects.create(id='ran111')

	def tearDown(self):
		self.testCase.delete()

	def test_get_lesson_success(self):
		"""An existing lesson is successfully retrieved"""
		self.assertEqual(Lesson.get('ran111').id, 'ran111')

	def test_get_lesson_uppercase_success(self):
		"""An existing lesson is successfully converted from upper to lower case and retrieved"""
		self.assertEqual(Lesson.get('RAN111').id, 'ran111')

	def test_get_lesson_failure(self):
		"""Getting a non-existent lesson should throw an ObjectDoesNotExist error"""
		self.assertRaises(ObjectDoesNotExist, Lesson.get, 'non123')


class SectionNumberTestCase(TestCase):
	def setUp(self):
		self.testCase = Lesson.objects.create(id='ran111')

	def tearDown(self):
		self.testCase.delete()

	def test_next_section_from_one(self):
		"""Clicking next section should increase section number from one to two"""
		self.testCase.section_number = 0
		self.testCase.next_section()
		self.assertEqual(self.testCase.section_number, 1)

	def test_next_section_from_eleven(self):
		"""Clicking next section should increase section number from eleven to twelve"""
		self.testCase.section_number = 11
		self.testCase.next_section()
		self.assertEqual(self.testCase.section_number, 12)


class BoredTestCase(TestCase):
	def setUp(self):
		self.testCase = Lesson.objects.create(id='ran111')

	def tearDown(self):
		self.testCase.delete()

	def test_add_bored_from_zero(self):
		"""Adding a participant should increase participants from 0 to 1"""
		self.testCase.amount_bored = 0
		self.testCase.add_to_bored()
		self.assertEqual(self.testCase.amount_bored, 1)

	def test_add_bored_from_six(self):
		"""Adding a participant should increase participants from 9 to 10"""
		self.testCase.amount_bored = 6
		self.testCase.add_to_bored()
		self.assertEqual(self.testCase.amount_bored, 7)

	def test_clear_bored(self):
		"""Clearing the bored participants should result in 0 bored"""
		self.testCase.amount_bored = 18
		self.testCase.clear_bored()
		self.assertEqual(self.testCase.amount_bored, 0)


class ParticipantsTestCase(TestCase):
	def setUp(self):
		self.testCase = Lesson.objects.create(id='ran111')

	def tearDown(self):
		self.testCase.delete()

	def test_add_new_participant(self):
		"""Adding a participant with no current ID should return a new UUID and increase participants by one"""
		self.testCase.participants = 0
		participant_id = self.testCase.add_participant()
		self.assertEqual(len(participant_id), 36)
		self.assertEqual(self.testCase.participants, 1)

	def test_add_existing_participant(self):
		"""Adding a participant who is already in the lesson should return the same UUID and not increase participants"""
		self.participant = Participant.objects.create(lesson=self.testCase)
		self.testCase.participants = 0
		participant_id = self.testCase.add_participant(self.participant.id)
		self.assertEqual(participant_id, self.participant.id)
		self.assertEqual(self.testCase.participants, 0)

	def test_add_new_participant_with_id(self):
		"""Adding a participant with an existing ID who is not in the current lesson should return ID and increase
		participants by one"""
		self.testCase.participants = 0
		random_participant_id = str(uuid4())
		participant_id = self.testCase.add_participant(random_participant_id)
		self.assertEqual(participant_id, random_participant_id)
		self.assertEqual(self.testCase.participants, 1)


def test_add_participants_from_nine(self):
	"""Adding a participant should increase participants from 9 to 10"""
	self.testCase.participants = 9
	self.testCase.add_participant()
	self.assertEqual(self.testCase.participants, 10)


class DeleteTestCase(TestCase):
	def setUp(self):
		self.testCase = Lesson.objects.create(id='ran111')

	def test_delete_case(self):
		"""Running the end lesson function should delete the lesson"""
		self.testCase.end()
		self.assertRaises(ObjectDoesNotExist, Lesson.get, 'ran111')
