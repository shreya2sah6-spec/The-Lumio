import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useArrowTabNav } from "../hooks/useArrowTabNav";
import { ArrowLeft, ShareFat, Star, MapPin, ArrowSquareOut, DotsThreeVertical, Check } from "@phosphor-icons/react";
import { Button } from "../components/ui/button";
import { OverviewTab } from "../components/brand-profile/OverviewTab";
import { JobsTab } from "../components/brand-profile/JobsTab";
import { ReviewsTab } from "../components/brand-profile/ReviewsTab";
import { PeopleTab, type BrandPerson } from "../components/brand-profile/PeopleTab";
import { BRAND_FEATURED_JOBS } from "./JobsPage";
import { AppLayout } from "../components/AppLayout";
import type { Job } from "../components/JobCard";

// ─── Company logos — sourced from the centralized registry ───────────────────
import {
  logoSabyasachi,
  logoRohitBal,
  logoAbuJani,
  logoManishMalhotra,
  logoFabIndia,
  logoRawMango,
  logoPero,
  logoAnavila,
  logoAmrapali,
  logoEkayaBanaras,
  logoPapaDontPreach,
  logoJJValya,
  logoGauravGupta,
  logoAnitaDongre,
  logoMasaba,
} from "../data/companyLogos";

// ─── Brand data ───────────────────────────────────────────────────────────────

interface BrandEntry {
  name: string;
  category: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  /** Image-based logo. When absent, `logoColor` + initials are used instead. */
  logo?: string;
  /** Fallback background color for the initials logo cell. */
  logoColor?: string;
  about: string;
  locations: { city: string; state: string }[];
}

