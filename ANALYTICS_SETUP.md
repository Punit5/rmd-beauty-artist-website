# 📊 Google Analytics 4 Setup for RMD Studios

## 🚀 Quick Setup Guide

### 1. Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Create Account" or "Create Property"
3. Fill in the details:
   - **Account Name**: RMD Studios
   - **Property Name**: RMD Studios Website
   - **Industry Category**: Beauty & Fitness
   - **Business Size**: Small business (1-10 employees)
   - **Country**: United States (or your location)

### 2. Get Your Measurement ID

1. After creating the property, go to **Admin** → **Data Streams**
2. Click **Add stream** → **Web**
3. Enter your website URL: `https://yourwebsite.com`
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Update the Website Code

Replace `GA_MEASUREMENT_ID` in two places in `/public/index.html`:

```html
<!-- Replace BOTH instances of GA_MEASUREMENT_ID with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    // ... rest of config
  });
</script>
```

### 4. Deploy and Test

1. Deploy your website
2. Visit your website
3. Check Google Analytics "Realtime" section to see live visitors
4. It may take 24-48 hours for full data to appear

## 📈 What's Being Tracked

### Automatic Tracking:
- ✅ Page views
- ✅ Session duration
- ✅ Bounce rate
- ✅ Device/browser info
- ✅ Geographic location

### Custom Events Being Tracked:
- 🎯 **Navigation clicks** (which sections users visit)
- 📞 **Phone calls** (when users click phone number)
- 📧 **Email clicks** (when users click email)
- 📝 **Form submissions** (contact form)
- 📅 **Booking clicks** (all booking buttons)
- 🖼️ **Portfolio views** (which images users click)
- ⭐ **Service interest** (future feature)
- 📱 **Social media clicks** (future feature)

## 🎯 Key Metrics to Monitor

### Business Metrics:
- **Booking button clicks** → Conversion intent
- **Contact form submissions** → Lead generation
- **Phone/email clicks** → Direct contact
- **Portfolio engagement** → Service interest

### User Experience:
- **Page views per session** → Site engagement
- **Session duration** → Content quality
- **Bounce rate** → First impression
- **Mobile vs desktop** → User behavior

### Content Performance:
- **Portfolio category views** → Popular services
- **Section navigation** → User journey
- **Most viewed pages** → Popular content

## 🚨 Important Notes

1. **Privacy Compliance**: The current setup is GDPR/CCPA compliant
2. **No PII**: No personally identifiable information is tracked
3. **Cookie Notice**: Consider adding a cookie banner for EU visitors
4. **Data Retention**: Google Analytics retains data for 26 months by default

## 🔧 Advanced Setup (Optional)

### Custom Dimensions:
- **Service Type**: Track bridal vs photoshoot interest
- **Booking Intent**: Track high-value user actions
- **Contact Method**: Track preferred communication

### Goals Setup:
1. **Contact Form Submission** (Primary conversion)
2. **Phone Call Click** (Secondary conversion)
3. **Booking Button Click** (Intent conversion)
4. **Email Click** (Contact conversion)

### Recommended Reports:
- **Acquisition** → How users find your site
- **Behavior** → What users do on your site
- **Conversions** → Booking and contact actions
- **Real-time** → Live user activity

## 📱 Mobile App Analytics (Future)
The tracking code is ready for PWA conversion and mobile app analytics if you decide to create a mobile app later.

## 🔍 Troubleshooting

**Not seeing data?**
1. Check that your Measurement ID is correct
2. Verify the website is live and accessible
3. Use browser dev tools to check for JavaScript errors
4. Wait 24-48 hours for data to populate

**Testing locally?**
Analytics will work on localhost for testing, but filter out localhost traffic in production reports.