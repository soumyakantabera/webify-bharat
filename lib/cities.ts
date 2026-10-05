/**
 * Cities (content-plan §9.11, §11). Fully remote over WhatsApp — the same team,
 * process and prices everywhere. Greetings are Roman-script; one marked
 * `greetingVerified: false` stays hidden until the owner checks it with a
 * native speaker (§11). No city-specific claims or numbers.
 */
export type CityZone = "north" | "south" | "east" | "west" | "north-east" | "islands-himalaya";

export type City = {
  slug: string;
  name: string;
  state: string;
  zone: CityZone;
  /** Approximate city-centre coordinates, used by IndiaDotMap and "nearby cities". */
  lat: number;
  lng: number;
  hub?: string;
  greeting: string;
  greetingLang: string;
  greetingVerified?: boolean;
  /** Local industries going digital (sticker tiles). */
  industries: string[];
  keywords: string[];
};

/** Region chips on the Cities hub, each with its banner photo (IMG-C01…C06). */
export const CITY_ZONES: { id: CityZone; label: string; banner: string }[] = [
  { id: "north", label: "North", banner: "IMG-C01" },
  { id: "south", label: "South", banner: "IMG-C02" },
  { id: "east", label: "East", banner: "IMG-C03" },
  { id: "west", label: "West", banner: "IMG-C04" },
  { id: "north-east", label: "North-East", banner: "IMG-C05" },
  { id: "islands-himalaya", label: "Islands & Himalaya", banner: "IMG-C06" },
];

