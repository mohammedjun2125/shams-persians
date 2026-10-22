import { useState, useEffect } from "react";
import { Cat, Menu, X, Phone, Star, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
  onNavClick: (pageId: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Available Kittens", id: "kittens" },
    { label: "Hyderabad Locations", id: "locations" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "5.0 Reviews", id: "reviews" },
    { label: "FAQs", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    if (id === "booking-section" || id === "booking") {
      onNavClick("contact");
    } else {
      onNavClick(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-beige/60"
            : "bg-cream/80 backdrop-blur-sm py-4 border-b border-beige/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleItemClick("home")}
              id="header-logo"
            >
              <div className="bg-softbrown text-cream p-2.5 rounded-2xl transition-transform group-hover:scale-105 shadow-sm">
                <Cat className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="font-heading text-xl font-black tracking-tight text-charcoal flex items-center gap-1.5">
                  Shams <span className="text-softbrown">Persians</span>
                </span>
                <p className="text-[10px] font-bold text-charcoal/65 tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="h-2.5 w-2.5 text-softbrown" />
                  <span>Hyderabad</span>
                  <span className="text-amber-500 flex items-center ml-1">
                    <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400 inline" /> 5.0
                  </span>
                  <span className="text-emerald-700 font-extrabold ml-1 hidden sm:inline">• 24/7 Open &amp; Delivery</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`font-heading text-xs font-bold tracking-wide transition-colors py-1 relative cursor-pointer ${
                    activeSection === item.id
                      ? "text-softbrown font-black"
                      : "text-charcoal/80 hover:text-softbrown"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-softbrown rounded-full"
                    />
                  )}
                </button>
              ))}

              <a
                href="tel:07842496805"
                className="bg-softbrown text-cream px-4 py-2.5 rounded-full font-heading text-xs font-bold shadow-md transition-all duration-300 hover:bg-softbrown/90 hover:shadow-lg active:scale-95 flex items-center gap-1.5 cursor-pointer ml-1"
                id="header-cta"
              >
                <Phone className="h-3.5 w-3.5" />
                078424 96805
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="xl:hidden flex items-center gap-2">
              <a
                href="tel:07842496805"
                className="bg-softbrown text-cream px-3 py-1.5 rounded-full font-heading text-[11px] font-bold flex items-center gap-1"
              >
                <Phone className="h-3 w-3" />
                Call
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-charcoal hover:bg-beige/40 focus:outline-none transition-colors cursor-pointer"
                id="mobile-menu-toggle"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="xl:hidden fixed inset-0 top-[68px] bg-charcoal/20 backdrop-blur-xs z-30"
              />

              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="xl:hidden absolute left-4 right-4 top-[calc(100%+8px)] bg-cream/95 backdrop-blur-xl border border-beige/70 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-40 max-h-[80vh] overflow-y-auto"
              >
                <div className="px-5 pt-3 pb-6 space-y-1.5 text-left">
                  <div className="text-[10px] font-bold text-softbrown/65 uppercase tracking-widest px-4 pt-1 pb-2 border-b border-beige/40 flex justify-between items-center">
                    <span>Shams Persians Menu</span>
                    <span className="text-amber-500 font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400" /> 5.0 Google Reviews
                    </span>
                  </div>

                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-2xl font-heading text-sm font-semibold transition-all cursor-pointer ${
                        activeSection === item.id
                          ? "bg-softbrown text-cream font-bold shadow-md shadow-softbrown/10"
                          : "text-charcoal/80 hover:bg-beige/40"
                      }`}
                      id={`mobile-nav-item-${item.id}`}
                    >
                      {item.id === "home" && "🏡 "}
                      {item.id === "kittens" && "🐾 "}
                      {item.id === "locations" && "📍 "}
                      {item.id === "about" && "✨ "}
                      {item.id === "services" && "🧳 "}
                      {item.id === "gallery" && "🖼️ "}
                      {item.id === "reviews" && "⭐️ "}
                      {item.id === "faq" && "❓ "}
                      {item.id === "contact" && "📞 "}
                      {item.label}
                    </button>
                  ))}

                  <div className="pt-3 border-t border-beige/40 flex flex-col gap-2">
                    <a
                      href="tel:07842496805"
                      className="w-full bg-softbrown text-cream py-3 rounded-full font-heading text-xs font-black shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call 078424 96805
                    </a>
                    <a
                      href="https://wa.me/917842496805?text=Hello%20Shams%20Persians,%20I%20am%20interested%20in%20a%20Persian%20cat%20in%20Hyderabad."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] text-white py-3 rounded-full font-heading text-xs font-black shadow-md text-center flex items-center justify-center gap-2"
                    >
                      WhatsApp Inquiries
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
