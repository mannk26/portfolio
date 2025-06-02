# Mrityunjay - Backend Developer Portfolio

A modern, responsive portfolio website showcasing backend development expertise, built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional interface optimized for recruiters
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Integrated with EmailJS for direct communication
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Professional Photos**: Rounded profile photos with elegant styling

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Routing**: React Router DOM

## 📋 Sections

1. **Hero Section**: Introduction with profile photo, name, tagline, and call-to-action
2. **About Me**: Professional photo, education, achievements, and background
3. **Skills**: Technical skills with proficiency levels and icons
4. **Projects**: Featured projects with detailed descriptions
5. **Resume**: Download section with highlights
6. **Contact**: Contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-trial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile photos**
   - **Hero section**: Add `profile-photo.jpg` to the `public` folder (400x400px recommended)
   - **About section**: Add `profile-photo-professional.jpg` to the `public` folder (600x600px recommended)
   - See `/public/placeholder-instructions.md` for detailed guidelines

4. **Set up EmailJS (Optional)**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and set up a service
   - Create an email template
   - Update the configuration in `src/utils/emailjs.js`
   - Update the EmailJS credentials in `src/components/Contact.jsx`

5. **Add your resume**
   - Place your resume PDF file in the `public` folder as `resume.pdf`

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🖼️ Profile Photo Setup

### Photo Requirements
- **Hero Photo**: `profile-photo.jpg` (400x400px+, square)
- **About Photo**: `profile-photo-professional.jpg` (600x600px+, square)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution, professional lighting
- **Style**: Clean background, professional attire

### Easy Replacement
1. Simply add your photos to the `/public` folder with exact filenames
2. Refresh the page - no code changes needed!
3. Photos automatically display with rounded frames and shadows
4. Fallback to stylized initials if photos aren't found

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{subject}}` - email subject
   - `{{message}}` - email message
   - `{{to_name}}` - your name

4. Update the credentials in `src/components/Contact.jsx`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',    // Replace with your service ID
     'YOUR_TEMPLATE_ID',   // Replace with your template ID
     form.current,
     'YOUR_PUBLIC_KEY'     // Replace with your public key
   )
   ```

### Customization

- **Personal Information**: Update details in each component
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Edit the content in each component file
- **Photos**: Add your photos to the `public` folder
- **Resume**: Replace `public/resume.pdf` with your resume

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with default settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mrityunjayeng720@gmail.com
- **LinkedIn**: [linkedin.com/in/man-s-8757a5204](https://linkedin.com/in/man-s-8757a5204)
- **GitHub**: [github.com/mannk26](https://github.com/mannk26)

---

Built with ❤️ by Mrityunjay
