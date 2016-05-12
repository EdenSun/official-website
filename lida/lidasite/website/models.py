from django.db import models
import datetime

# Create your models here.
class LeaveMessage(models.Model):
    name = models.CharField(max_length=30,null=False)
    mobile = models.CharField(max_length=20,null=True,default=None)
    email = models.CharField(max_length=50,null=False)
    companyName = models.CharField(max_length=100,null=True,default=None)
    subject = models.CharField(max_length=100,null=False)
    message = models.TextField(null=False)
    created = models.DateTimeField(null=False,default=datetime.datetime.now())