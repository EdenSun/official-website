from django.db import models

# Create your models here.

class LeaveMessage(models.Model):
    name = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    mobile = models.CharField(max_length=20)
    company = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.name + ',' + title ;
