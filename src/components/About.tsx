import { motion } from "motion/react";
import { ShieldCheck, HeartPulse, Sparkles, Star } from "lucide-react";
import catteryRoom from "../assets/images/cattery_room_1780744957819.png";
import { BUSINESS_INFO } from "../data";

export default function About() {
  const points = [
    {
      title: "All Type of Persian Cats",
      desc: "Doll face, extreme punch face, semi-punch, and Himalayan points in rare coat shades.",
      icon: Sparkles
    },
    {
      title: "Pedigree & Health Guarded",
      desc: "Carefully monitored lineage with consistent de-worming, primary vaccinations, and vet paperwork.",
      icon: HeartPulse
    },
    {
      title: "Continuous Post-Adoption Care",
      desc: "Lifelong feeding recipes, litter training, grooming tips, and vet guidance on WhatsApp.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image Presentation */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[500px]"
            >
              <div className="absolute inset-4 border-2 border-[#FFD8BE]/50 rounded-[28px] -z-10 translate-x-3 translate-y-3" />
              
              <div className="rounded-[28px] overflow-hidden shadow-sm border border-[#FFD8BE]/75">
                <img
                  src={catteryRoom}
                  alt="Shams Persians clean, cage-free playroom in Hyderabad"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Google Rating Card */}
              <div className="absolute -bottom-6 -right-6 md:right-4 bg-white border border-beige/80 p-5 rounded-[24px] shadow-lg max-w-[210px] text-center">
                <div className="flex items-center justify-center gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-heading font-black text-lg text-charcoal">5.0</span>
                </div>
                <p className="font-heading text-xs font-black text-softbrown mt-1 uppercase tracking-wider">
                  Google Verified
                </p>
                <p className="text-[10px] text-charcoal/70 mt-0.5 font-medium leading-tight">
                  3 Google Reviews • Cattery Hyderabad
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - About details */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
              id="about-content"
            >
              <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3.5 py-1.5 rounded-full inline-block">
                About Our Cattery
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-3 tracking-tight">
                About {BUSINESS_INFO.name}
              </h2>
              <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3" />
              
              <p className="mt-5 text-base sm:text-lg font-heading font-bold text-softbrown italic">
                “{BUSINESS_INFO.tagline}”
              </p>

              <p className="mt-3 text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans font-medium">
                Shams Persians is a dedicated, 5.0 Google-rated cattery in Hyderabad providing purebred, healthy, and affectionate Persian and Himalayan kittens. We prioritize clinical-grade hygiene, family-style cage-free rearing, and transparent breeder trust.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                Whether you live in Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, Gachibowli, or Kukatpally, we offer safe, air-conditioned vehicle delivery directly to your home so your new furry family member arrives stress-free.
              </p>

              {/* Custom Points Block */}
              <div className="mt-7 p-6 bg-white border border-[#FFD8BE]/70 rounded-[24px] shadow-xs space-y-4">
                {points.map((p, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start" id={`about-bullet-${idx}`}>
                    <div className="bg-peach/30 text-softbrown p-2.5 rounded-xl mt-0.5 shrink-0">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-extrabold text-charcoal">{p.title}</h4>
                      <p className="text-xs text-charcoal/65 mt-0.5 leading-normal">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
