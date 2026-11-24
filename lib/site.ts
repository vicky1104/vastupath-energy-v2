// All site content lives here so it can be edited without touching layout code.

export const PHONE_DISPLAY = "+91 89800 39992";
export const PHONE_TEL = "+918980039992";
export const WHATSAPP_URL =
  "https://wa.me/918980039992?text=" +
  encodeURIComponent("Hi Vastupath Energy, I would like a Vastu consultation quote.");
export const INSTAGRAM_HANDLE = "@vastupathenergy";
export const INSTAGRAM_URL = "https://www.instagram.com/vastupathenergy/";
export const LOCATION = "Ahmedabad, Gujarat · Online worldwide";
export const TAGLINE = "Vastu today, harmony tomorrow";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

export type ServiceKey = "home" | "office" | "plot" | "remedies" | "online";

export const SERVICES: {
  key: ServiceKey;
  slug: string;
  title: string;
  short: string;
  long: string;
  included: string[];
}[] = [
  {
    key: "home",
    slug: "home-vastu",
    title: "Home Vastu",
    short: "Bring balance to your family's living spaces, from the entrance to the bedroom and kitchen.",
    long: "Bring balance and positive energy to your family's living spaces, from the entrance to the bedroom and kitchen.",
    included: [
      "Room-by-room review for flats, bungalows and villas",
      "Entrance, kitchen, bedroom and puja room placement",
      "Guidance for new homes and existing homes",
      "Clear, written suggestions you can act on",
    ],
  },
  {
    key: "office",
    slug: "office-vastu",
    title: "Office Vastu",
    short: "Set up your office, shop or factory so the space supports focus and business growth.",
    long: "Set up your office, shop or factory so the space supports focus, growth and business success.",
    included: [
      "Seating and cabin placement for owners and staff",
      "Cash counter, reception and meeting room guidance",
      "Offices, shops, showrooms and factories",
      "Layout advice for new premises and renovations",
    ],
  },
  {
    key: "plot",
    slug: "plot-vastu",
    title: "Plot Vastu",
    short: "Choose and plan your land the right way before construction, for owners and builders.",
    long: "Choose and plan your land the right way before construction begins, for owners and builders alike.",
    included: [
      "Plot selection by shape, slope, roads and direction",
      "Planning guidance before a new build",
      "Floor plan review with your architect",
      "Support for builders and real estate projects",
    ],
  },
  {
    key: "remedies",
    slug: "remedies-without-demolition",
    title: "Remedies Without Demolition",
    short: "Correct Vastu doshas with simple fixes, without breaking walls or rebuilding.",
    long: "Correct Vastu doshas with simple, practical fixes. No breaking walls, no costly rebuilding.",
    included: [
      "Changes in placement, colours and elements",
      "Simple corrections for existing structures",
      "Remedies that suit your budget and space",
      "Follow-up support after changes",
    ],
  },
  {
    key: "online",
    slug: "online-consultation",
    title: "Online & Remote Consultation",
    short: "Share your floor plan and get a full review over video call and WhatsApp.",
    long: "Get a full consultation from anywhere, over video call and WhatsApp, based on your floor plan.",
    included: [
      "Available across India and abroad",
      "Share your floor plan, photos and compass directions",
      "Consultation over video call",
      "Written report with suggested remedies",
    ],
  },
];

export const REMEDIES = [
  { key: "yantra", title: "Yantra", text: "Energised yantras placed in the right direction." },
  { key: "murti", title: "Murti", text: "Deity idols chosen and placed as per Vastu." },
  { key: "colour", title: "Colour codes", text: "Colours matched to each direction and room." },
  { key: "gems", title: "Gems & crystals", text: "Stones used to correct doshas and attract positive energy." },
  { key: "images", title: "Images", text: "Meaningful pictures and symbols that uplift each room." },
  { key: "numerology", title: "Numerology", text: "Vastu aligned with your name, birth date and address numbers." },
  { key: "astrology", title: "Astrology", text: "Guidance matched to your birth chart and planetary positions." },
] as const;

export const AUDIENCES = [
  { key: "home", title: "Homeowners", text: "Buying, building or living in a home that feels right." },
  { key: "biz", title: "Businesses", text: "Offices, shops and factories that support growth." },
  { key: "builder", title: "Builders & developers", text: "Projects that buyers trust, with Vastu built in from the start." },
] as const;

export const STEPS = [
  { title: "Message on WhatsApp", text: "Tell us about your home, office or plot and what help you need." },
  { title: "Share your details", text: "Send your floor plan or plot layout, a few photos and your address or city." },
  { title: "Site visit or video call", text: "Site visits in person in Ahmedabad, or an online review for everywhere else." },
  { title: "Remedies & guidance", text: "Receive clear, practical suggestions, with no demolition needed." },
];

export const FAQS = [
  {
    q: "How much does a consultation cost?",
    a: "Every space is different, so we share a quote after understanding yours. Message us on WhatsApp with a few details and we'll get back to you.",
  },
  {
    q: "Will I need to break walls or rebuild?",
    a: "No. Our remedies focus on placement, colours, elements and small corrections that work with your existing structure.",
  },
  {
    q: "Do you visit sites outside Ahmedabad?",
    a: "Site visits are in Ahmedabad. For other cities and abroad, we offer online consultations over video call using your floor plan and photos.",
  },
  {
    q: "What do I need to share for an online consultation?",
    a: "Your floor plan or plot layout, photos of the space and the direction of the main entrance. We'll guide you through the rest on WhatsApp.",
  },
];

export const PROJECTS = [
  {
    title: "Divine Motors Pvt. Ltd.",
    place: "Silvassa",
    type: "Commercial Vastu",
    detail: "Authorised Hyundai dealer · Vastu visit with Mr. Piyush Desai (Managing Director)",
    image: "/images/projects/divine-motors.jpg",
  },
  {
    title: "Shree Ambica Auto Sales & Service",
    place: "",
    type: "Commercial Vastu",
    detail: "Tata Truck dealer · Vastu discussion with Director Mr. Nitesh Modi",
    image: "/images/projects/shree-ambica-auto.jpg",
  },
  {
    title: "Breadko",
    place: "Ahmedabad",
    type: "Commercial Vastu",
    detail: "Bakery food manufacturer",
    image: "/images/projects/breadko.jpg",
  },
];

// Paste the exact review wording from your previous site into `text` if it differs.
export const TESTIMONIALS = [
  {
    name: "Shyamal",
    meta: "RKR Technology Service, Ahmedabad",
    tag: "Office Vastu",
    text: "Clear guidance, practical advice and quick responses for our office. We saw positive results after applying the suggestions.",
  },
  {
    name: "Parth Shah",
    meta: "London, UK",
    tag: "Home Vastu",
    text: "Got our home Vastu done with Vastupath Energy. The process was easy and the suggestions were clear and practical. Very happy.",
  },
  {
    name: "Pandavaz",
    meta: "Branding agency, Ahmedabad",
    tag: "Office Vastu",
    text: "A very good experience consulting for our office. We have seen a good result after the Vastu consultancy.",
  },
  {
    name: "Divine Motors Pvt. Ltd.",
    meta: "Hyundai, Silvassa",
    tag: "Commercial Vastu",
    text: "The consultation for our Hyundai centre was detailed and easy to follow. Harsh explained everything simply, with practical remedies. Highly recommended!",
  },
  {
    name: "Raval Financial Services",
    meta: "",
    tag: "Home & Office Vastu",
    text: "Received guidance and remedies for both our home and office, and noticed positive changes within 20 days.",
  },
];
