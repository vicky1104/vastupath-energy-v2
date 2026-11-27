// ─────────────────────────────────────────────────────────────
//  All website content lives in this file.
//  Edit text, phone numbers, images or testimonials here; the pages update automatically.
// ─────────────────────────────────────────────────────────────

export const BRAND = "Vastupath Energy";
export const TAGLINE = "Vastu today, harmony tomorrow";
export const FOUNDER = "Harsh Shah";

export const PHONE_DISPLAY = "+91 89800 39992";
export const PHONE_TEL = "+918980039992";
export const WHATSAPP_NUMBER = "918980039992";
export const whatsappLink = (text = "Hi Vastupath Energy, I would like a Vastu consultation quote.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const INSTAGRAM_HANDLE = "@vastupathenergy";
export const INSTAGRAM_URL = "https://www.instagram.com/vastupathenergy/";
export const LOCATION = "Ahmedabad, Gujarat";
export const SERVICE_AREA = "Site visits in Ahmedabad · Online consultations worldwide";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

// Photography: free-licence images from Unsplash (unsplash.com/license).
// Swap any URL for your own photo (put it in /public and use "/your-photo.jpg").
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;
export const IMAGES = {
  haveli: u("photo-1538460007089-2e7b2862248a"), // Mubarak Mahal, City Palace, Jaipur (Milind Ruparel)
  courtyard: u("photo-1742303315242-0fc6298f7fff"), // Open courtyard (Akshat Jhingran)
  courtyardAgra: u("photo-1665569623441-35f777561ec6"), // Courtyard, Agra (Pankaj Singh)
  pillars: u("photo-1651148575176-b7c82ead7903", 1200), // Palace pillar and window, Jodhpur (Shamna Kadiri)
  livingRoom: u("photo-1746517757473-7c88850e539b", 1200), // Modern living room, New Delhi (Spl Interiors)
  bedroom: u("photo-1667375185276-13b00bf723bc", 1200), // Bedroom, Chennai (Dinesh Lunked)
  office: u("photo-1747992021633-762a63985d01", 1200), // Modern office (Spl Interiors)
  land: u("photo-1765260905999-06612390fb07", 1200), // Open land, Maharashtra (Satish Dharmavarapu)
  industrial: u("photo-1764115424737-25aca6f47835", 1200), // Workshop, Mumbai (Zoshua Colah)
  floorPlan: u("photo-1721244653652-268631ec049a", 1200), // Floor plan drawing (Amsterdam City Archives)
};

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  included: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "residential-vastu",
    title: "Residential Vastu",
    kicker: "Flats · Bungalows · Villas",
    summary: "Bring balance and positive energy to your family's home, from the entrance to the bedroom and kitchen.",
    description:
      "Your home shapes how your family feels every day. We review each room and suggest simple changes so the space supports health, harmony and peace of mind, whether you are moving into a new home or improving the one you live in.",
    included: [
      "Room-by-room review for flats, bungalows and villas",
      "Entrance, kitchen, bedroom and puja room placement",
      "Guidance for new and existing homes",
      "Clear written suggestions you can act on",
    ],
    image: IMAGES.livingRoom,
  },
  {
    slug: "commercial-office-vastu",
    title: "Commercial & Office Vastu",
    kicker: "Offices · Shops · Showrooms",
    summary: "Arrange your office, shop or showroom so the space supports focus, growth and business success.",
    description:
      "The way a workplace is arranged affects decisions, teamwork and cash flow. We guide the placement of the owner's cabin, staff seating, cash counter and meeting areas so your business space works with you.",
    included: [
      "Seating and cabin placement for owners and staff",
      "Cash counter, reception and meeting room guidance",
      "Offices, shops and showrooms",
      "Layout advice for new premises and renovations",
    ],
    image: IMAGES.office,
  },
  {
    slug: "plot-vastu",
    title: "Plot Selection & Plot Vastu",
    kicker: "Before you buy or build",
    summary: "Choose and plan your land the right way before construction begins, for owners and builders alike.",
    description:
      "The best time to apply Vastu is before the first brick is laid. We assess a plot's shape, slope, surrounding roads and orientation, then work with your architect so the plan starts on the right foundation.",
    included: [
      "Plot selection by shape, slope, roads and direction",
      "Planning guidance before a new build",
      "Floor plan review with your architect",
      "Support for builders and real estate projects",
    ],
    image: IMAGES.land,
  },
  {
    slug: "industrial-vastu",
    title: "Industrial Vastu",
    kicker: "Factories · Workshops · Warehouses",
    summary: "Plan factories, workshops and warehouses so machinery, storage and offices sit in the right zones.",
    description:
      "Industrial units carry heavy machinery, raw material, finished goods and people. We guide where each of these belongs so the unit runs smoothly, for new plants and for existing ones.",
    included: [
      "Placement of machinery, storage and raw material",
      "Owner's cabin, accounts and administration areas",
      "Entrance, dispatch and loading zones",
      "Guidance for new and existing units",
    ],
    image: IMAGES.industrial,
  },
  {
    slug: "remedies-without-demolition",
    title: "Remedies Without Demolition",
    kicker: "No breaking walls",
    summary: "Correct Vastu doshas with simple, practical fixes, with no breaking walls and no costly rebuilding.",
    description:
      "Most Vastu problems can be corrected without touching the structure. We use placement, colours, elements and carefully chosen remedies that suit your space and your budget.",
    included: [
      "Changes in placement, colours and elements",
      "Simple corrections for existing structures",
      "Remedies that suit your budget and space",
      "Follow-up support after changes",
    ],
    image: IMAGES.pillars,
  },
  {
    slug: "online-consultation",
    title: "Online & Remote Consultation",
    kicker: "Across India and abroad",
    summary: "Get a full consultation from anywhere, over video call and WhatsApp, based on your floor plan.",
    description:
      "Distance is no barrier. Share your floor plan, photos and compass directions, and receive a complete review over video call, followed by a written report with suggested remedies.",
    included: [
      "Available across India and abroad",
      "Share your floor plan, photos and compass directions",
      "Consultation over video call",
      "Written report with suggested remedies",
    ],
    image: IMAGES.floorPlan,
  },
];

