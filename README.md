# 🚗 LimoElite — Premium Limo Service Website

A production-ready React + Tailwind CSS landing page for a premium limo service business.

## 📁 Project Structure

```
limoelite/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/         → Sticky nav, mobile menu, language toggle
│   │   ├── Hero/           → Hero section + 3-tab booking widget
│   │   ├── Offers/         → Auto-rotating promo slider (3 offers)
│   │   ├── Services/       → 6 service cards grid
│   │   ├── Fleet/          → 3 vehicle cards (Sedan, SUV, Limo)
│   │   ├── Airport/        → Airport transfer highlight section
│   │   ├── Plans/          → Daily / Weekly / Monthly pricing
│   │   ├── TrustBar/       → Animated stats + media mentions
│   │   ├── Reviews/        → Rating summary + 6 review cards
│   │   ├── About/          → Company story + awards + trust ranking
│   │   ├── FAQ/            → Accordion FAQ (8 questions)
│   │   ├── Contact/        → Contact form + info card
│   │   ├── Map/            → Google Maps embed
│   │   ├── Footer/         → 4-column footer
│   │   └── GradientBar.jsx → Reusable gradient divider
│   ├── context/
│   │   └── LangContext.jsx → EN/ES language context + toggle
│   ├── data/
│   │   └── translations.js → All EN + ES text strings
│   ├── hooks/
│   │   └── useScrollAnimation.js → IntersectionObserver fade-up hook
│   ├── App.jsx             → Root component, assembles all sections
│   ├── index.js            → React DOM entry point
│   └── index.css           → Tailwind directives + custom CSS classes
├── tailwind.config.js      → Brand colors, fonts, animations
├── postcss.config.js
├── package.json
└── README.md
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

## 🎨 Brand Colors

| Color  | Hex       | Usage                          |
|--------|-----------|--------------------------------|
| Red    | `#D62828` | CTA buttons, highlights        |
| Blue   | `#1A3A6B` | Nav, headers, trust sections   |
| Orange | `#F4821F` | Icons, hover accents, badges   |
| Yellow | `#FFD700` | Star ratings, premium badges   |
| White  | `#FFFFFF` | Backgrounds, card surfaces     |

## 🌐 Bilingual Support (EN / ES)

All text is managed in `src/data/translations.js`.

- Toggle button in Navbar switches between English and Spanish
- Language preference saved in `localStorage`
- To add a new language, add a new key in `translations.js` and update `LangContext.jsx`

## ✏️ Customization Checklist

Before going live, replace these placeholders:

| What | Where | Replace With |
|------|-------|-------------|
| Business name "LimoElite" | `Navbar.jsx`, `Footer.jsx`, `App.jsx` | Client's business name |
| Phone `+1 (555) 123-4567` | `Contact.jsx`, `Footer.jsx`, `Map.jsx` | Real phone number |
| WhatsApp number | `Contact.jsx` | Real WhatsApp number (digits only) |
| Email `booking@limoelite.com` | `Contact.jsx`, `Footer.jsx` | Real email |
| Address "123 Luxury Drive..." | `Contact.jsx`, `Footer.jsx`, `Map.jsx` | Real address |
| Prices `$199`, `$799` | `Plans.jsx` | Real pricing |
| Google Maps iframe URL | `Map.jsx` | Generate from maps.google.com → Share → Embed |
| Vehicle images | `Fleet.jsx` | Client's actual vehicle photos |
| Offer expiry date | `translations.js` → `offer_urgency` | Real date |

## 🔧 Adding a New FAQ Item

In `src/components/FAQ/FAQ.jsx`, add to the `faqKeys` array:
```js
{ q: 'faq_q9', a: 'faq_a9' }
```

Then add translations in `src/data/translations.js`:
```js
faq_q9: 'Your new question?',
faq_a9: 'Your answer here.',
```

## 🗺️ Update Google Maps Location

1. Go to `maps.google.com`
2. Search for the client's address
3. Click **Share** → **Embed a map**
4. Copy the `src` URL from the iframe code
5. Paste it in `src/components/Map/Map.jsx` → `<iframe src="...">`

## 🚀 Deploy Options

**Netlify (Easiest):**
```bash
npm run build
# Drag & drop the /build folder to netlify.com/drop
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Traditional Hosting (cPanel):**
```bash
npm run build
# Upload contents of /build to public_html via FTP
```

## 📦 Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Context API** — Language state management
- **IntersectionObserver** — Scroll animations
- **Google Fonts** — Playfair Display, DM Sans, Bebas Neue, Oswald
- **Google Maps** — Office location embed (no API key needed)

---

Built with ❤️ for LimoElite Services
# LimoElite
