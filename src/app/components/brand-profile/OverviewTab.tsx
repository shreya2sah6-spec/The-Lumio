import { MapPin } from "@phosphor-icons/react";

// ─── Dedicated About Me assets — strict company-to-image mapping ──────────────
// Gaurav Gupta: 3 images
import imgGauravGupta1  from "@/imports/company-profile-about/gaurav-gupta-1.png";
import imgGauravGupta2  from "@/imports/company-profile-about/gaurav-gupta-2.png";
import imgGauravGupta3  from "@/imports/company-profile-about/gaurav-gupta-3.png";

// House of Masaba: 4 images
import imgMasaba1       from "@/imports/company-profile-about/masaba-1.png";
import imgMasaba2       from "@/imports/company-profile-about/masaba-2.png";
import imgMasaba3       from "@/imports/company-profile-about/masaba-3.png";
import imgMasaba4       from "@/imports/company-profile-about/masaba-4.png";

// Papa Don't Preach: 2 images
import imgPapa1         from "@/imports/company-profile-about/papa-dont-preach-1.png";
import imgPapa2         from "@/imports/company-profile-about/papa-dont-preach-2.png";

interface BrandData {
  name: string;
  about: string;
  locations: { city: string; state: string }[];
}

// ─── Per-brand image configs — strict name-based mapping ─────────────────────
// Only these 3 brands render About images. All other brands are text-only.
// Do NOT add other brand images here — see NO-IMAGE companies below.
//
// NO-IMAGE (text-only): Sabyasachi, Rohit Bal, Abu Jani Sandeep Khosla
// + all other brands not listed here.

const BRAND_ABOUT_IMAGES: Record<string, string[]> = {
  "Gaurav Gupta": [
    imgGauravGupta1,
    imgGauravGupta2,
    imgGauravGupta3,
  ],
  "House of Masaba": [
    imgMasaba1,
    imgMasaba2,
    imgMasaba3,
    imgMasaba4,
  ],
  "Papa Don't Preach": [
    imgPapa1,
    imgPapa2,
  ],
};

// Location placeholder — Unsplash CDN, loaded lazily as it's always below-fold
const IMG_LOCATION =
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=352&fit=crop&auto=format";

// ─── Layout: 2 images — balanced side-by-side editorial ──────────────────────
function TwoImageLayout({ images }: { images: string[] }) {
  return (
    <div className="flex gap-[6px] mb-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-1 rounded-[8px] overflow-hidden bg-[#e2d9ef]"
          style={{ height: 130 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

// ─── Layout: 3 images — asymmetric editorial collage ─────────────────────────
function ThreeImageLayout({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-[6px] mb-4">
      {/* wide hero image */}
      <div className="w-full rounded-[8px] overflow-hidden bg-[#e2d9ef]" style={{ height: 130 }}>
        <img src={images[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      {/* two equal images below */}
      <div className="flex gap-[6px]">
        {images.slice(1).map((src, i) => (
          <div
            key={i}
            className="flex-1 rounded-[8px] overflow-hidden bg-[#e2d9ef]"
            style={{ height: 100 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Layout: 4 images — balanced 2×2 responsive grid ────────────────────────
function FourImageLayout({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-[6px] mb-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="rounded-[8px] overflow-hidden bg-[#e2d9ef]"
          style={{ height: 100 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

// ─── Image layout dispatcher ──────────────────────────────────────────────────
function AboutImageLayout({ images }: { images: string[] }) {
  if (images.length === 2) return <TwoImageLayout images={images} />;
  if (images.length === 3) return <ThreeImageLayout images={images} />;
  return <FourImageLayout images={images} />;
}

// ─── Main component ───────────────────────────────────────────────────────────
export function OverviewTab({ brand }: { brand: BrandData }) {
  const brandImages = BRAND_ABOUT_IMAGES[brand.name] ?? null;

  return (
    <div className="px-4 py-5 space-y-6">

      {/* ── About ── */}
      <section>
        <h2 className="type-h2 text-[#1a1128] mb-4">About</h2>

        {/* Dedicated brand images — only for Gaurav Gupta, House of Masaba, Papa Don't Preach */}
        {brandImages && <AboutImageLayout images={brandImages} />}

        <p className="type-body-2 text-[#6b5f7a]">{brand.about}</p>
      </section>

      {/* ── Other locations ── */}
      {brand.locations.length > 0 && (
        <section>
          <h2 className="type-h2 text-[#1a1128] mb-4">Other locations</h2>

          <div className="space-y-4">
            {brand.locations.map((loc, i) => (
              <div
                key={i}
                className="bg-[#fffeff] border border-[#e2d9ef] rounded-[12px] p-[12px] shadow-[0px_1px_3px_rgba(200,192,212,0.3)] max-w-[200px]"
              >
                <div
                  className="w-full overflow-hidden rounded-[8px] bg-[#e2d9ef] mb-4"
                  style={{ height: 176 }}
                >
                  <img
                    src={IMG_LOCATION}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="type-h4 text-[#1a1128]">{brand.name}</p>
                <div className="flex items-center gap-[8px] mt-[4px]">
                  <MapPin size={14} color="#9d90ad" />
                  <span className="type-body-2 text-[#6b5f7a]">
                    {loc.city}, {loc.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
