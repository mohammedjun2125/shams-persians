import React, { useState } from "react";
import { HYDERABAD_LOCATIONS, LocationSEO } from "../locationsData";
import { BUSINESS_INFO, KITTENS_DATA } from "../data";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle2,
  Truck,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowLeft
} from "lucide-react";

interface LocationDetailPageProps {
  locationSlug: string;
  onBack: () => void;
  onSelectLocation: (slug: string) => void;
  onNavigateHome: () => void;
}

export default function LocationDetailPage({
  locationSlug,
  onBack,
  onSelectLocation,
  onNavigateHome
}: LocationDetailPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const location =
    HYDERABAD_LOCATIONS.find((loc) => loc.slug === locationSlug) ||
    HYDERABAD_LOCATIONS[0];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsAppMessage = `Hello Shams Persians, I am interested in adopting a Persian cat in ${location.name}, Hyderabad! Please share current photos and availability.`;
  const whatsAppUrl = `https://wa.me/917842496805?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="bg-[#FFFBF7] min-h-screen py-10 lg:py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-charcoal/60 mb-6">
          <button
            onClick={onNavigateHome}
            className="hover:text-softbrown transition-colors cursor-pointer font-medium"
          >
            Home
          </button>
          <ChevronRight className="h-3 w-3 text-charcoal/40" />
          <button
            onClick={onBack}
            className="hover:text-softbrown transition-colors cursor-pointer font-medium"
          >
            Hyderabad Locations
          </button>
          <ChevronRight className="h-3 w-3 text-charcoal/40" />
          <span className="text-softbrown font-bold">{location.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-heading font-bold text-charcoal/70 hover:text-softbrown mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Hyderabad Locations
        </button>

        {/* Google Business Profile Snapshot Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-beige/70 shadow-sm mb-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-softbrown/10 text-softbrown text-xs font-heading font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Google Business Profile
                </span>
                <span className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {BUSINESS_INFO.googleProfileLabel}
                </span>
                <span className="text-xs font-semibold text-charcoal/60 bg-cream/80 px-3 py-1 rounded-full border border-beige/50">
                  {BUSINESS_INFO.category} • Hyderabad
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-charcoal tracking-tight">
                {BUSINESS_INFO.name}
              </h1>

              <p className="text-base sm:text-lg font-heading font-bold text-softbrown italic">
                “{BUSINESS_INFO.tagline}”
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-charcoal/75 pt-1 font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-softbrown shrink-0" />
                  <span>Phone: <a href="tel:07842496805" className="font-bold text-charcoal hover:text-softbrown transition-colors">078424 96805</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-softbrown shrink-0" />
                  <span>Location: <strong className="text-charcoal font-bold">Hyderabad</strong> (Doorstep delivery to {location.name})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-700 shrink-0" />
                  <span>Hours: <span className="text-green-700 font-bold">Open 24 Hours</span> • 7 Days a Week (24/7 Delivery Available)</span>
                </div>
              </div>
            </div>

            {/* Direct Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-2xl font-heading text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                Inquire on WhatsApp
              </a>
              <a
                href="tel:07842496805"
                className="bg-softbrown hover:bg-softbrown/90 text-cream px-6 py-3.5 rounded-2xl font-heading text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
              >
                <Phone className="h-4 w-4" />
                Call 078424 96805
              </a>
            </div>

          </div>
        </div>

        {/* Location Specific Main SEO Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column (8 cols): Headings, Keyword Cloud, Overview, Perks */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-beige/70 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-peach/30 px-3.5 py-1 rounded-full text-xs font-bold text-softbrown uppercase tracking-wider mb-4">
                <MapPin className="h-3.5 w-3.5 text-softbrown" />
                Dedicated Local SEO Page • {location.region}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-charcoal tracking-tight">
                {location.headline}
              </h2>

              <p className="text-sm font-semibold text-softbrown mt-2">
                {location.subheadline}
              </p>

              <div className="w-16 h-1 bg-softbrown rounded-full my-6" />

              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                {location.overview}
              </p>

              {/* Popular Search Keywords Tag Cloud */}
              <div className="mt-8 p-5 bg-cream/60 rounded-2xl border border-beige/60">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-softbrown" />
                  <h4 className="text-xs font-heading font-extrabold text-charcoal uppercase tracking-wider">
                    High Search Volume Keywords for {location.name}:
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.popularSearchKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="bg-white text-xs text-charcoal/85 px-3 py-1.5 rounded-lg border border-beige/70 font-mono shadow-xs"
                    >
                      ✓ {kw}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-charcoal/50 mt-3 font-sans italic">
                  Ranked top for Persian cat inquiries in {location.name} and surrounding Hyderabad areas.
                </p>
              </div>

              {/* Local Perks Grid */}
              <div className="mt-8">
                <h4 className="text-base font-heading font-extrabold text-charcoal mb-4">
                  Why Pet Lovers in {location.name} Choose Shams Persians:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {location.localPerks.map((perk, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-beige/15 border border-beige/40 text-xs sm:text-sm text-charcoal/85"
                    >
                      <CheckCircle2 className="h-4 w-4 text-softbrown shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmarks Covered in this area */}
              <div className="mt-8 pt-6 border-t border-beige/40">
                <h4 className="text-xs font-heading font-extrabold text-charcoal uppercase tracking-wider mb-3">
                  Key Spots & Landmarks Covered in {location.name}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {location.landmarks.map((mark, i) => (
                    <span
                      key={i}
                      className="bg-cream/80 text-xs text-charcoal/70 px-3 py-1 rounded-md border border-beige/50"
                    >
                      • {mark}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Available Persian Varieties Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-beige/70 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal mb-2">
                All Types of Persian Cats Available for {location.name}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 mb-6">
                All kittens are raised cage-free, friendly, and fully de-wormed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {KITTENS_DATA.slice(0, 4).map((kitten) => (
                  <div
                    key={kitten.id}
                    className="border border-beige/60 rounded-2xl p-4 flex gap-4 bg-cream/20 hover:border-softbrown/40 transition-all"
                  >
                    <img
                      src={kitten.image}
                      alt={kitten.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading text-sm font-extrabold text-charcoal">
                          {kitten.name}
                        </h4>
                        <p className="text-[11px] text-softbrown font-semibold mt-0.5">
                          {kitten.breed} • {kitten.color}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/917842496805?text=Hello%20Shams%20Persians,%20I%20am%20in%20${location.name}%20and%20interested%20in%20${encodeURIComponent(kitten.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-heading font-bold text-softbrown hover:text-charcoal inline-flex items-center gap-1 mt-2"
                      >
                        Inquire for {location.name} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local FAQs Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-beige/70 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-5 w-5 text-softbrown" />
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal">
                  Frequently Asked Questions – {location.name}
                </h3>
              </div>

              <div className="space-y-3">
                {location.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-beige/60 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading text-xs sm:text-sm font-bold text-charcoal hover:bg-cream/30 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-softbrown transition-transform duration-200 shrink-0 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-charcoal/75 leading-relaxed bg-cream/10 border-t border-beige/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Delivery HUD, Business Hours Table, Google Reviews */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Delivery Timeline HUD Card */}
            <div className="bg-gradient-to-br from-[#2D231E] to-[#1A1412] text-cream rounded-3xl p-6 shadow-xl border border-[#FFD8BE]/20">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Truck className="h-4 w-4" />
                Home Delivery Timeline
              </div>

              <h4 className="text-xl font-heading font-extrabold text-white">
                Delivery to {location.name}
              </h4>

              <div className="my-4 bg-white/10 rounded-2xl p-4 border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-heading font-black text-amber-300 block">
                  {location.deliveryTime}
                </span>
                <span className="text-[11px] text-cream/70 mt-1 block">
                  Air-conditioned, safe pet carrier transit
                </span>
              </div>

              <ul className="text-xs text-cream/80 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                  <span>Doorstep delivery all over Hyderabad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                  <span>Vaccination card & diet manual included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                  <span>WhatsApp video verification before dispatch</span>
                </li>
              </ul>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white hover:bg-[#20ba59] py-3.5 rounded-xl font-heading text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                Order Kitten to {location.name}
              </a>
            </div>

            {/* Official Hours Table */}
            <div className="bg-white rounded-3xl p-6 border border-beige/70 shadow-sm text-left">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-softbrown" />
                <h4 className="text-sm font-heading font-extrabold text-charcoal uppercase tracking-wider">
                  Shams Persians Hours
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                {BUSINESS_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className={`flex justify-between py-1.5 px-2.5 rounded-lg ${
                      h.isOpenNow ? "bg-cream/40" : "bg-red-50/50 text-red-700"
                    }`}
                  >
                    <span className="font-semibold text-charcoal">{h.day}</span>
                    <span className={`font-bold ${h.isOpenNow ? "text-green-700" : "text-red-600"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-beige/40 text-[11px] text-charcoal/60">
                Call anytime at <a href="tel:07842496805" className="font-bold text-softbrown">078424 96805</a> for rapid inquiry.
              </div>
            </div>

            {/* Verified Google Reviews Box */}
            <div className="bg-white rounded-3xl p-6 border border-beige/70 shadow-sm text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-heading text-sm font-extrabold text-charcoal">
                    5.0 Google Reviews
                  </span>
                </div>
                <span className="text-[11px] font-bold text-softbrown">3 Reviews</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-cream/40 rounded-xl text-xs text-charcoal/80 border border-beige/40">
                  <p className="italic">“Got my female Persian kitten from them, she is healthy and perfect. Best cattery in Hyderabad!”</p>
                  <span className="block text-[10px] font-bold text-charcoal/50 mt-1.5">— Aditya Verma (5.0 ★)</span>
                </div>
                <div className="p-3 bg-cream/40 rounded-xl text-xs text-charcoal/80 border border-beige/40">
                  <p className="italic">“Healthy Persian kitten at a reasonable price. Shams Persians is highly professional.”</p>
                  <span className="block text-[10px] font-bold text-charcoal/50 mt-1.5">— Sowmya Reddy (5.0 ★)</span>
                </div>
              </div>
            </div>

            {/* Other Hyderabad Locations Quick Switcher */}
            <div className="bg-white rounded-3xl p-6 border border-beige/70 shadow-sm text-left">
              <h4 className="text-xs font-heading font-extrabold text-charcoal uppercase tracking-wider mb-3">
                Other Hyderabad Areas:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {HYDERABAD_LOCATIONS.filter((l) => l.slug !== location.slug).map((other) => (
                  <button
                    key={other.slug}
                    onClick={() => onSelectLocation(other.slug)}
                    className="text-[11px] font-medium bg-cream/60 hover:bg-peach/30 text-charcoal/80 px-2.5 py-1 rounded-lg border border-beige/50 transition-colors cursor-pointer"
                  >
                    {other.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
