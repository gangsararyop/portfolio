// Contact details used by the hero, contact section, and CTA buttons.
import { LANG } from "./lang";

export const EMAIL = "gangsararyo@gmail.com";
export const WHATSAPP_NUMBER = "6281381195762";
export const GITHUB_URL = "https://github.com/gangsararyop";
export const LINKEDIN_URL = "https://www.linkedin.com/in/gangsar-aryo";
// Generated from cv/cv.html by `npm run cv`.
export const CV_URL = "/static/cv_gangsar_aryo.pdf";

// Prefilled WhatsApp message + email subject, kept in both languages so they
// follow the active LANG (see ./lang.ts).
const WHATSAPP_MESSAGE = {
  en: "Hi Gangsar, I'd like to talk about building a website for my business.",
  id: "Halo Gangsar, saya ingin berdiskusi tentang pembuatan website untuk bisnis saya.",
}[LANG];

const EMAIL_SUBJECT = {
  en: "Website project enquiry",
  id: "Pertanyaan proyek website",
}[LANG];

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}`;
