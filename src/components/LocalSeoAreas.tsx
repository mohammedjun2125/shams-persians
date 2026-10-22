import React, { useState } from "react";
import { HYDERABAD_LOCATIONS } from "../locationsData";
import { MapPin, Clock, ArrowRight, Sparkles, Star, Search, ShieldCheck, Truck } from "lucide-react";

interface LocalSeoAreasProps {
  onSelectLocation: (slug: string) => void;
}

export default function LocalSeoAreas({ onSelectLocation }: LocalSeoAreasProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const regions = ["All", "Central Hyderabad", "West Hyderabad", "Twin Cities / Secunderabad", "South Hyderabad", "East Hyderabad", "North Hyderabad"];

  const filteredLocations = HYDERABAD_LOCATIONS.filter((loc) => {
    const matchesRegion = selectedRegion === "All" || loc.region.toLowerCase().includes(selectedRegion.toLowerCase());
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.popularSearchKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="hyderabad-locations" className="py-20 bg-[#FFFBF7] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-peach/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-beige/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-peach/30 border border-peach/50 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-softbrown" />
            <span className="text-xs font-bold text-softbrown uppercase tracking-wider">
              Serving All Across Hyderabad • Open 24 Hours
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-charcoal tracking-tight">
            Persian Cats Near You in <span className="text-softbrown">Hyderabad</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
            Shams Persians provides <strong>24/7 doorstep pet delivery</strong> to every neighborhood across Hyderabad. Browse your locality below to view dedicated popular search keywords, delivery timelines, and available Persian kittens.
          </p>

          {/* Quick Business Trust Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium text-charcoal/80">
            <div className="bg-white px-4 py-2 rounded-full border border-beige/60 shadow-xs flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-amber-600">5.0 (3 Google Reviews)</span>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-xs flex items-center gap-2 text-emerald-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open 24 Hours • 7 Days</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-beige/60 shadow-xs flex items-center gap-1.5 text-softbrown font-semibold">
              <Clock className="h-3.5 w-3.5" />
              <span>24/7 Doorstep Delivery</span>
            </div>
            <div className="bg-peach/30 px-4 py-2 rounded-full border border-peach/50 shadow-xs text-charcoal font-semibold italic">
              “All type of Persian cats available”
            </div>
          </div>
        </div>

        {/* Search and Region Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-beige/60 shadow-sm">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search area (e.g. Banjara Hills, Begumpet)..."
              className="w-full bg-cream/30 border border-beige/50 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-softbrown"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? "bg-softbrown text-cream shadow-sm"
                    : "bg-cream/50 text-charcoal/70 hover:bg-beige/40"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.slug}
              onClick={() => onSelectLocation(loc.slug)}
              className="group bg-white rounded-2xl p-6 border border-beige/60 shadow-sm hover:shadow-md hover:border-softbrown/40 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-peach/10 rounded-bl-full pointer-events-none group-hover:bg-peach/25 transition-all" />

              <div>
                {/* Region Tag & 24/7 Delivery Badge */}
                <div className="flex items-center justify-between text-[11px] font-semibold text-softbrown mb-2.5">
                  <span className="uppercase tracking-wider">{loc.region}</span>
                  <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-100">
                    <Truck className="h-3 w-3" /> 24/7 Delivery
                  </span>
                </div>

                {/* Location Title */}
                <h3 className="font-heading text-lg font-extrabold text-charcoal group-hover:text-softbrown transition-colors flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-softbrown shrink-0" />
                  {loc.name}
                </h3>

                <p className="text-xs text-charcoal/65 mt-2 line-clamp-2 leading-relaxed">
                  {loc.overview}
                </p>

                {/* Top Search Keywords Badge */}
                <div className="mt-4 pt-3 border-t border-beige/40">
                  <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider mb-1.5">
                    Popular SEO Searches:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {loc.popularSearchKeywords.slice(0, 2).map((kw, i) => (
                      <span
                        key={i}
                        className="bg-cream text-[10px] text-charcoal/75 px-2 py-0.5 rounded-md border border-beige/40 font-mono"
                      >
                        #{kw}
                      </span>
                    ))}
                    {loc.popularSearchKeywords.length > 2 && (
                      <span className="text-[10px] text-softbrown font-bold self-center">
                        +{loc.popularSearchKeywords.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-heading font-bold text-softbrown group-hover:text-charcoal transition-colors">
                <span>Explore {loc.name} SEO Page</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-beige/60">
            <p className="text-charcoal/60 text-sm">No locations matched "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="mt-3 text-xs font-bold text-softbrown underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Global SEO Footer Banner */}
        <div className="mt-14 bg-gradient-to-r from-softbrown to-[#8b654a] rounded-3xl p-8 text-cream flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="h-5 w-5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
                All Over Hyderabad Pet Delivery
              </span>
            </div>
            <h3 className="text-2xl font-heading font-bold">
              Looking for Persian Cats Near You in Any Hyderabad Area?
            </h3>
            <p className="text-xs sm:text-sm text-cream/80 mt-2">
              Shams Persians is Hyderabad's top-rated 5.0 Google Cattery. We provide cage-free Persian and Himalayan kittens with temperature-regulated home delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:07842496805"
              className="bg-white text-charcoal hover:bg-cream px-6 py-3 rounded-full font-heading text-xs font-bold tracking-wide transition-all text-center"
            >
              Call 078424 96805
            </a>
            <a
              href="https://wa.me/917842496805?text=Hello%20Shams%20Persians,%20I%20am%20looking%20for%20Persian%20cats%20near%20me%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba59] px-6 py-3 rounded-full font-heading text-xs font-bold tracking-wide transition-all shadow-md text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
