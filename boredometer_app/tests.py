from django.test import TestCase
from boredometer_app.models import Lesson
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

    def test_add_participants_from_zero(self):
        """Adding a participant should increase participants from 0 to 1"""
        self.testCase.participants = 0
        self.testCase.add_participant()
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
