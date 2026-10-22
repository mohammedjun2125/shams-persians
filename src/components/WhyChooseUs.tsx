import { motion } from "motion/react";
import { Heart, Syringe, Truck, ShieldCheck, Sparkles, BookOpen, CircleDollarSign, PhoneCall, Star } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "All Type of Persian Cats",
      desc: "Doll face, punch face, semi-punch, and blue-eyed Himalayan points in snow white, golden, calico, and silver shades.",
      icon: Sparkles,
      color: "bg-peach"
    },
    {
      title: "5.0 Google Rated Cattery",
      desc: "100% 5.0 rating on Google Reviews from delighted pet owners across Hyderabad.",
      icon: Star,
      color: "bg-amber-100 text-amber-700"
    },
    {
      title: "24/7 All-Hyderabad Doorstep Delivery",
      desc: "Safe 24-hour temperature-regulated pet delivery to Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, and all areas.",
      icon: Truck,
      color: "bg-[#E8F0FE]"
    },
    {
      title: "100% Healthy & Vaccinated",
      desc: "Every kitten undergoes veterinary checks, routine de-worming, and primary immunizations with official health records.",
      icon: ShieldCheck,
      color: "bg-[#E6F4EA]"
    },
    {
      title: "Cage-Free & Socialized",
      desc: "Raised inside clean, domestic spaces with constant human cuddles so they grow up peaceful and docile.",
      icon: Heart,
      color: "bg-[#FCE8E6]"
    },
    {
      title: "Cat Care Manual & Diet Advice",
      desc: "Complete welcome guidelines on kitten kibbles, litter toilet training, scratching posts, and grooming tips.",
      icon: BookOpen,
      color: "bg-peach/30"
    },
    {
      title: "Affordable Breeder Pricing",
      desc: "Genuine pedigree lineage Persian kittens at honest prices with no hidden charges.",
      icon: CircleDollarSign,
      color: "bg-beige/40"
    },
    {
      title: "24-Hour WhatsApp Guidance",
      desc: "Instant post-adoption care. Direct WhatsApp support at 078424 96805 for diet, vaccine, and health queries.",
      icon: PhoneCall,
      color: "bg-[#E6F4EA]"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFBF7] border-y border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3.5 py-1.5 rounded-full inline-block">
            Why Pet Parents Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            Why Choose Shams Persians?
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            We raise kitten companions with pristine healthcare, social discipline, and lifelong guidance to ensure your adoption experience is pure bliss.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-6 rounded-[24px] text-left flex flex-col justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all border group ${
                  isFeatured
                    ? "lg:col-span-2 bg-gradient-to-br from-white to-[#FFD8BE]/30 border-[#FFD8BE]"
                    : "bg-white border-[#FFD8BE]/65"
                }`}
                id={`why-card-${index}`}
              >
                <div>
                  <div className={`p-3 rounded-xl inline-block ${point.color} text-softbrown mb-4 group-hover:scale-110 transition-transform`}>
                    <point.icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="font-heading text-base font-extrabold text-[#333333]">
                    {point.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-2.5 leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