const BRAND_DATA: Record<string, BrandEntry> = {
  sabyasachi: {
    name: "Sabyasachi",
    category: "Retail Luxury",
    city: "Kolkata",
    state: "West Bengal",
    rating: 4.2,
    reviewCount: 60,
    logo: logoSabyasachi,
    about:
      "Sabyasachi Mukherjee founded his eponymous label in Kolkata in 1999 with a singular conviction: that India's richest design traditions deserved to be elevated rather than simplified. Drawing on the archives of zardozi embroidery, handwoven textiles, and regional craft vocabularies, the brand established a new benchmark for Indian luxury that rejected imitation in favour of deep cultural fluency. Over two decades, Sabyasachi became the defining reference for Indian bridal wear — not because it followed conventions, but because it understood them well enough to redefine them. The atelier works directly with artisan communities across Bengal, Rajasthan, and Varanasi, translating inherited craft knowledge into collections that feel both historically grounded and entirely contemporary. The iconic Sabyasachi saree, with its distinctive hand-dyed fabrics and intricate surface work, has appeared on brides across the world and on international red carpets, redefining how Indian design is perceived globally. Beyond fashion, the brand has extended into jewellery, accessories, and home — each category pursued with the same commitment to craft heritage and material integrity. Sabyasachi's work is not about trend. It is about the slow, deliberate building of a design language that speaks equally to Indian cultural memory and to the global appetite for authenticity.",
    locations: [{ city: "Mumbai", state: "Maharashtra" }],
  },
  papaDontPreach: {
    name: "Papa Don't Preach",
    category: "Contemporary Fashion",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.0,
    reviewCount: 42,
    logo: logoPapaDontPreach,
    about:
      "Papa Don't Preach by Shubhika was founded in 2012 with a clear creative conviction: that Indian fashion could be bold, joyful, and utterly unapologetic. Shubhika Sharma built the brand from a personal aesthetic rooted in maximalism — the idea that more colour, more print, and more personality is always the right answer. Her collections draw freely from India's rich visual traditions, from Bollywood's golden-era kitsch to block-print craft vocabularies, recombining them into something entirely contemporary and distinctly her own. The brand's signature is its use of colour: saturated, clashing, confident palettes that defy the conventions of safe dressing. Silhouettes are playful and considered, built around the needs of women who want to be seen and remembered. Papa Don't Preach has become a reference for a generation of Indian women who approach fashion as self-expression rather than as conformity. The label has been worn by some of India's most culturally visible personalities and has developed a loyal community that responds to the brand's genuine wit and warmth. Beyond fashion, the brand carries an attitude — a refusal to take itself too seriously while producing work of real creative integrity.",
    locations: [],
  },
  jjValya: {
    name: "JJ Valaya",
    category: "Luxury Fashion",
    city: "New Delhi",
    state: "Delhi",
    rating: 4.1,
    reviewCount: 35,
    logo: logoJJValya,
    about:
      "JJ Valaya was founded in 1992 at a moment when Indian luxury fashion was still finding its footing. Where others were borrowing from Western silhouettes, Shantanu 'JJ' Valaya turned decisively inward — to the visual archives of Mughal courts, Afghan royalty, Russian imperial dress, and European baroque. The result was a design language entirely his own: opulent, architectural, and deeply layered. The brand became synonymous with the concept of grand Indian fashion — collections that were less about individual garments and more about the construction of entire worlds. Known for his heavy use of silk brocades, intricate aari embroidery, and handcrafted zardozi, Valaya brought a level of technical investment to his work that was rare even in the luxury segment. His signature Maharaja silhouette — long, structured, regal — redefined Indian men's occasion wear and introduced a new vocabulary for the Indian groom. Over three decades, the brand has evolved from a purely couture house to one that spans ready-to-wear, accessories, and home. Yet it has never compromised on its foundational commitment: that Indian fashion can be as architecturally ambitious and culturally complex as anything produced anywhere in the world. The JJ Valaya label is a testament to what happens when craft confidence is matched by design ambition of the highest order.",
    locations: [],
  },
  gauravGupta: {
    name: "Gaurav Gupta",
    category: "Luxury Couture",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.3,
    reviewCount: 48,
    logo: logoGauravGupta,
    about:
      "Gaurav Gupta established his couture house in New Delhi in 2003 with a design language unlike anything else in Indian fashion: architectural, sculptural, and deeply rooted in the ancient visual philosophies of the subcontinent. Trained at Central Saint Martins and NID Ahmedabad, he brought a rare combination of Western technical rigour and Indian aesthetic depth to garment construction, producing silhouettes that behave more like sculpture than clothing. The signature Gaurav Gupta gown — with its dramatic draping, structural form, and reference to celestial and cosmological Indian iconography — has become one of the most internationally recognized expressions of contemporary Indian luxury. His work has appeared on global red carpets, worn by some of the world's most prominent cultural figures, from Bollywood stars to Hollywood icons, positioning Indian couture at the highest levels of the global fashion conversation. Each collection is developed as an exploration of a specific philosophical or aesthetic idea — the spiral, the cosmos, the concept of light — translated into garments through a combination of handcraft and technical innovation that few houses can match. The atelier works directly with skilled karigars who understand the relationship between hand and form that makes Gaurav Gupta's constructions possible. For the design community, the house represents a benchmark: proof that Indian fashion can operate at the summit of global couture without compromising its own cultural identity.",
    locations: [],
  },
  anitaDongre: {
    name: "Anita Dongre",
    category: "Sustainable Fashion",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.2,
    reviewCount: 72,
    logo: logoAnitaDongre,
    about:
      "Anita Dongre built her design practice around a conviction that fashion could be both beautiful and responsible — that the two were not in tension but in fact mutually reinforcing. Founded in 1995 with her siblings, the brand grew from a modest studio into one of India's largest and most respected fashion houses, spanning multiple distinct labels that address different market positions and aesthetic sensibilities. What unites them is a design philosophy rooted in handcraft, natural materials, and a deep respect for India's regional textile traditions. The brand's design teams work closely with artisan communities across Rajasthan, Gujarat, and the northeast, developing fabrics and surface treatments that honour traditional techniques while remaining genuinely contemporary in their application. Anita Dongre's bridal and occasion wear collections are known for their soft luxury — intricate surface embroidery, handwoven silks, and print vocabularies drawn from Indian garden and nature motifs. But the brand's influence extends beyond aesthetics. Its commitment to sustainable sourcing, fair trade practices, and transparent artisan partnerships has helped shift the conversation in Indian fashion toward accountability. For a generation of design consumers who want their clothes to mean something beyond appearance, Anita Dongre represents a genuinely principled way of engaging with Indian fashion — one that produces work of lasting beauty while treating the people who make it with dignity.",
    locations: [{ city: "New Delhi", state: "Delhi" }],
  },
  masaba: {
    name: "House of Masaba",
    category: "Contemporary Fashion",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.0,
    reviewCount: 55,
    logo: logoMasaba,
    about:
      "House of Masaba was founded by Masaba Gupta in 2009, at a moment when the Indian fashion industry was still largely defined by bridal and occasion wear. Masaba's intervention was to introduce a genuinely different visual language: bold, graphic, and rooted in a sensibility that was Indian in the most contemporary way possible. Her prints — featuring motifs drawn from everyday Indian visual culture, from currency notes to chai cups to anatomical forms — immediately established an aesthetic that was unmistakably her own and unlike anything else in the market. The brand's commitment to print as the central design statement, rather than embellishment or construction, was radical in its simplicity and has been deeply influential on the direction of contemporary Indian womenswear. Over fifteen years, House of Masaba has expanded well beyond fashion into beauty, accessories, and lifestyle, building a fully realized brand universe that speaks to a generation of Indian women defined by confidence, self-awareness, and cultural fluency. The brand's multi-platform presence — strengthened by Masaba's own cultural visibility as a designer, personality, and figure in Indian popular culture — has made it one of the most recognizable Indian fashion labels internationally. At its core, the brand is about a specific kind of joy: the pleasure of wearing something that is unambiguously Indian, unambiguously modern, and made entirely without apology.",
    locations: [],
  },
  manishMalhotra: {
    name: "Manish Malhotra",
    category: "Bollywood & Luxury Fashion",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.5,
    reviewCount: 120,
    logo: logoManishMalhotra,
    about:
      "No designer has shaped the visual language of Bollywood quite like Manish Malhotra. Since the early 1990s, his work in film costume transformed how Indian cinema presented glamour — introducing a level of technical sophistication and aesthetic ambition to film dressing that redefined public expectations of what Indian fashion could look like. When he launched his eponymous label, he brought that cinematic understanding of spectacle to couture and bridal wear, and the result immediately set a new benchmark for Indian occasion dressing. The brand is particularly known for its bridal collections — heavily embellished, architecturally precise, and unmistakably Bollywood in their understanding of drama. Manish Malhotra lehengas and sarees have become a fixture at high-profile Indian weddings, aspirational reference points for an entire generation of brides who grew up watching his work on screen. Beyond bridal, the label's contemporary line and collaborative collections have expanded the brand's cultural reach to a younger, more globally oriented clientele. The atelier operates from Mumbai, working with skilled karigars to produce garments that combine traditional embroidery techniques — zardozi, dabka, cutdana — with modern fabric technology and silhouette innovation. In the global conversation about Indian luxury, Manish Malhotra is a consistent reference: a designer who understands both the desires of his audience and the technical possibilities of his craft at the deepest level.",
    locations: [{ city: "New Delhi", state: "Delhi" }],
  },
  rawMango: {
    name: "Raw Mango",
    category: "Handloom & Heritage",
    city: "New Delhi",
    state: "Delhi",
    rating: 4.3,
    reviewCount: 38,
    logo: logoRawMango,
    logoColor: "#C35A2A",
    about:
      "Sanjay Garg founded Raw Mango in 2008 with a mission that was quietly radical: to demonstrate that handwoven Indian textiles needed no embellishment to be desirable. At a moment when fashion was moving toward maximalism and surface decoration, Raw Mango chose restraint — commissioning extraordinary fabrics from master weavers across Banaras, Maheshwar, and Chanderi, and allowing the complexity of those textiles to carry the entire weight of the design. The aesthetic is minimalist only in the sense that it trusts its materials completely. The label's distinctive colour work — achieved through meticulous natural dyeing processes and careful control of yarn combinations — produces colour stories unlike anything in the contemporary Indian market. Sarees and garments arrive in palettes that feel both ancient and completely fresh, drawing on the dyer's knowledge accumulated over generations while responding to the sensibility of a contemporary wearer. Raw Mango has also become a significant force in the revival and documentation of textile traditions that were in decline, commissioning weaves that required specialized knowledge and pairing them with designers and photographers who could communicate their value to a new generation. In a market driven by aspiration and newness, the brand's commitment to slowness — to taking the time necessary to produce something genuinely exceptional — has made it one of the most respected labels in Indian fashion. Raw Mango does not explain itself. It simply shows up with extraordinary cloth and trusts that its audience will understand.",
    locations: [],
  },
  pero: {
    name: "Péro",
    category: "Artisanal Fashion",
    city: "New Delhi",
    state: "Delhi",
    rating: 4.1,
    reviewCount: 28,
    logo: logoPero,
    logoColor: "#4A5568",
    about:
      "Aneeth Arora established Péro in 2009 with a distinctive set of priorities: craft as the starting point, not the finishing touch; sustainability embedded in practice rather than claimed as positioning; and a design sensibility that was playful without being frivolous. The brand quickly attracted international attention, earning a place at Paris Fashion Week and building a global community of customers who recognized in its work something genuinely original — a voice in Indian fashion that was both rooted in craft tradition and entirely independent of nostalgic convention. Péro's collections are organized around handmade textiles sourced from artisans across India, with surface treatments — embroidery, patchwork, hand printing — that add layers of meaning and visual complexity without overriding the fabric's inherent character. The silhouettes are relaxed, generous, and functional, reflecting an understanding of dressing that prioritizes comfort and ease alongside beauty. The brand's commitment to sustainable production practices goes beyond materials: it involves careful management of waste, ethical relationships with artisan producers, and a deliberate slowness in output that resists the logics of fast fashion entirely. For its community of wearers — many of them design professionals, artists, and cultural practitioners — Péro represents a way of engaging with fashion that is intellectually serious and aesthetically generous in equal measure. It is one of the few contemporary Indian labels that could fairly be described as having a genuine philosophy of making.",
    locations: [],
  },
  anavila: {
    name: "Anavila",
    category: "Sustainable Luxury",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.2,
    reviewCount: 31,
    logo: logoAnavila,
    logoColor: "#2C7A5E",
    about:
      "Anavila Misra launched her eponymous label in 2012 with a focus that felt almost counterintuitive in the Indian fashion landscape of the time: the linen sari. Where luxury fashion was largely built around silk, embellishment, and surface ornamentation, Anavila's proposition was the opposite — undyed or subtly coloured handwoven linen, worn with minimal styling, whose sophistication came entirely from material quality and the intelligence of its weave. The label found its audience quickly, among women who wanted to wear Indian textiles without the weight and formality that so often accompanied them. The success of that initial proposition created the foundation for a broader design practice that has expanded into other handwoven textiles — cotton, silk, tussar — while maintaining the aesthetic discipline that defined the brand from the start. Anavila collections are known for their restraint: limited colour palettes, clean silhouettes, and a preference for natural colour over synthetic dye. The result is clothing that ages well, that feels better the more it is worn, and that rewards close attention to the fabric rather than the surface treatment. The brand collaborates closely with weaving communities in West Bengal, Andhra Pradesh, and Madhya Pradesh, developing new fabric specifications alongside master weavers whose technical knowledge is incorporated into the design process. In the crowded space of Indian sustainable fashion, Anavila occupies a singular position: one of genuine material intelligence rather than aspirational positioning.",
    locations: [],
  },
  amrapaliJewels: {
    name: "Amrapali Jewels",
    category: "Heritage Jewelry",
    city: "Jaipur",
    state: "Rajasthan",
    rating: 4.4,
    reviewCount: 64,
    logo: logoAmrapali,
    logoColor: "#7B6000",
    about:
      "Amrapali was founded in Jaipur in 1978 by Rajiv Arora and Rajesh Ajmera, at a time when the ancient jewellery traditions of Rajasthan were struggling to find relevance in a rapidly modernizing Indian market. The founders' insight was that the extraordinary technical knowledge held by Jaipur's artisan communities — in Kundan setting, Meenakari enamelling, Jadau work, and polki diamond craft — deserved a different kind of presentation: one that recognized it as fine art rather than commercial product. That commitment to craft documentation and elevation has defined Amrapali's practice across five decades, making it one of the most important repositories of living jewellery knowledge in the country. The brand works with master karigar families who have practised their specializations for generations, commissioning pieces that require months of hand work and the accumulated technical understanding of a lifetime. Collections draw on source material as diverse as Mughal court jewellery archives, folk traditions from across Rajasthan and Gujarat, and the patterns of ancient Indian textile traditions, translating this rich visual vocabulary into pieces that feel contemporarily wearable without sacrificing historical depth. Amrapali's atelier in Jaipur operates as both a production facility and a living archive, documenting techniques and patterns that might otherwise be lost. The result is jewellery that carries something beyond appearance — a connection to a specific place, a specific set of hands, and a specific tradition of making that is genuinely irreplaceable.",
    locations: [],
  },
  ekayaBanaras: {
    name: "Ekaya Banaras",
    category: "Heritage Textiles",
    city: "Varanasi",
    state: "Uttar Pradesh",
    rating: 4.3,
    reviewCount: 29,
    logo: logoEkayaBanaras,
    logoColor: "#6B21A8",
    about:
      "Ekaya Banaras was founded in 2011 with a purpose that was as much archival as commercial: to ensure that the most technically complex and culturally significant weaving traditions of Varanasi did not disappear for lack of market. Banarasi weaving — particularly the aristocratic kinkhab and the intricately figured jamawar — had been declining for decades under pressure from powerloom imitation and changing consumer preferences. Ekaya's founders, working directly with master weavers from traditional weaving families, set about creating a label that could make these extraordinary textiles desirable again on their own terms, without simplification. The brand commissioned new designs developed in close collaboration with the weavers themselves, drawing on historical pattern archives and adding contemporary interpretations that respected the technical logic of the loom rather than overriding it. Collections are anchored in silk — the material that Banaras has worked with for over five hundred years — with supplementary weft patterns in real zari that create the luminous surface effects the tradition is celebrated for. Each Ekaya saree is a record of significant technical investment: complex sarees can take weeks or months to complete, with the design encoded in the warp and weft at the time of warping. The brand has also invested substantially in artisan livelihoods, health, and education, understanding that the preservation of the tradition requires the preservation of the communities that carry it. Ekaya Banaras is not simply a fashion label — it is a sustained institutional commitment to one of the world's great textile traditions.",
    locations: [],
  },
  fabIndia: {
    name: "FabIndia",
    category: "Ethnic & Lifestyle Retail",
    city: "New Delhi",
    state: "Delhi",
    rating: 4.1,
    reviewCount: 215,
    logo: logoFabIndia,
    logoColor: "#1E40AF",
    about:
      "FabIndia was founded in 1960 by John Bissell with a mission that was, for its time, entirely novel: to connect the extraordinary skills of India's artisan communities with consumers who were looking for something beyond mass-produced goods. Beginning with exports of handcrafted home furnishings from Rajasthan and Gujarat, the business grew slowly and deliberately into a retail platform that today represents one of the largest systems of artisan livelihood support in the country. The brand's model is distinctive in that artisans participate not merely as producers but as stakeholders — many of the artisan groups that supply FabIndia operate as community-owned enterprises in which the makers share in the value their work creates. The retail offering spans handwoven and hand-printed textiles for clothing, a comprehensive range of home textiles and furnishings, and a personal care and food category built around organic and natural production methods. FabIndia's aesthetic vocabulary is rooted in the traditions it works with — block prints from Rajasthan, woven checks from Andhra Pradesh, hand-dyed fabrics from Gujarat — presented in a form that is accessible and functional for everyday wear. Over six decades, the brand has maintained a consistency of purpose that is unusual in Indian retail: it has grown substantially without abandoning its foundational commitment to handcraft, artisan partnership, and the slow, careful production that genuine craft demands. In a market where sustainability is increasingly claimed as a positioning strategy, FabIndia represents a practice built over decades through genuine structural investment in the people who make its products.",
    locations: [{ city: "Mumbai", state: "Maharashtra" }],
  },
  rohitBal: {
    name: "Rohit Bal",
    category: "Luxury Couture",
    city: "New Delhi",
    state: "Delhi",
    rating: 4.3,
    reviewCount: 44,
    logo: logoRohitBal,
    about:
      "Rohit Bal is one of India's most celebrated luxury designers, known for ensembles that fuse Indian heritage with a distinctly modern aesthetic sensibility. Founded in New Delhi, the house built its reputation on opulent surface embroidery, intricate handcraft, and a signature use of nature motifs — particularly the lotus — which became a defining visual language for the brand. The atelier's work spans couture, bridal, and occasion wear, each category approached with the same commitment to exceptional craftsmanship and material quality. Rohit Bal's collections draw deeply on India's artisanal traditions, working directly with skilled embroiderers, zardozi specialists, and textile artisans to produce garments of extraordinary technical depth. The brand has appeared on international runways and dressed the country's most culturally prominent figures, bringing Indian craft to global stages without sacrificing the integrity of the traditions it draws from. For over three decades, the house has maintained a singular design identity: richly layered, technically ambitious, and unmistakably rooted in the luxury craft heritage of India.",
    locations: [],
  },
  abuJaniSandeepKhosla: {
    name: "Abu Jani Sandeep Khosla",
    category: "Heritage Couture",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.4,
    reviewCount: 51,
    logo: logoAbuJani,
    about:
      "Abu Jani and Sandeep Khosla have been among the most significant forces in Indian fashion for over three decades, establishing a practice inseparable from the highest traditions of Indian craft. Founded in Mumbai, the house is celebrated for its mastery of chikankari embroidery — a centuries-old technique from Lucknow — which the designers elevated to an art form of international standing. Their collections are characterized by a deep reverence for Indian textile heritage combined with a sophisticated understanding of contemporary luxury. The brand has dressed some of the world's most prominent cultural figures, including Bollywood royalty and international celebrities, bringing Indian craft to the highest global stages. Each Abu Jani Sandeep Khosla garment represents an investment of extraordinary time and skill, with intricate handwork that can span hundreds of hours per piece. Beyond chikankari, the house has consistently expanded the vocabulary of Indian craft luxury — commissioning bespoke embroideries, developing original fabric treatments, and collaborating with artisan communities whose specialized knowledge is treated as a creative resource of the highest value. The house's sustained commitment to living craft traditions has made it one of the most important institutional patrons of Indian artisan embroidery in the country.",
    locations: [],
  },
};