export const REMEDIES = [
  { key: "yantra", title: "Yantra", text: "Energised yantras placed in the right direction." },
  { key: "murti", title: "Murti", text: "Deity idols chosen and placed as per Vastu." },
  { key: "colour", title: "Colour codes", text: "Colours matched to each direction and room." },
  { key: "gems", title: "Gems", text: "Stones selected to correct doshas." },
  { key: "crystals", title: "Crystals", text: "Crystals that attract and hold positive energy." },
  { key: "images", title: "Images", text: "Meaningful pictures and symbols that uplift each room." },
];

export const ALIGNMENTS = [
  {
    key: "numerology",
    title: "Vastu with Numerology",
    text: "Your space aligned with your name, birth date and address numbers, with remedies matched to your personal numbers.",
  },
  {
    key: "astrology",
    title: "Vastu with Astrology",
    text: "Guidance planned around your birth chart and planetary positions, so remedies suit you as well as your space.",
  },
];

export const AUDIENCES = [
  { title: "Homeowners", text: "Buying, building or living in a home that feels right.", image: IMAGES.bedroom },
  { title: "Businesses", text: "Offices, shops and factories that support growth.", image: IMAGES.office },
  { title: "Builders & developers", text: "Projects that buyers trust, with Vastu built in from the start.", image: IMAGES.land },
];

export const STEPS = [
  { title: "Message on WhatsApp", text: "Tell us about your home, office, factory or plot, and what help you need." },
  { title: "Share your details", text: "Send your floor plan or plot layout, a few photos and your address or city." },
  { title: "Property analysis", text: "A site visit in person in Ahmedabad, or a detailed online review over video call for everywhere else." },
  { title: "Recommendations & remedies", text: "Receive clear, practical suggestions and remedies, with no demolition needed." },
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

// Project photos: put the files in /public/images/projects/ with these names.
export const PROJECTS = [
  {
    title: "Divine Motors Pvt. Ltd.",
    place: "Silvassa",
    type: "Commercial Vastu",
    detail: "Authorised Hyundai dealer. Vastu visit with Mr. Piyush Desai, Managing Director.",
    image: "/images/projects/divine-motors.jpg",
  },
  {
    title: "Shree Ambica Auto Sales & Service",
    place: "",
    type: "Commercial Vastu",
    detail: "Tata Truck dealer. Vastu discussion with Director Mr. Nitesh Modi.",
    image: "/images/projects/shree-ambica-auto.jpg",
  },
  {
    title: "Breadko",
    place: "Ahmedabad",
    type: "Commercial Vastu",
    detail: "Bakery food manufacturer.",
    image: "/images/projects/breadko.jpg",
  },
];

// Client reviews: replace `text` with the exact wording from each client if it differs.
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

export const SPACE_TYPES = [
  "Flat / Apartment",
  "Bungalow / Villa",
  "Office",
  "Shop / Showroom",
  "Factory / Warehouse",
  "Plot / Land",
  "Other",
];
