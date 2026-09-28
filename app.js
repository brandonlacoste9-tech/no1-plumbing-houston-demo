const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "713 347-0625",
  "hero.kicker": "Houston, Texas · Open 24/7 for emergencies",
  "hero.title": "Plumbing problems?<br>We fix them fast.",
  "hero.sub": "5.0-star rated (25 Birdeye reviews): drain cleaning, pipe repair, leak fixes and bathroom plumbing — upfront pricing, professional techs, around the clock.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "24/7",
  "stats.hours": "Open around the clock",
  "stats.makesNum": "5.0",
  "stats.makes": "Birdeye rating · 25 reviews",
  "stats.diagNum": "Same-day",
  "stats.diag": "emergency service",
  "stats.quoteNum": "Upfront",
  "stats.quote": "pricing before we start",
  "services.kicker": "What we do",
  "services.title": "Full-service plumbing, day or night",
  "services.s1t": "Pipe repair & repiping",
  "services.s1d": "Leaks, bursts and corroded pipes fixed fast — whole-home repiping too.",
  "services.s2t": "Drain cleaning",
  "services.s2d": "Tough clogs cleared with professional equipment — sinks, showers and mains.",
  "services.s3t": "Clogged toilets",
  "services.s3d": "Fast, clean toilet repair — clogs, running tanks and full replacements.",
  "services.s4t": "Leak detection & repair",
  "services.s4d": "We find hidden leaks and fix them before they become disasters.",
  "services.s5t": "Water heaters",
  "services.s5d": "Repair and installation of tank and tankless water heaters.",
  "services.s6t": "Bathroom repairs",
  "services.s6d": "Faucets, fixtures and bathroom plumbing installed and repaired.",
  "walkin.w1t": "24/7 emergency service",
  "walkin.w1d": "Nights, weekends, holidays",
  "walkin.w2t": "Upfront pricing",
  "walkin.w2d": "Agreed before we start",
  "walkin.w3t": "Clean & professional",
  "walkin.w3d": "We leave your home as we found it",
  "makes.kicker": "All major brands",
  "makes.title": "We service every brand",
  "makes.sub": "Whatever's installed in your home — we repair and replace all major fixture and equipment brands.",
  "why.kicker": "Why choose us",
  "why.title": "Houston's around-the-clock plumber",
  "why.intro": "Plumbing emergencies don't keep office hours. Neither do we. Fast response, honest pricing and work done right — at 3 PM or 3 AM.",
  "why.l1t": "24/7 availability",
  "why.l1d": "Real humans answering, real techs dispatched — any hour.",
  "why.l2t": "Fast response",
  "why.l2d": "Emergency calls get priority dispatch across Houston.",
  "why.l3t": "Upfront pricing",
  "why.l3d": "You approve the price before any work begins.",
  "why.l4t": "Professional techs",
  "why.l4d": "Clean, courteous and skilled — we treat your home like our own.",
  "products.kicker": "We install",
  "products.title": "Quality equipment we trust",
  "products.sub": "The same quality equipment we install every day — ask us about options for your home.",
  "products.p1t": "Water heaters",
  "products.p1d": "Tank and tankless models sized right for your household.",
  "products.p2t": "Faucets & fixtures",
  "products.p2d": "Quality kitchen and bath fixtures, professionally installed.",
  "products.p3t": "Garbage disposals",
  "products.p3d": "Quiet, powerful disposals installed in under an hour.",
  "products.note": "Call us any time to ask about equipment options.",
  "products.cta": "Call to ask",
  "gallery.kicker": "On the job",
  "gallery.title": "Clean work, every time",
  "gallery.c1": "Professional drain cleaning, done right",
  "gallery.c2": "Your neighborhood plumbing pros",
  "gallery.c3": "Neat, professional pipe work",
  "reviews.kicker": "Word on the street",
  "reviews.title": "Houston homeowners rate us 5.0",
  "reviews.more": "<strong>5.0 rating · 25 Birdeye reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Are you really open 24/7?",
  "faq.a1": "Yes — 24 hours a day, 7 days a week, including holidays. Emergencies don't wait, and neither do we.",
  "faq.q2": "Do you charge extra for nights or weekends?",
  "faq.a2": "You'll always know the price before we start — no surprise surcharges, ever.",
  "faq.q3": "How fast can you get here?",
  "faq.a3": "Emergency calls get priority dispatch. Call us and we'll give you a real ETA.",
  "faq.q4": "Where are you located?",
  "faq.a4": "2303 Mid Ln, Houston, TX 77027 — serving homes across the Houston area.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Open 24 hours a day<br>7 days a week",
  "contact.cta": "Call now to book",
  "promo.kicker": "Always open",
  "promo.title": "24/7 emergency plumbing",
  "promo.text": "Burst pipes don't wait for business hours — neither do we. One call, any time, day or night, and a pro is on the way.",
  "promo.cta": "Call now — we're open",
  "footer.tag": "24/7 plumbing service · Houston, Texas"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
