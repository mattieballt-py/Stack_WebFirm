# Deployment Guide - Stack Websites London

## Pre-Deployment Checklist

Before deploying, ensure you've updated:

- [ ] Company contact information in [Footer.jsx](src/components/layout/Footer.jsx)
- [ ] SEO defaults in [SEO.jsx](src/components/common/SEO.jsx)
- [ ] Domain URLs in [sitemap.xml](public/sitemap.xml)
- [ ] PWA manifest in [vite.config.js](vite.config.js)
- [ ] Social media links in [Footer.jsx](src/components/layout/Footer.jsx)
- [ ] Team photos and bios in [About.jsx](src/pages/About.jsx)
- [ ] Portfolio projects in [Portfolio.jsx](src/pages/Portfolio.jsx)
- [ ] Service pricing in [Services.jsx](src/pages/Services.jsx)

## Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified JavaScript and CSS
- Code splitting for optimal loading
- Service worker for PWA functionality
- Compressed assets

## Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Perfect for React apps

**Steps:**

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts and deploy to production:
```bash
vercel --prod
```

**Configuration:**
Vercel auto-detects Vite. No configuration needed!

---

### Option 2: Netlify

**Why Netlify:**
- Simple drag-and-drop deployment
- Form handling (useful for contact form)
- Automatic HTTPS
- Serverless functions support

**Steps:**

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Alternative:** Drag and drop `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

**Configuration (netlify.toml):**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

**Why GitHub Pages:**
- Free hosting
- Simple git-based deployment
- Good for open-source projects

**Steps:**

1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

2. Build:
```bash
npm run build
```

3. Deploy using gh-pages:
```bash
npm i -D gh-pages
```

4. Add to package.json scripts:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

5. Deploy:
```bash
npm run deploy
```

---

### Option 4: Traditional Hosting (cPanel, Shared Hosting)

**For providers like:**
- Hostinger
- Bluehost
- SiteGround
- Any cPanel hosting

**Steps:**

1. Build the project:
```bash
npm run build
```

2. Upload `dist/` folder contents via FTP:
   - Connect to your hosting via FTP client (FileZilla, etc.)
   - Navigate to `public_html` or `www` folder
   - Upload all files from `dist/` folder

3. Configure `.htaccess` for SPA routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Custom Domain Setup

### For Vercel:

1. Go to Project Settings > Domains
2. Add your domain: `websitelondon.co.uk`
3. Update DNS records at your registrar:
   - Type: A, Name: @, Value: `76.76.21.21`
   - Type: CNAME, Name: www, Value: `cname.vercel-dns.com`

### For Netlify:

1. Go to Domain Settings
2. Add custom domain
3. Update DNS:
   - Type: A, Name: @, Value: `75.2.60.5`
   - Type: CNAME, Name: www, Value: `your-site.netlify.app`

---

## Environment Variables

If you add environment variables later (e.g., API keys):

**Vercel:**
```bash
vercel env add VITE_API_KEY
```

**Netlify:**
Site Settings > Environment Variables > Add

**Local (.env):**
```env
VITE_API_KEY=your_key_here
```

**Access in code:**
```js
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Post-Deployment Tasks

### 1. Test Website
- [ ] All pages load correctly
- [ ] Forms work (test contact form)
- [ ] Mobile responsive on real devices
- [ ] Images load properly
- [ ] PWA installation works
- [ ] Service worker caches correctly

### 2. SEO Setup

**Google Search Console:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `websitelondon.co.uk`
3. Verify ownership (HTML tag method)
4. Submit sitemap: `https://websitelondon.co.uk/sitemap.xml`

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to [index.html](index.html):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Google Business Profile:**
1. Claim/create Google Business Profile
2. Verify business location
3. Link website

### 3. Social Media

Update meta tags in SEO.jsx with real:
- Open Graph image (1200x630px)
- Twitter Card image
- Company logo (PNG, transparent background)

### 4. Security Headers

Add to hosting (Netlify example in `netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Monitoring & Maintenance

### Performance Monitoring
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ on all metrics
- Monitor Core Web Vitals

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/) (free)
- Pingdom
- StatusCake

### Analytics
- Google Analytics 4
- Check traffic weekly
- Monitor conversion rate (contact form submissions)

---

## Troubleshooting

### Issue: 404 on page refresh
**Solution:** Add redirect rules (see deployment options above)

### Issue: Images not loading
**Solution:** Check image URLs are absolute or properly resolved

### Issue: PWA not working
**Solution:** Ensure HTTPS is enabled (required for service workers)

### Issue: Form submissions not working
**Solution:**
- For Netlify: Add `netlify` attribute to form
- For others: Implement backend API or use form services like Formspree

---

## Updating the Site

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Test build: `npm run preview`
5. Deploy:
   - Vercel: `vercel --prod` or `git push` (if connected to GitHub)
   - Netlify: `netlify deploy --prod` or `git push`
   - Manual: Upload new `dist/` folder

---

## Support

Need help with deployment?
- Check Vite docs: https://vitejs.dev/guide/static-deploy.html
- Contact: hello@websitelondon.co.uk
