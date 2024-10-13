from django.shortcuts import render
from django.core.mail import send_mail
from django.shortcuts import render
from django.http import HttpResponse

def home(request):


    return render(request, 'home/index.html')


def aboutus(request):


    return render(request, 'about/index.html')

def servicesv(request):


    return render(request, 'services/index.html')


def faqsv(request):

    return render(request, 'faqs/index.html')


from django.core.mail import EmailMessage
from django.shortcuts import render
from django.contrib import messages

def contactv(request):
    if request.method == "POST":
        message = request.POST.get("message")
        name = request.POST.get("name")
        user_email = request.POST.get("email")
        subject = request.POST.get("subject")

        # Prepare the email content
        full_message = f"Name: {name}\nEmail: {user_email}\nMessage: {message}"

        # Create the email
        email = EmailMessage(
            subject,
            full_message,
            'hello@binbyte.co.ke',  # Use the server email as the sender
            ['hello@binbyte.co.ke'],  # Recipient
        )
        # Set the reply-to address to the user's email
        email.reply_to = [user_email]
        
        try:
            email.send(fail_silently=False)
            # Add a success message
            messages.success(request, "Your message has been sent successfully!")
        except Exception as e:
            print(f"An error occurred: {e}")
            # Optionally, add an error message
            messages.error(request, "There was an error sending your message. Please try again later.")

    return render(request, 'contact/index.html')