# EmailJS Setup Guide for Portfolio Contact Form

## Current Status
✅ **Contact form is working** - Uses `mailto:` to open default email client
🔄 **Optional upgrade** - Set up EmailJS for direct form submission

## How the Current Form Works
- Fill out the contact form
- Click "Send Message"
- Your default email client opens with the message pre-filled
- Send the email from your email client

## Upgrade to EmailJS (Optional)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Save your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Portfolio Contact: {{subject}}

Hello Mrityunjay,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_def456`)

### Step 5: Update Contact Component
Replace `src/components/Contact.jsx` with `src/components/Contact_emailjs.jsx` and update these values:

```javascript
const result = await emailjs.sendForm(
  'service_abc123',    // Your Service ID
  'template_xyz789',   // Your Template ID
  form.current,
  'user_def456'        // Your Public Key
)
```

### Step 6: Test the Form
1. Fill out the contact form
2. Submit the message
3. Check your email for the message

## Template Variables
Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message

## Form Field Names
The form uses these field names (must match in EmailJS template):
- `name` → `{{from_name}}`
- `email` → `{{from_email}}`
- `subject` → `{{subject}}`
- `message` → `{{message}}`

## Troubleshooting

### Common Issues:
1. **"Failed to send"** - Check Service ID, Template ID, and Public Key
2. **No email received** - Check spam folder, verify email service setup
3. **Template errors** - Ensure variable names match form field names

### Testing:
1. Use EmailJS test feature in dashboard
2. Check browser console for error messages
3. Verify all IDs are correct

## Benefits of EmailJS
- ✅ Direct form submission (no email client needed)
- ✅ Professional user experience
- ✅ Automatic email formatting
- ✅ Spam protection
- ✅ Form validation
- ✅ Success/error feedback

## Current Mailto Solution Benefits
- ✅ Works immediately (no setup required)
- ✅ Uses user's preferred email client
- ✅ No external dependencies
- ✅ Always reliable
- ✅ User can edit message before sending

## Recommendation
The current `mailto:` solution works great for most use cases. Only upgrade to EmailJS if you want:
- Direct form submission without opening email client
- More professional user experience
- Form analytics and tracking

Both solutions are professional and effective!
