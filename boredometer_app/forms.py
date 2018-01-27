from django import forms


class JoinForm(forms.Form):
    lesson_number = forms.CharField(label="Lesson ID", max_length=5)