type BrandKey = string;


// ─── People data — unique per brand ───────────────────────────────────────────
// Each brand has its own team roster. Avatars are Unsplash face-cropped portraits.
// IDs must be globally unique so PeopleTab's follow-state Set never collides.

const BRAND_PEOPLE: Record<string, BrandPerson[]> = {
  sabyasachi: [
    { id: 101, name: "Meenakshi Basu",       role: "Sr. Creative Director",  company: "Sabyasachi", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 102, name: "Pratik Sen",            role: "Head of Embroidery",     company: "Sabyasachi", avatar: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 103, name: "Laleh Ahuja",           role: "Zardozi Specialist",     company: "Sabyasachi", avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 104, name: "Debraj Chakraborty",    role: "Textile Curator",        company: "Sabyasachi", avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  papaDontPreach: [
    { id: 201, name: "Zara Mirza",            role: "Lead Designer",          company: "Papa Don't Preach", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 202, name: "Harshit Kapoor",        role: "Visual Merchandiser",    company: "Papa Don't Preach", avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 203, name: "Tanya Bhatia",          role: "Print Designer",         company: "Papa Don't Preach", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 204, name: "Aryan Malhotra",        role: "Production Designer",    company: "Papa Don't Preach", avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  jjValya: [
    { id: 301, name: "Kritika Sood",          role: "Sr. Bridal Designer",    company: "JJ Valaya", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 302, name: "Nikhil Chauhan",        role: "Embellishment Designer", company: "JJ Valaya", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 303, name: "Aayesha Pathan",        role: "Pattern Maker",          company: "JJ Valaya", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 304, name: "Gaurav Arora",          role: "Atelier Head",           company: "JJ Valaya", avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  gauravGupta: [
    { id: 401, name: "Sanaya Irani",          role: "Creative Lead",          company: "Gaurav Gupta", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 402, name: "Parth Kapoor",          role: "3D Design Specialist",   company: "Gaurav Gupta", avatar: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 403, name: "Rukmini Pillai",        role: "Draping Expert",         company: "Gaurav Gupta", avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 404, name: "Kabir Seth",            role: "Production Supervisor",  company: "Gaurav Gupta", avatar: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  anitaDongre: [
    { id: 501, name: "Nandita Rao",           role: "Lead Fashion Designer",  company: "Anita Dongre", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 502, name: "Saurabh Pande",         role: "Sustainability Head",    company: "Anita Dongre", avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 503, name: "Ishita Chatterjee",     role: "Handcraft Specialist",   company: "Anita Dongre", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 504, name: "Abhay Tiwari",          role: "Retail Design Head",     company: "Anita Dongre", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  masaba: [
    { id: 601, name: "Shraddha Gupta",        role: "Print Design Lead",      company: "Masaba", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 602, name: "Ronak Jain",            role: "Creative Strategist",    company: "Masaba", avatar: "https://images.unsplash.com/photo-1559163499-413811fb2344?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 603, name: "Prachi Doshi",          role: "Textile Designer",       company: "Masaba", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 604, name: "Mihir Bose",            role: "Brand Design Director",  company: "Masaba", avatar: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  manishMalhotra: [
    { id: 701, name: "Deepali Verma",         role: "Creative Director",      company: "Manish Malhotra", avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 702, name: "Yuvraj Khanna",         role: "Styling Lead",           company: "Manish Malhotra", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 703, name: "Nalini Sharma",         role: "Costume Specialist",     company: "Manish Malhotra", avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 704, name: "Samir Khan",            role: "Collection Coordinator", company: "Manish Malhotra", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  rawMango: [
    { id: 801, name: "Bharati Bhatt",         role: "Weave Design Lead",      company: "Raw Mango", avatar: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 802, name: "Tanmay Bahl",           role: "Handloom Specialist",    company: "Raw Mango", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 803, name: "Sunaina Kulkarni",      role: "Craft Researcher",       company: "Raw Mango", avatar: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 804, name: "Vishal Rawat",          role: "Supply Chain Designer",  company: "Raw Mango", avatar: "https://images.unsplash.com/photo-1563341591-ad53246df541?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  pero: [
    { id: 901, name: "Champa Kaur",           role: "Sr. Artisan Designer",   company: "Péro", avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 902, name: "Jagdeep Singh",         role: "Material Scientist",     company: "Péro", avatar: "https://images.unsplash.com/photo-1520528421-13174b27d12a?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 903, name: "Radha Venkatesan",      role: "Print & Embroidery Lead",company: "Péro", avatar: "https://images.unsplash.com/photo-1568749833774-c5f543bc1d0a?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 904, name: "Ajay Bhardwaj",         role: "Brand Curator",          company: "Péro", avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  anavila: [
    { id: 1001, name: "Varsha Desai",         role: "Linen Specialist",       company: "Anavila", avatar: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1002, name: "Chirag Nair",          role: "Weave Technology Head",  company: "Anavila", avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1003, name: "Sumita Menon",         role: "Creative Lead",          company: "Anavila", avatar: "https://images.unsplash.com/photo-1545494097-1545e22ee878?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1004, name: "Pranav Iyer",          role: "Textile Analyst",        company: "Anavila", avatar: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  amrapaliJewels: [
    { id: 1101, name: "Padmaja Reddy",        role: "Head of Design",         company: "Amrapali Jewels", avatar: "https://images.unsplash.com/photo-1597586124394-fbd2ef4bc45d?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1102, name: "Govind Sharma",        role: "Master Goldsmith",       company: "Amrapali Jewels", avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1103, name: "Parvati Mehta",        role: "Gem Specialist",         company: "Amrapali Jewels", avatar: "https://images.unsplash.com/photo-1586297135537-94bc81ba6e43?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1104, name: "Keshav Rao",           role: "Heritage Collections Lead", company: "Amrapali Jewels", avatar: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  ekayaBanaras: [
    { id: 1201, name: "Saraswati Srivastava", role: "Banarasi Design Lead",   company: "Ekaya Banaras", avatar: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1202, name: "Ramesh Tiwari",        role: "Zari Weave Expert",      company: "Ekaya Banaras", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1203, name: "Usha Pandey",          role: "Pattern Research Head",  company: "Ekaya Banaras", avatar: "https://images.unsplash.com/photo-1596954430555-32b31c9c6f74?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1204, name: "Dhruv Mishra",         role: "Silk Procurement Lead",  company: "Ekaya Banaras", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  fabIndia: [
    { id: 1301, name: "Anupama Joshi",        role: "Category Design Head",   company: "FabIndia", avatar: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1302, name: "Rajan Khosla",         role: "Artisan Partnership Lead", company: "FabIndia", avatar: "https://images.unsplash.com/photo-1506459225705-51ac12c79c46?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1303, name: "Geeta Pillai",         role: "Handloom Specialist",    company: "FabIndia", avatar: "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1304, name: "Vinod Patel",          role: "Craft Sourcing Manager", company: "FabIndia", avatar: "https://images.unsplash.com/photo-1519058082700-08a9cfb32a5b?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  rohitBal: [
    { id: 1401, name: "Anushka Mehra",        role: "Sr. Embroidery Designer", company: "Rohit Bal", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1402, name: "Kunal Malhotra",       role: "Atelier Supervisor",      company: "Rohit Bal", avatar: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1403, name: "Priya Khurana",        role: "Bridal Collections Lead", company: "Rohit Bal", avatar: "https://images.unsplash.com/photo-1561052967-61fc91e48d79?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1404, name: "Siddharth Joshi",      role: "Pattern Specialist",      company: "Rohit Bal", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
  abuJaniSandeepKhosla: [
    { id: 1501, name: "Faisal Khan",          role: "Head of Chikankari",      company: "Abu Jani Sandeep Khosla", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1502, name: "Kavita Agarwal",       role: "Sr. Design Lead",         company: "Abu Jani Sandeep Khosla", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1503, name: "Rohit Mehra",          role: "Embroidery Specialist",   company: "Abu Jani Sandeep Khosla", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&auto=format" },
    { id: 1504, name: "Shweta Tiwari",        role: "Collection Coordinator",  company: "Abu Jani Sandeep Khosla", avatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=200&h=200&fit=crop&crop=face&auto=format" },
  ],
};

// ─── Tab type ────────────────────────────────────────────────────────────────

type Tab = "Overview" | "Jobs" | "Reviews" | "People";
const TABS: Tab[] = ["Overview", "Jobs", "Reviews", "People"];

// ─── BrandLogoCell ────────────────────────────────────────────────────────────
// 80×80 brand logo with graceful onError fallback to initials.
// Use key={brand.name} at the call-site so state resets when brand changes.

function BrandLogoCell({ src, name, logoColor }: { src?: string; name: string; logoColor?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
  return (
    <div className="w-[80px] h-[80px] rounded-[12px] shrink-0 overflow-hidden border border-[#e2d9ef] bg-white">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-contain object-center"
          loading="eager"
          decoding="async"
          {...({ fetchpriority: "high" } as Record<string, string>)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: logoColor ?? "#7D3AEA" }}
        >
          <span className="font-['Manrope',sans-serif] font-bold text-white" style={{ fontSize: 26 }}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function BrandProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [following, setFollowing] = useState(false);

  // Keyboard: ArrowLeft/Right navigates tabs when tab bar has focus
  const tabBarRef = useArrowTabNav<HTMLDivElement>(
    TABS.length,
    (i) => setActiveTab(TABS[i])
  );

  const brandKey = (location.state?.brandKey as string) ?? "";
  const brand = BRAND_DATA[brandKey as BrandKey] ?? null;
  // When opened from a Job Detail page, preserve the originating job so back
  // navigation returns to exactly that job (not whatever /jobs history has).
  const fromJob = location.state?.fromJob as Job | undefined;

  // Guard: should never happen — only reachable via explicit job.brandKey
  if (!brand) return null;

  return (
    <AppLayout
      hideNav
      header={
        <div className="bg-[#fffeff] flex items-center px-4 py-3">
          <button
            onClick={() => {
              if (fromJob) {
                navigate("/jobs", { state: { openJob: fromJob } });
              } else {
                navigate(-1);
              }
            }}
            className="p-2 -ml-2 flex items-center justify-center shrink-0"
            aria-label="Go back"
          >
            <ArrowLeft size={24} color="#1A1128" />
          </button>
          <h1 className="type-h1 text-[#1a1128] whitespace-nowrap pr-[12px]">
            Company Profile
          </h1>
          <div className="flex-1 flex justify-end">
            <button
              className="p-2 -mr-2 flex items-center justify-center"
              aria-label="Share"
            >
              <ShareFat size={22} color="#1A1128" weight="regular" />
            </button>
          </div>
        </div>
      }
    >
      {/* ── Scrollable content — company banner + tabs + tab content ── */}
      <div>

        {/* ── Company banner ── */}
        <div className="px-4 pt-5 pb-4">

          {/* Logo + info row */}
          <div className="flex gap-4 items-center">
            {/* Brand logo — image when available, initials+color otherwise */}
            {/* key resets error state when navigating between brands */}
            <BrandLogoCell key={brand.name} src={brand.logo} name={brand.name} logoColor={brand.logoColor} />

            {/* Name / category / location / rating */}
            <div className="flex-1 min-w-0">
              {/* Name + rating on same row */}
              <div className="flex items-start justify-between gap-2">
                <p className="type-h3 text-[#1a1128]">{brand.name}</p>
                <div className="flex items-center gap-[3px] shrink-0 mt-[4px]">
                  <Star size={13} weight="fill" color="#1A1128" />
                  <span className="type-caption-1 text-[#433059]">
                    {brand.rating.toFixed(1)}
                  </span>
                  <span className="type-caption text-[#9d90ad]">
                    ({brand.reviewCount})
                  </span>
                </div>
              </div>

              {/* Category */}
              <p className="type-body-2 text-[#6b5f7a] mt-[1px]">{brand.category}</p>

              {/* Location */}
              <div className="flex items-center gap-[4px] mt-[3px]">
                <MapPin size={13} color="#9d90ad" />
                <span className="type-caption text-[#9d90ad]">
                  {brand.city}, {brand.state}
                </span>
              </div>
            </div>
          </div>

          {/* ── Action buttons ── */}
          <div className="flex gap-[10px] mt-4">
            {/* Follow — outline → subtle, identical to MentorProfilePage follow behavior */}
            <Button
              variant={following ? "subtle" : "outline"}
              size="lg"
              className="flex-1 rounded-[10px] text-[#7d3aea]"
              onClick={() => setFollowing((f) => !f)}
            >
              {following && <Check size={16} weight="bold" color="#7D3AEA" />}
              <span style={{ color: "#7D3AEA" }}>
                {following ? "Followed" : "Follow"}
              </span>
            </Button>

            {/* Website — gradient variant (Lumio primary CTA) */}
            <Button
              variant="gradient"
              size="lg"
              className="flex-[1.4] rounded-[10px]"
            >
              <ArrowSquareOut size={24} weight="bold" color="white" />
              Website
            </Button>

            {/* Menu — icon button, outlined */}
            <button
              className="w-[48px] rounded-[10px] border border-[#e2d9ef] bg-[#fffeff] flex items-center justify-center shrink-0"
              aria-label="More options"
            >
              <DotsThreeVertical size={22} color="#6b5f7a" weight="bold" />
            </button>
          </div>
        </div>

        {/* ── Tabs — role="tablist" + role="tab" enables ARIA + ArrowLeft/Right via hook ── */}
        <div ref={tabBarRef} role="tablist" className="flex border-b border-[#e2d9ef] shrink-0 px-[16px]">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-3 type-tab whitespace-nowrap transition-colors flex-1 ${
                activeTab === tab ? "text-[#1a1128]" : "text-[#9d90ad]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7d3aea]" />
              )}
            </button>
          ))}
        </div>

        {/* ── Tab content — CSS-hidden, never unmounted ─────────────────────
             Keeping all tabs mounted means images are decoded once on first
             visit and reused instantly on every subsequent tab switch.
             Never use conditional rendering here (destroys DOM → re-fetches). */}
        <div className={activeTab === "Overview" ? undefined : "hidden"}>
          <OverviewTab brand={brand} />
        </div>
        <div className={activeTab === "Jobs" ? undefined : "hidden"}>
          <JobsTab
            jobs={BRAND_FEATURED_JOBS[brandKey] ? [BRAND_FEATURED_JOBS[brandKey]] : []}
          />
        </div>
        <div className={activeTab === "Reviews" ? undefined : "hidden"}>
          {BRAND_FEATURED_JOBS[brandKey]
            ? <ReviewsTab job={BRAND_FEATURED_JOBS[brandKey]} />
            : (
              <div className="px-4 py-16 flex flex-col items-center gap-2">
                <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">
                  No reviews available yet.
                </p>
                <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">
                  Reviews will appear here once employees share their experience.
                </p>
              </div>
            )
          }
        </div>
        <div className={activeTab === "People" ? undefined : "hidden"}>
          <PeopleTab people={BRAND_PEOPLE[brandKey] ?? []} />
        </div>
      </div>

    </AppLayout>
  );
}
