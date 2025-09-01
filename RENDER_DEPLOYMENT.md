# 🚀 Render Deployment Guide - Wedding Website

## 🆓 **Render Free Tier Benefits**
- **Cost**: 100% FREE
- **Bandwidth**: 750 GB/month
- **Build Time**: 10 minutes
- **Sleep**: After 15 minutes of inactivity (wakes up on first request)
- **Custom Domains**: Supported
- **HTTPS**: Automatic

---

## 📋 **Prerequisites**
1. **GitHub Account** with your wedding website repository
2. **Render Account** - Sign up at [render.com](https://render.com)
3. **EmailJS Account** (for email functionality) - Sign up at [emailjs.com](https://emailjs.com)

---

## 🚀 **Step-by-Step Deployment**

### **Step 1: Prepare Your Repository**
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### **Step 2: Sign Up for Render**
1. Go to [render.com](https://render.com)
2. Click "Get Started"
3. Sign up with your GitHub account
4. Authorize Render to access your repositories

### **Step 3: Create New Web Service**
1. Click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository
4. Choose the wedding website repository

### **Step 4: Configure Service**
- **Name**: `wedding-website` (or any name you prefer)
- **Environment**: `Node`
- **Region**: Choose closest to your guests
- **Branch**: `main`
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`

### **Step 5: Set Environment Variables**
Click **"Environment"** tab and add:
```
NODE_ENV=production
COUPLE_EMAIL=wong.jennicaarah@gmail.com
```

### **Step 6: Deploy**
1. Click **"Create Web Service"**
2. Wait for build to complete (5-10 minutes)
3. Your site will be live at: `https://your-app-name.onrender.com`

---

## 📧 **Email Setup with EmailJS**

### **Step 1: EmailJS Setup**
1. Go to [emailjs.com](https://emailjs.com)
2. Create account and verify email
3. Create a new email service (Gmail, Outlook, etc.)
4. Create email templates for RSVP notifications

### **Step 2: Get Credentials**
- **Service ID**: From your email service
- **Template ID**: From your email templates
- **User ID**: Your EmailJS user ID

### **Step 3: Add to Environment Variables**
```
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID_COUPLE=your_couple_template_id
EMAILJS_TEMPLATE_ID_GUEST=your_guest_template_id
EMAILJS_USER_ID=your_user_id
```

---

## 🔧 **Post-Deployment Setup**

### **Custom Domain (Optional)**
1. In Render dashboard, go to **"Settings"**
2. Click **"Custom Domains"**
3. Add your domain (e.g., `wedding.yourdomain.com`)
4. Update DNS records as instructed

### **Auto-Deploy**
- ✅ **Enabled by default**
- Every push to `main` branch triggers automatic deployment
- No manual intervention needed

---

## 🧪 **Testing Your Deployment**

### **Test Checklist**
- ✅ **Homepage loads** correctly
- ✅ **Navigation works** on all pages
- ✅ **RSVP form** submits successfully
- ✅ **Email notifications** sent to Jennica
- ✅ **Guest confirmations** sent to guests
- ✅ **Mobile responsive** design
- ✅ **All pages accessible**

### **Performance Check**
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) to test performance
- Check mobile and desktop scores
- Optimize images if needed

---

## 💡 **Pro Tips**

### **Performance Optimization**
1. **Image Optimization**: Use WebP format for better compression
2. **Lazy Loading**: Images load as needed
3. **Caching**: Render handles this automatically
4. **CDN**: Global content delivery

### **Monitoring**
- **Uptime**: 99.9% guaranteed
- **Logs**: Available in Render dashboard
- **Metrics**: Response times and error rates
- **Alerts**: Get notified of any issues

---

## 🆘 **Troubleshooting**

### **Common Issues**
1. **Build Failures**: Check build logs in Render dashboard
2. **Environment Variables**: Ensure all required vars are set
3. **Email Issues**: Verify EmailJS credentials
4. **Performance**: Check if app is sleeping (first request takes longer)

### **Support**
- **Render Documentation**: [docs.render.com](https://docs.render.com)
- **EmailJS Support**: [emailjs.com/support](https://emailjs.com/support)
- **Community**: Stack Overflow, GitHub Issues

---

## 🎉 **Success!**

**Your wedding website is now:**
- 🌐 **Live on the internet** for all guests to see
- 📱 **Mobile-friendly** for all devices
- 📧 **Email notifications** working properly
- 🚀 **Fast and reliable** hosting
- 💰 **100% FREE** forever

**URL**: `https://your-app-name.onrender.com`

---

## 🔄 **Updates & Maintenance**

### **Automatic Updates**
- Push changes to GitHub
- Render automatically rebuilds and deploys
- Zero downtime updates

### **Manual Updates**
- Go to Render dashboard
- Click **"Manual Deploy"**
- Choose branch to deploy from

---

**Total Cost: ₱0.00** 🎉
**Setup Time: 15-20 minutes** ⚡
**Maintenance: Automatic** 🤖
**Performance: Professional Grade** 🚀
