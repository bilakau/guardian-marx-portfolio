

# Plan: Page Transitions, Avatar, Contact Page & Favicon

## 1. Animated Page Transitions
- Wrap `<Outlet />` in `Layout.tsx` with `framer-motion`'s `AnimatePresence` and a `motion.div` keyed by `pathname`
- Fade + slight slide up on enter/exit for smooth transitions

## 2. Profile Avatar
- **Hero section** (`Home.tsx`): Add circular avatar image next to the name/text area
- **About page** (`About.tsx`): Add avatar in the bio section header area
- Image URL: `https://cdn.yupra.my.id/yp/6q3zt0ad.png`

## 3. Contact Page
- Create `src/pages/Contact.tsx` with:
  - WhatsApp link (`https://wa.me/628870864467`) — direct click to chat
  - Email (`guardianmarx@gmail.com`) — mailto link
  - Instagram (`@fmcstoree`) — link to `https://instagram.com/fmcstoree`
  - Contact form (name, email, message) that opens WhatsApp or mailto with prefilled content
- Add "Contact" to navbar links and footer navigation
- Register `/contact` route in `App.tsx`

## 4. Website Favicon
- Update `index.html` to use the profile image as favicon via `<link rel="icon" href="https://cdn.yupra.my.id/yp/6q3zt0ad.png">`

## Files to modify
- `index.html` — favicon
- `src/components/Layout.tsx` — page transition animation
- `src/pages/Home.tsx` — add avatar to hero
- `src/pages/About.tsx` — add avatar to bio section
- `src/components/Navbar.tsx` — add Contact link
- `src/components/Footer.tsx` — add Contact link + update contact info with WhatsApp/Instagram
- `src/App.tsx` — add Contact route
- **New**: `src/pages/Contact.tsx`

