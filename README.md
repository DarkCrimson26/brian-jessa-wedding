# Brian & Jessa Wedding Website

A beautiful, modern wedding website built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

## 📱 Features

- **Responsive Design** - Works on all devices
- **Beautiful Animations** - Smooth transitions with Framer Motion
- **RSVP System** - Form validation and email notifications
- **Interactive Maps** - Google Maps integration for venues
- **Video Content** - Prenup videos and photos
- **Modern UI** - Built with shadcn/ui components

## 🎨 Design

- **Color Palette**: Dusty pink, mauve, and elegant cream
- **Typography**: Alice, Playfair Display, and Great Vibes fonts
- **Layout**: Clean, modern design with elegant dividers

## 📍 Pages

- **Homepage** - Couple introduction and prenup content
- **Ceremony** - Church details and directions
- **Reception** - Venue information and theme
- **Wedding Details** - Dress code, gifts, and social media
- **RSVP** - Guest response form

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

### Manual Build
```bash
node deploy-simple.js
```

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
COUPLE_EMAIL=your-email@example.com
```

### RSVP Form
The RSVP form uses Formspree for email notifications. Update the endpoint in:
- `app/rsvp/page.tsx` (line 47)
- Environment variables

## 📁 Project Structure

```
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── ceremony/       # Ceremony page
│   ├── reception/      # Reception page
│   ├── wedding-details/ # Details page
│   ├── rsvp/          # RSVP page
│   └── globals.css    # Global styles
├── components/         # Reusable components
│   ├── ui/           # shadcn/ui components
│   └── Navbar.tsx    # Navigation
├── lib/              # Utility functions
└── public/           # Static assets
```

## 🎯 Wedding Details

- **Date**: October 25, 2025
- **Time**: 9:00 AM (Ceremony)
- **Ceremony**: Christ the King Parish Greenmeadows, Quezon City
- **Reception**: Glass Garden Events, Pasig City
- **Hashtag**: #BRIANmadetherightJESSAcion

## 💝 Gift Information

- Monetary gifts preferred
- Home essentials welcome
- Kitchen appliances appreciated

## 📞 Support

For technical issues or questions about the website, please contact the development team.

---

**Built with ❤️ for Brian & Jessa's special day**
