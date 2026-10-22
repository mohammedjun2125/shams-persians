import { useState, useEffect } from "react";
import { REVIEWS_DATA, GOOGLE_HIGHLIGHTS, BUSINESS_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIdx) => (prevIdx + 1) % REVIEWS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? REVIEWS_DATA.length - 1 : prevIdx - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFFBF7] border-t border-beige/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-3">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-900 uppercase tracking-widest">
              5.0 Google Reviews • Cattery Hyderabad
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal tracking-tight">
            Loved By Cat Families Across Hyderabad
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            Every Persian and Himalayan kitten from Shams Persians is raised with genuine love and care. See verified feedback from adopters in Banjara Hills, Jubilee Hills, Secunderabad, and beyond.
          </p>
        </div>

        {/* Google Reviews Highlights Block */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-[#4285F4] text-white p-1 rounded-full font-heading text-xs font-black w-6 h-6 flex items-center justify-center">
              G
            </div>
            <h3 className="font-heading text-lg font-extrabold text-charcoal uppercase tracking-wider">
              Google Profile Reviews (5.0 ★ Rating)
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GOOGLE_HIGHLIGHTS.map((hl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-beige/60 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xs text-left"
                id={`google-highlight-${index}`}
              >
                <div className="absolute top-4 right-4 text-peach/30 select-none">
                  <Quote className="h-10 w-10 stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex gap-1 mb-4 text-[#FABB05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-charcoal/90 leading-relaxed italic pr-4">
                    "{hl.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-beige/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-bold text-charcoal/80 font-heading">
                      {hl.author}
                    </span>
                  </div>
                  <span className="text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">
                    Google Review
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto bg-[#FDF9F4] border border-beige/70 rounded-[40px] p-6 sm:p-10 md:p-12 shadow-md relative text-left">
          <div className="text-softbrown/10 absolute top-6 left-6 pointer-events-none select-none">
            <Quote className="h-28 w-28 fill-current" />
          </div>

          <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full relative z-10"
                id={`testimonial-slide-${currentIndex}`}
              >
                <div className="flex gap-1 mb-4 text-yellow-500 justify-start">
                  {[...Array(REVIEWS_DATA[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-charcoal font-medium leading-relaxed italic font-sans">
                  "{REVIEWS_DATA[currentIndex].text}"
                </p>

                <div className="mt-8 flex items-center gap-3">
                  {REVIEWS_DATA[currentIndex].avatar && (
                    <img
                      src={REVIEWS_DATA[currentIndex].avatar}
                      alt={REVIEWS_DATA[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-softbrown"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <h4 className="font-heading text-sm font-extrabold text-charcoal">
                      {REVIEWS_DATA[currentIndex].name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-charcoal/50 font-bold uppercase tracking-wider mt-0.5">
                      Verified Google Reviewer • {REVIEWS_DATA[currentIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex justify-between items-center relative z-20">
            <div className="flex gap-2">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-softbrown" : "w-2.5 bg-beige hover:bg-softbrown/45"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-beige/25 border border-beige/80 text-charcoal p-2 rounded-full shadow-xs transition-colors cursor-pointer"
                aria-label="Previous Review"
                id="testimonial-prev-arrow"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white hover:bg-beige/25 border border-beige/80 text-charcoal p-2 rounded-full shadow-xs transition-colors cursor-pointer"
                aria-label="Next Review"
                id="testimonial-next-arrow"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
