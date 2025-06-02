// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the placeholder values below

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
}

// Example template variables for EmailJS:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{subject}} - email subject
// {{message}} - email message
// {{to_name}} - your name (Mrityunjay)

// Example EmailJS template:
/*
Subject: New Portfolio Contact: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
*/
