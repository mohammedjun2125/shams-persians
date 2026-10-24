import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Star, Phone, MapPin } from "lucide-react";
import heroCat from "../assets/images/hero_cat_1780744909349.png";

interface HeroProps {
  onExploreClick: () => void;
  onLocationsClick?: () => void;
}

export default function Hero({ onExploreClick, onLocationsClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const WHATSAPP_LINK =
    "https://wa.me/917842496805?text=" +
    encodeURIComponent(
      "Hello Shams Persians,\n\nI am interested in adopting a Persian cat in Hyderabad.\n\nType/Breed: (Doll Face / Punch Face / Himalayan)\nPreferred Color: \nMy Location in Hyderabad: \n\nPlease share photos of currently available kittens."
    );

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 lg:pt-28 pb-12 overflow-hidden bg-gradient-to-b from-cream via-cream to-beige/30"
    >
      {/* Floating Paw Prints */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: [0.1, 0.25, 0.1], y: [-20, -120], x: [0, 15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-[8%] bottom-[15%] text-peach/40"
        >
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="14" r="3.5" />
            <circle cx="7" cy="8" r="2" />
            <circle cx="12" cy="5.5" r="2" />
            <circle cx="17" cy="8" r="2" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: [0.1, 0.2, 0.1], y: [-10, -140], x: [0, -25] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute right-[12%] top-[25%] text-peach/30"
        >
          <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="14" r="3.5" />
            <circle cx="7" cy="8" r="2" />
            <circle cx="12" cy="5.5" r="2" />
            <circle cx="17" cy="8" r="2" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gradient-to-br from-white to-[#FFD8BE]/30 border border-[#FFD8BE]/60 rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col justify-center text-left relative overflow-hidden order-2 lg:order-1"
            id="hero-card-left"
          >
            <div className="absolute right-[-20px] bottom-[-20px] w-[240px] h-[240px] bg-[#B68D6C] opacity-[0.06] rounded-full pointer-events-none" />

            <div className="relative z-10">
              {/* Google Verified Review Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 self-center lg:self-start bg-softbrown text-cream rounded-full font-heading text-[10px] font-extrabold uppercase tracking-widest mb-5 shadow-xs"
                id="hero-tag"
              >
                <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                ★ 5.0 GOOGLE RATED CATTERY • HYDERABAD
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-charcoal leading-[1.15]"
                id="hero-heading"
              >
                All Type of <br />
                <span className="text-[#B68D6C] relative inline-block">
                  Persian Cats Available
                  <svg
                    className="absolute left-0 bottom-0.5 w-full h-2 text-[#FFD8BE]/80 z-[-1]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,7 C30,2 70,2 100,7" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span> <br />
                at Shams Persians
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-5 text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-xl font-sans font-medium"
                id="hero-subheading"
              >
                Purebred Doll Face &amp; Punch Face Persian kittens, plus Himalayan points. Healthy, vaccinated, cage-free kittens with safe 24/7 doorstep delivery all over Hyderabad.
              </motion.p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5" id="hero-actions">
                <button
                  onClick={onExploreClick}
                  className="bg-[#B68D6C] text-white px-6 py-3.5 rounded-full font-heading text-xs sm:text-sm font-extrabold shadow-md transition-all duration-300 hover:bg-[#B68D6C]/95 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  🐾 View Available Kittens
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="no-referrer"
                  className="bg-[#25D366] text-white px-6 py-3.5 rounded-full font-heading text-xs sm:text-sm font-extrabold shadow-md transition-all duration-300 hover:bg-[#20ba59] hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-current text-white" />
                  WhatsApp 078424 96805
                </a>

                <a
                  href="tel:07842496805"
                  className="bg-white text-charcoal border border-beige/80 px-5 py-3.5 rounded-full font-heading text-xs sm:text-sm font-bold shadow-xs hover:bg-cream transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-softbrown" />
                  Direct Call
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-[#F5EBDD] border border-[#FFD8BE]/40 rounded-[28px] p-5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col justify-between relative order-1 lg:order-2"
          >
            <div className="relative w-full h-full min-h-[340px] overflow-hidden rounded-[20px] bg-white group border border-[#FFD8BE]/20 flex items-center">
              <img
                src={heroCat}
                alt="Shams Persians Pure White Persian Kitten"
                className="w-full h-full object-cover transition-transform duration-[300ms] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                style={{
                  transform: `scale(1.06) translateY(${Math.min(scrollY * 0.12, 45)}px)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-40 pointer-events-none" />

              {/* Floating Google Rating Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-xl border border-beige/80 px-3.5 py-2 rounded-xl flex items-center gap-2.5 z-20">
                <div className="bg-amber-100 p-1 rounded-lg">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-bold text-softbrown uppercase tracking-wider">GOOGLE PROFILE</p>
                  <p className="text-xs font-black text-charcoal">5.0 (3 Reviews)</p>
                </div>
              </div>

              {/* Floating Delivery Pill */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm shadow-xl border border-beige/80 px-3.5 py-2 rounded-xl flex items-center gap-2.5 z-20">
                <span className="text-xl">🏡</span>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-bold text-softbrown uppercase tracking-wider">SAFE DELIVERY</p>
                  <p className="text-xs font-black text-charcoal">All Hyderabad</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
