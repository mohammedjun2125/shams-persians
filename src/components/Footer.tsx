import { Cat, Heart, Phone, MapPin, Star, Clock } from "lucide-react";
import { HYDERABAD_LOCATIONS } from "../locationsData";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onSelectLocation?: (slug: string) => void;
}

export default function Footer({ onNavClick, onSelectLocation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-[#F5EBDD] pt-16 pb-24 md:pb-12 text-left" id="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#F5EBDD]/10">
          
          {/* Column 1: Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavClick("home")}>
              <div className="bg-softbrown text-[#FFF8F0] p-2 rounded-2xl">
                <Cat className="h-5 w-5" />
              </div>
              <span className="font-heading text-xl font-black text-[#FFF8F0]">
                Shams <span className="text-[#B68D6C]">Persians</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F5EBDD]/70 leading-relaxed font-sans">
              “All type of Persian cats available”. Top-rated 5.0 Google Cattery providing purebred, healthy, cage-free Persian and Himalayan kittens with temperature-regulated home delivery across all of Hyderabad.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full w-fit">
              <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              <span>5.0 Google Rating (3 Reviews)</span>
              <span className="text-white/40">•</span>
              <span className="text-[#F5EBDD]/80">Cattery</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#FFF8F0] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#F5EBDD]/70">
              <button onClick={() => onNavClick("home")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">Home</button>
              <button onClick={() => onNavClick("kittens")} className="hover:text-[#B68D6C] text-left transition-colors font-semibold text-[#B68D6C] cursor-pointer">Available Kittens</button>
              <button onClick={() => onNavClick("locations")} className="hover:text-[#B68D6C] text-left transition-colors font-bold text-amber-300 cursor-pointer">Hyderabad Areas</button>
              <button onClick={() => onNavClick("about")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">About Us</button>
              <button onClick={() => onNavClick("services")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">Services</button>
              <button onClick={() => onNavClick("reviews")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">5.0 Reviews</button>
              <button onClick={() => onNavClick("gallery")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">Gallery</button>
              <button onClick={() => onNavClick("faq")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">FAQs</button>
              <button onClick={() => onNavClick("contact")} className="hover:text-[#B68D6C] text-left transition-colors cursor-pointer">Contact</button>
            </div>
          </div>

          {/* Column 3: Contact coordinates */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#FFF8F0] uppercase tracking-wider">
              Business Profile &amp; Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F5EBDD]/70">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-[#B68D6C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#FFF8F0]">Hyderabad, Telangana, India</p>
                  <p className="text-[11px] text-[#F5EBDD]/50 mt-0.5">
                    Safe home delivery across all locations in Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-[#B68D6C] shrink-0" />
                <a href="tel:07842496805" className="hover:text-[#B68D6C] transition-colors font-bold text-[#FFF8F0]">
                  Phone: 078424 96805 (WhatsApp Available)
                </a>
              </div>

              <div className="flex gap-2.5 items-start">
                <Clock className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-green-300">Open 24 Hours • 7 Days a Week</p>
                  <p className="text-[#F5EBDD]/70 text-[11px]">24/7 Safe Doorstep Delivery Across All Hyderabad Areas</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Popular Hyderabad SEO Location Links Grid */}
        <div className="py-6 border-b border-[#F5EBDD]/10">
          <p className="text-[11px] font-heading font-extrabold text-[#FFF8F0] uppercase tracking-wider mb-2.5">
            Persian Cats Near Me – Hyderabad Locations:
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-[#F5EBDD]/60">
            {HYDERABAD_LOCATIONS.map((loc) => (
              <button
                key={loc.slug}
                onClick={() => {
                  if (onSelectLocation) {
                    onSelectLocation(loc.slug);
                  } else {
                    onNavClick("locations");
                  }
                }}
                className="hover:text-[#B68D6C] transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Persian Cats {loc.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom copyright coordinates */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F5EBDD]/40">
          <p>© {currentYear} Shams Persians Hyderabad. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Raised with <Heart className="h-3 w-3 fill-current text-red-500 text-xs inline-block animate-pulse-subtle" /> in Hyderabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}