export const cities: City[] = [
  {slug: "mumbai", name: "Mumbai", state: "Maharashtra", zone: "west", lat: 19.08, lng: 72.88, greeting: "Namaskar", greetingLang: "Marathi", industries: ["Finance & services","Retail & fashion","Restaurants & cloud kitchens","Media","Logistics"], keywords: ["website design Mumbai","Mumbai MSME digital","cloud kitchen Mumbai website"]},
  {slug: "bengaluru", name: "Bengaluru", state: "Karnataka", zone: "south", lat: 12.97, lng: 77.59, greeting: "Namaskara", greetingLang: "Kannada", industries: ["IT services & startups","Retail","Education & coaching","Healthcare","Food & cloud kitchens"], keywords: ["website design Bengaluru","MSME website Bangalore","cloud kitchen Bengaluru"]},
  {slug: "delhi", name: "New Delhi", state: "Delhi (NCT)", zone: "north", lat: 28.61, lng: 77.21, hub: "NCR (Delhi–Noida–Gurugram)", greeting: "Namaste", greetingLang: "Hindi", industries: ["Wholesale & retail","Restaurants","Education","Healthcare","Professional services"], keywords: ["website design Delhi","NCR MSME website","cloud kitchen Delhi"]},
  {slug: "chennai", name: "Chennai", state: "Tamil Nadu", zone: "south", lat: 13.08, lng: 80.27, greeting: "Vanakkam", greetingLang: "Tamil", industries: ["Manufacturing & auto ancillaries","Healthcare","Education","Retail","Seafood & F&B"], keywords: ["website design Chennai","MSME Chennai digital","cloud kitchen Chennai"]},
  {slug: "hyderabad", name: "Hyderabad", state: "Telangana", zone: "south", lat: 17.39, lng: 78.49, greeting: "Namaskaram", greetingLang: "Telugu", industries: ["IT & services","Pharma & healthcare","Restaurants & biryani brands","Retail","Education"], keywords: ["website design Hyderabad","Telangana MSME","cloud kitchen Hyderabad","own ecommerce Hyderabad"]},
  {slug: "kolkata", name: "Kolkata", state: "West Bengal", zone: "east", lat: 22.57, lng: 88.36, greeting: "Nomoshkar", greetingLang: "Bengali", industries: ["Retail & wholesale","Education","Healthcare","F&B","Manufacturing SMEs"], keywords: ["website design Kolkata","West Bengal MSME","cloud kitchen Kolkata"]},
  {slug: "jaipur", name: "Jaipur", state: "Rajasthan", zone: "north", lat: 26.91, lng: 75.79, greeting: "Khamma Ghani", greetingLang: "Rajasthani", industries: ["Handicrafts & jewellery","Tourism services","Retail","Education","F&B"], keywords: ["website design Jaipur","Rajasthan MSME ecommerce","handicraft website Jaipur","cloud kitchen Jaipur"]},
  {slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", zone: "north", lat: 26.85, lng: 80.95, greeting: "Adaab", greetingLang: "Urdu/Hindustani", industries: ["Retail & wholesale","Education","Healthcare","Food & hospitality","Handloom"], keywords: ["website design Lucknow","UP MSME website","Hindi website Lucknow","cloud kitchen Lucknow"]},
  {slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", zone: "west", lat: 23.02, lng: 72.57, hub: "Gandhinagar is the capital; Ahmedabad is the commercial hub", greeting: "Kem cho", greetingLang: "Gujarati", industries: ["Textiles & manufacturing","Trading","Retail","Healthcare","Education"], keywords: ["website design Ahmedabad","Gujarat MSME","manufacturer website Ahmedabad","Gandhinagar business website"]},
  {slug: "gandhinagar", name: "Gandhinagar", state: "Gujarat", zone: "west", lat: 23.22, lng: 72.65, hub: "Ahmedabad metro", greeting: "Kem cho", greetingLang: "Gujarati", industries: ["Government & services","Education","Retail","Professional services"], keywords: ["website design Gandhinagar","Gujarat capital business website"]},
  {slug: "patna", name: "Patna", state: "Bihar", zone: "east", lat: 25.59, lng: 85.14, greeting: "Pranam", greetingLang: "Hindi/Bhojpuri", industries: ["Education & coaching","Retail","Healthcare","Food","Services"], keywords: ["website design Patna","Bihar coaching website","clinic website Patna"]},
  {slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", zone: "west", lat: 23.26, lng: 77.41, greeting: "Namaste", greetingLang: "Hindi", industries: ["Education","Healthcare","Retail","Government services","F&B"], keywords: ["website design Bhopal","MP MSME digital"]},
  {slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", zone: "east", lat: 20.3, lng: 85.82, greeting: "Namaskar", greetingLang: "Odia", industries: ["IT & services","Education","Healthcare","Retail","Tourism & F&B"], keywords: ["website design Bhubaneswar","Odisha MSME website"]},
  {slug: "chandigarh", name: "Chandigarh", state: "Chandigarh (shared capital — Punjab & Haryana)", zone: "north", lat: 30.73, lng: 76.78, greeting: "Sat Sri Akal", greetingLang: "Punjabi", industries: ["Retail","Education","Healthcare","Services","F&B"], keywords: ["website design Chandigarh","Mohali MSME website","Punjab Haryana business website"]},
  {slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", zone: "south", lat: 8.52, lng: 76.94, greeting: "Namaskaram", greetingLang: "Malayalam", industries: ["IT & services","Healthcare","Tourism","Education","Retail & F&B"], keywords: ["website design Thiruvananthapuram","Kerala MSME website","Trivandrum business website"]},
  {slug: "raipur", name: "Raipur", state: "Chhattisgarh", zone: "east", lat: 21.25, lng: 81.63, greeting: "Jai Johar", greetingLang: "Chhattisgarhi", greetingVerified: false, industries: ["Trading & retail","Manufacturing","Education","Healthcare","F&B"], keywords: ["website design Raipur","Chhattisgarh MSME"]},
  {slug: "ranchi", name: "Ranchi", state: "Jharkhand", zone: "east", lat: 23.34, lng: 85.31, greeting: "Johar", greetingLang: "Jharkhand", greetingVerified: false, industries: ["Education","Mining services","Retail","Healthcare","F&B"], keywords: ["website design Ranchi","Jharkhand MSME"]},
  {slug: "dehradun", name: "Dehradun", state: "Uttarakhand", zone: "north", lat: 30.32, lng: 78.03, greeting: "Namaste", greetingLang: "Hindi/Garhwali", industries: ["Education","Tourism services","Retail","Healthcare","F&B"], keywords: ["website design Dehradun","Uttarakhand MSME"]},
  {slug: "shimla", name: "Shimla", state: "Himachal Pradesh", zone: "north", lat: 31.1, lng: 77.17, greeting: "Namaste", greetingLang: "Hindi/Pahari", industries: ["Tourism & hospitality","Retail","Education","F&B"], keywords: ["website design Shimla","Himachal hotel website"]},
  {slug: "panaji", name: "Panaji", state: "Goa", zone: "west", lat: 15.49, lng: 73.83, greeting: "Namaskar", greetingLang: "Konkani", industries: ["Tourism & hospitality","F&B","Retail","Services"], keywords: ["website design Panaji","Goa hotel website","restaurant website Goa"]},
  {slug: "amaravati", name: "Amaravati", state: "Andhra Pradesh", zone: "south", lat: 16.51, lng: 80.52, hub: "Amaravati capital region; commercial activity also in Vijayawada–Guntur", greeting: "Namaskaram", greetingLang: "Telugu", industries: ["Government & services","Construction & real estate","Education","Retail","F&B"], keywords: ["website design Amaravati","Andhra Pradesh MSME","Vijayawada business website"]},
  {slug: "dispur", name: "Dispur", state: "Assam", zone: "north-east", lat: 26.14, lng: 91.79, hub: "Guwahati is the commercial hub", greeting: "Nomoskar", greetingLang: "Assamese", industries: ["Trade & retail","Tea & agribusiness services","Education","Healthcare","F&B"], keywords: ["website design Guwahati","Assam MSME","Dispur business website"]},
  {slug: "itanagar", name: "Itanagar", state: "Arunachal Pradesh", zone: "north-east", lat: 27.08, lng: 93.61, greeting: "Namaste", greetingLang: "Hindi, widely used", industries: ["Tourism","Government services","Retail","Hospitality"], keywords: ["website design Itanagar","Arunachal tourism website"]},
  {slug: "imphal", name: "Imphal", state: "Manipur", zone: "north-east", lat: 24.82, lng: 93.94, greeting: "Khurumjari", greetingLang: "Meitei", greetingVerified: false, industries: ["Handloom & handicrafts","Retail","Education","F&B","Services"], keywords: ["website design Imphal","Manipur handicraft website"]},
  {slug: "shillong", name: "Shillong", state: "Meghalaya", zone: "north-east", lat: 25.58, lng: 91.89, greeting: "Khublei", greetingLang: "Khasi", greetingVerified: false, industries: ["Tourism","Education","Retail","Hospitality","F&B"], keywords: ["website design Shillong","Meghalaya tourism website"]},
  {slug: "aizawl", name: "Aizawl", state: "Mizoram", zone: "north-east", lat: 23.73, lng: 92.72, greeting: "Chibai", greetingLang: "Mizo", industries: ["Retail","Services","Education","Hospitality"], keywords: ["website design Aizawl","Mizoram business website"]},
  {slug: "kohima", name: "Kohima", state: "Nagaland", zone: "north-east", lat: 25.67, lng: 94.11, greeting: "Kuknalim", greetingLang: "Naga", greetingVerified: false, industries: ["Tourism","Retail","Hospitality","Services"], keywords: ["website design Kohima","Nagaland tourism website"]},
  {slug: "agartala", name: "Agartala", state: "Tripura", zone: "north-east", lat: 23.83, lng: 91.29, greeting: "Nomoshkar", greetingLang: "Bengali", industries: ["Trade & retail","Education","Services","F&B"], keywords: ["website design Agartala","Tripura MSME"]},
  {slug: "gangtok", name: "Gangtok", state: "Sikkim", zone: "north-east", lat: 27.33, lng: 88.61, greeting: "Namaste", greetingLang: "Nepali", industries: ["Tourism","Hospitality","Retail","F&B"], keywords: ["website design Gangtok","Sikkim hotel website"]},
  {slug: "srinagar", name: "Srinagar", state: "Jammu and Kashmir", zone: "islands-himalaya", lat: 34.08, lng: 74.8, greeting: "Salaam", greetingLang: "Kashmiri/Urdu", industries: ["Tourism & hospitality","Handicrafts","Retail","F&B"], keywords: ["website design Srinagar","Kashmir tourism website","handicraft website Srinagar"]},
  {slug: "puducherry", name: "Puducherry", state: "Puducherry", zone: "south", lat: 11.94, lng: 79.81, greeting: "Vanakkam", greetingLang: "Tamil", industries: ["Tourism","Hospitality","Retail","F&B","Services"], keywords: ["website design Puducherry","Pondicherry hotel website"]},
  {slug: "port-blair", name: "Port Blair", state: "Andaman and Nicobar Islands", zone: "islands-himalaya", lat: 11.62, lng: 92.73, greeting: "Namaste", greetingLang: "Hindi", industries: ["Tourism","Hospitality","Retail","F&B"], keywords: ["website design Port Blair","Andaman hotel website"]},
  {slug: "leh", name: "Leh", state: "Ladakh", zone: "islands-himalaya", lat: 34.15, lng: 77.58, greeting: "Julley", greetingLang: "Ladakhi", industries: ["Tourism","Hospitality","Retail","Services"], keywords: ["website design Leh","Ladakh tourism website"]},
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getZone(id: CityZone) {
  return CITY_ZONES.find((z) => z.id === id)!;
}

/** "Namaskar, Mumbai!" — or null while the greeting awaits verification. */
export function cityGreeting(c: City) {
  return c.greetingVerified === false ? null : `${c.greeting}, ${c.name}!`;
}

/** The nearest cities by straight-line distance. */
export function nearbyCities(c: City, count = 3) {
  const d = (o: City) => (o.lat - c.lat) ** 2 + ((o.lng - c.lng) * Math.cos((c.lat * Math.PI) / 180)) ** 2;
  return cities.filter((o) => o.slug !== c.slug).sort((a, b) => d(a) - d(b)).slice(0, count);
}
