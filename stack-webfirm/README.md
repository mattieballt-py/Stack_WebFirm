# Stack Websites London

A production-ready, modern web design agency website built with React 18, Vite, and Tailwind CSS. This website showcases Stack Websites London, a web design agency targeting small London businesses.

## 🚀 Features

### Core Technology Stack
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form + Zod** - Type-safe form validation

### SEO & Performance
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Schema.org Markup** - LocalBusiness, WebSite, and Service structured data
- **Core Web Vitals Optimized** - Code splitting, lazy loading, image optimization
- **PWA Ready** - Service worker, offline support, installable
- **Fast Loading** - Optimized build with manual chunks and minification
- **Sitemap & Robots.txt** - Search engine friendly

### Design & UX
- **Mobile-First** - Fully responsive design
- **Modern UI** - Clean, professional design with smooth animations
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Custom Components** - Reusable component library
- **Headless UI** - Accessible UI components

## 📁 Project Structure

```
stack-webfirm/
├── public/
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx          # Reusable button component
│   │   │   ├── LazyImage.jsx       # Optimized image loading
│   │   │   └── SEO.jsx             # SEO meta tags component
│   │   └── layout/
│   │       ├── Footer.jsx          # Site footer
│   │       ├── Header.jsx          # Navigation header
│   │       └── Layout.jsx          # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx                # Homepage with hero, services, testimonials
│   │   ├── Services.jsx            # Services page with pricing
│   │   ├── Portfolio.jsx           # Portfolio showcase with filters
│   │   ├── About.jsx               # About page with team info
│   │   └── Contact.jsx             # Contact form with validation
│   ├── App.jsx                     # Main app component with routing
│   ├── index.css                   # Global styles and Tailwind directives
│   └── main.jsx                    # App entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── postcss.config.js               # PostCSS configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Install Dependencies
```bash
npm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to React 19 compatibility with some packages.

### Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 📄 Pages

### 1. Homepage (/)
**Purpose:** Convert visitors into leads
**Sections:**
- Hero with clear value proposition
- Stats showcase
- Services preview (6 key benefits)
- Portfolio preview (3 recent projects)
- Testimonials (3 client reviews)
- CTA section

**SEO Focus:** "web design London", "London website design", "small business websites"

### 2. Services (/services)
**Purpose:** Detailed service offerings with transparent pricing
**Sections:**
- Service cards (6 services with features and pricing)
- Package comparison (3 pricing tiers)
- Process timeline (5 steps)
- CTA section

**Key Services:**
- Custom Web Design (from £1,500)
- E-commerce Websites (from £2,500)
- SEO Optimization (from £500/month)
- Website Maintenance (from £150/month)
- Branding & Logo Design (from £800)
- Custom Development (from £2,000)

### 3. Portfolio (/portfolio)
**Purpose:** Showcase real projects and results
**Features:**
- Category filtering (All, Restaurants, Retail, Trades, Professional)
- 8 project showcases with results metrics
- Stats section
- CTA section

### 4. About (/about)
**Purpose:** Build trust and showcase team
**Sections:**
- Company mission and values
- Stats showcase
- Company timeline (5 milestones)
- Team members (3 profiles)
- Why choose us
- CTA section

### 5. Contact (/contact)
**Purpose:** Lead generation with validated form
**Features:**
- Comprehensive contact form with validation
- Contact information sidebar
- Quick response guarantee
- FAQ section (4 common questions)

**Form Fields:**
- Name, Email, Phone (validated)
- Business Name, Service Type
- Budget Range, Timeline
- Project Description

## 🎨 Design System

### Colors
- **Primary:** Blue (#0284c7)
- **Secondary:** Purple (#a855f7)
- **Neutral:** Gray scale

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, tracking-tight
- **Body:** Regular, leading-relaxed

### Components
- **Buttons:** Primary, Secondary, Outline, Ghost variants
- **Cards:** Shadow-lg with hover effects
- **Forms:** Input fields with validation states
- **Animations:** Framer Motion fade-in and slide-up

## 🔍 SEO Implementation

### Meta Tags
Every page includes:
- Title tag (optimized for keywords)
- Meta description
- Canonical URL
- Open Graph tags (Facebook)
- Twitter Card tags
- Keywords meta tag

### Schema.org Structured Data
- **LocalBusiness** - Company information
- **WebSite** - Site metadata
- **Service** - Service offerings
- **GeoCoordinates** - London location

### Technical SEO
- XML Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Mobile-friendly responsive design
- Fast page load times
- Clean URL structure

## ⚡ Performance Optimizations

### Build Optimizations
- Code splitting (vendor chunks for react, forms, animations, icons)
- Terser minification with console.log removal
- Gzip compression
- Tree shaking

### Runtime Optimizations
- Lazy loading images with intersection observer
- Route-based code splitting
- Service worker caching (PWA)
- Optimized dependencies

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

## 📱 PWA Features

### Manifest
- App name and short name
- Theme color (#0284c7)
- Icons (192x192, 512x512)
- Standalone display mode

### Service Worker
- Precaching of static assets
- Runtime caching of images (30-day cache)
- Offline support
- Auto-update on new versions

## 🧪 Form Validation

Contact form uses React Hook Form + Zod schema:
- **Name:** Min 2 characters
- **Email:** Valid email format
- **Phone:** Optional, min 10 digits
- **Business Name:** Min 2 characters
- **Service Type:** Required selection
- **Budget:** Required selection
- **Timeline:** Required selection
- **Message:** Min 10 characters

## 🌐 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## 📦 Dependencies

### Production
- react: ^19.2.0
- react-dom: ^19.2.0
- react-router-dom: ^7.13.0
- framer-motion: ^12.31.0
- react-hook-form: ^7.71.1
- @hookform/resolvers: ^5.2.2
- zod: ^4.3.6
- react-helmet-async: ^2.0.5
- @headlessui/react: ^2.2.9
- @heroicons/react: ^2.2.0

### Development
- vite: ^7.2.4
- @vitejs/plugin-react: ^5.1.1
- tailwindcss: ^3.x
- autoprefixer: ^10.4.24
- postcss: ^8.5.6
- vite-plugin-pwa: ^1.2.0

## 🚀 Deployment

### Build Command
```bash
npm run build
```

### Deploy to Popular Platforms

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
Update `vite.config.js`:
```js
base: '/repository-name/'
```

## 📝 Customization

### Update Company Information
1. Edit `src/components/common/SEO.jsx` - Update default SEO values
2. Edit `src/components/layout/Footer.jsx` - Update contact info
3. Edit `public/sitemap.xml` - Update URLs
4. Edit `vite.config.js` - Update PWA manifest

### Update Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... }
    }
  }
}
```

### Add New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/layout/Header.jsx`
4. Add to sitemap in `public/sitemap.xml`

## 📄 License

This is a client project. All rights reserved.

## 🤝 Support

For questions or issues, contact:
- Email: hello@websitelondon.co.uk
- Phone: +44 20 1234 5678

---

Built with ❤️ by Stack Websites London
