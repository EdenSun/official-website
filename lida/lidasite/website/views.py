from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
from website.models import LeaveMessage
from website.forms import LeaveMessageForm
import datetime

# Create your views here.
def index(request):
    return render(request,'index.html')

def portfolio(request):
    return render(request,'portfolio.html')

def contactUs(request):
    leaveMessageForm = LeaveMessageForm();
    return render(request,'contact-us.html',{'form':leaveMessageForm})

def submitLeaveMessage(request):
    name = request.POST['name']
    email = request.POST['email']
    mobile = request.POST['mobile']
    companyName = request.POST['companyName']
    subject = request.POST['subject']
    message = request.POST['message']

    lm = LeaveMessage(name=name,email=email,mobile=mobile,companyName=companyName,subject=subject,message=message,created=datetime.datetime.now())
    lm.save()
    return JsonResponse({'message':'success'});