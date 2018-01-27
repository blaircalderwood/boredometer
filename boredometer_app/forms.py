from django import forms


class JoinForm(forms.Form):
    lesson_id = forms.CharField(label="Lesson number", max_length=6)
