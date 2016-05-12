from django import forms
from .models import LeaveMessage

class LeaveMessageForm(forms.ModelForm):
    class Meta:
        model = LeaveMessage
        fields = ('name','mobile','email','companyName','subject','message')