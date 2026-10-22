import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  User,
  Mail,
  Sparkles,
  Star,
  Truck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_INFO } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "Banjara Hills",
    breed: "Doll Face Persian",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9\s+-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number (10+ digits)";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const getWhatsAppSubmitLink = () => {
    const textTemplate = `Hello Shams Persians,

I would like to inquire about adopting a Persian cat!

Full Name: ${formData.name}
Phone: ${formData.phone}
My Hyderabad Area: ${formData.area}
Persian Type Preference: ${formData.breed}
Message: ${formData.message}`;

    return `https://wa.me/917842496805?text=${encodeURIComponent(textTemplate)}`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      area: "Banjara Hills",
      breed: "Doll Face Persian",
      message: "",
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3.5 py-1.5 rounded-full inline-block">
            Official Business Profile &amp; Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-3 tracking-tight">
            Connect With Shams Persians
          </h2>
          <p className="text-sm text-charcoal/70 mt-2 font-medium">
            “All type of Persian cats available” • Fast home delivery across every neighborhood in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Google Business details */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Business Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-beige/70 shadow-sm space-y-6">
              
              {/* Google Verified Review Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-beige/40">
                <div>
                  <h3 className="font-heading text-lg font-black text-charcoal">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-softbrown font-bold tracking-wide uppercase mt-0.5">
                    {BUSINESS_INFO.category} • Hyderabad
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-right">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                  </div>
                  <span className="text-[10px] text-charcoal/60 font-semibold block">
                    3 Google Reviews
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <div className="bg-peach/20 p-3.5 rounded-2xl border border-peach/40">
                <p className="text-xs font-heading font-bold text-softbrown italic">
                  From Shams Persians: “All type of Persian cats available”
                </p>
              </div>

              {/* Location (Hyderabad Only - No Address) */}
              <div className="flex gap-4 items-start" id="contact-info-address">
                <div className="bg-peach text-softbrown p-3 rounded-2xl shrink-0 shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-extrabold text-charcoal uppercase tracking-wider">
                    Service Location
                  </h4>
                  <p className="text-sm font-extrabold text-charcoal mt-1">
                    Hyderabad, Telangana, India
                  </p>
                  <p className="text-xs text-charcoal/65 mt-0.5 leading-relaxed">
                    Doorstep pet delivery to all locations: Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, Gachibowli, Kukatpally, and surrounding areas.
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex gap-4 items-start" id="contact-info-phone">
                <div className="bg-beige text-softbrown p-3 rounded-2xl shrink-0 shadow-xs">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-extrabold text-charcoal uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </h4>
                  <p className="text-base font-black text-charcoal mt-1">
                    <a href="tel:07842496805" className="hover:text-softbrown transition-colors">
                      078424 96805
                    </a>
                  </p>
                  <p className="text-[11px] text-charcoal/50 mt-0.5">
                    Click to call or chat anytime on WhatsApp
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 items-start" id="contact-info-hours">
                <div className="bg-[#E6F4EA] text-green-700 p-3 rounded-2xl shrink-0 shadow-xs">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-heading text-xs font-extrabold text-charcoal uppercase tracking-wider">
                      Google Business Hours
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E6F4EA] text-green-800 border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Open 24 Hours
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-1.5 px-2.5 rounded-lg bg-[#E6F4EA]/40 border border-green-100 text-charcoal"
                      >
                        <span className="font-medium text-charcoal/90">{h.day}</span>
                        <span className="font-bold text-green-700 flex items-center gap-1">
                          <span className="text-[10px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-mono">24h</span>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2.5 p-2 bg-peach/20 border border-peach/40 rounded-xl flex items-center justify-between text-[11px] text-charcoal/80">
                    <span className="font-bold text-softbrown flex items-center gap-1">
                      <Truck className="h-3.5 w-3.5" /> 24/7 Safe Delivery:
                    </span>
                    <span className="font-semibold text-charcoal">All Hyderabad Neighborhoods</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Hyderabad Service Coverage Map */}
            <div className="rounded-3xl overflow-hidden border border-beige/70 shadow-sm bg-white relative">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Google Maps Hyderabad Coverage for Shams Persians"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.65487771746!2d78.36149487739502!3d17.412348714850785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717652758252!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 bg-white border-t border-beige/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-softbrown" />
                  <span className="text-xs font-bold text-charcoal">
                    Hyderabad-Wide Delivery Available
                  </span>
                </div>
                <a
                  href="https://wa.me/917842496805?text=Hello%20Shams%20Persians,%20I%20would%20like%20to%20know%20delivery%20details%20for%20Hyderabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-heading font-bold text-softbrown hover:underline"
                >
                  Order via WhatsApp →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[28px] border border-beige/70 shadow-sm text-left w-full relative overflow-hidden"
            id="booking-section"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="pb-2 border-b border-beige/40">
                    <h3 className="text-xl font-heading font-extrabold text-charcoal flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-softbrown" />
                      Inquire or Reserve a Kitten
                    </h3>
                    <p className="text-xs text-charcoal/60 mt-1">
                      Tell us your preferred Persian type and Hyderabad locality. We will respond instantly with live pictures and details.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammed Junaid"
                        className={`w-full bg-cream/30 border p-3.5 pl-10 rounded-xl text-xs sm:text-sm font-sans focus:outline-none transition-all ${
                          errors.name ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                        }`}
                        id="form-field-name"
                      />
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
                    </div>
                    {errors.name && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Phone & Area Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 078424 96805"
                          className={`w-full bg-cream/30 border p-3.5 pl-10 rounded-xl text-xs sm:text-sm font-sans focus:outline-none transition-all ${
                            errors.phone ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                          }`}
                          id="form-field-phone"
                        />
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.phone}</p>}
                    </div>

                    {/* Hyderabad Locality */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">
                        Your Hyderabad Locality
                      </label>
                      <div className="relative">
                        <select
                          name="area"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full bg-cream/30 border border-beige/70 p-3.5 pl-10 rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:border-softbrown appearance-none cursor-pointer"
                          id="form-field-area"
                        >
                          <option value="Banjara Hills">Banjara Hills</option>
                          <option value="Jubilee Hills">Jubilee Hills</option>
                          <option value="Secunderabad">Secunderabad</option>
                          <option value="Begumpet">Begumpet / Prakash Nagar</option>
                          <option value="Old City / Charminar">Old City / Charminar</option>
                          <option value="Gachibowli">Gachibowli / Financial District</option>
                          <option value="Hitec City / Madhapur">Hitec City / Madhapur</option>
                          <option value="Kondapur">Kondapur</option>
                          <option value="Kukatpally / KPHB">Kukatpally / KPHB</option>
                          <option value="Mehdipatnam / Tolichowki">Mehdipatnam / Tolichowki</option>
                          <option value="Ameerpet / SR Nagar">Ameerpet / SR Nagar</option>
                          <option value="Dilsukhnagar / LB Nagar">Dilsukhnagar / LB Nagar</option>
                          <option value="Uppal / Tarnaka">Uppal / Tarnaka</option>
                          <option value="Manikonda">Manikonda</option>
                          <option value="Miyapur">Miyapur</option>
                          <option value="Kompally">Kompally / Alwal</option>
                          <option value="Other Area in Hyderabad">Other Area in Hyderabad</option>
                        </select>
                        <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
                        <div className="absolute right-4 top-4.5 pointer-events-none text-charcoal/40">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Persian Type Preference */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">
                      Persian Cat Variety (All Types Available)
                    </label>
                    <div className="relative">
                      <select
                        name="breed"
                        value={formData.breed}
                        onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                        className="w-full bg-cream/30 border border-beige/70 p-3.5 rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:border-softbrown appearance-none cursor-pointer"
                        id="form-field-breed"
                      >
                        <option value="Doll Face Persian">Traditional Doll Face Persian</option>
                        <option value="Punch Face Persian">Extreme Punch Face Persian (Flat Face)</option>
                        <option value="Semi-Punch Persian">Semi-Punch Face Persian</option>
                        <option value="Pure White Persian">Pure Snow White Persian Kitten</option>
                        <option value="Himalayan Seal Point">Himalayan Point (Blue Eyes)</option>
                        <option value="Calico Persian">Calico Tri-Color Persian</option>
                        <option value="Golden / Silver Shaded">Golden / Silver Shaded Persian</option>
                        <option value="Any Available Healthy Kitten">Any Available Healthy Kitten</option>
                      </select>
                      <div className="absolute right-4 top-4.5 pointer-events-none text-charcoal/40">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">
                      Message / Special Preferences
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Inquiring about a female white doll face kitten with delivery to Banjara Hills..."
                      className={`w-full bg-cream/30 border p-3.5 rounded-xl text-xs sm:text-sm font-sans focus:outline-none transition-all ${
                        errors.message ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                      }`}
                      id="form-field-message"
                    />
                    {errors.message && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-softbrown text-cream py-4 rounded-xl font-heading text-sm font-bold tracking-wide shadow-md hover:bg-softbrown/95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="form-submit-btn"
                  >
                    <Send className="h-4 w-4" />
                    Submit Inquiry to Shams Persians
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center flex flex-col items-center justify-center"
                  id="form-success-alert"
                >
                  <div className="bg-[#E6F4EA] text-green-700 p-4 rounded-full mb-5">
                    <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/65 mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-extrabold text-charcoal">{formData.name}</span>. We will connect with available kitten photos for {formData.area}.
                  </p>

                  <div className="mt-6 p-4 bg-cream/60 border border-beige/60 rounded-2xl max-w-md text-left text-xs text-charcoal/80 space-y-1.5 leading-normal w-full">
                    <p className="font-bold border-b border-beige/40 pb-1.5 uppercase font-heading text-[10px] tracking-wider text-softbrown">
                      Inquiry Details
                    </p>
                    <p><span className="font-bold text-charcoal">Variety:</span> {formData.breed}</p>
                    <p><span className="font-bold text-charcoal">Location:</span> {formData.area}, Hyderabad</p>
                    <p><span className="font-bold text-charcoal">Phone:</span> {formData.phone}</p>
                    <p><span className="font-bold text-charcoal">Notes:</span> {formData.message}</p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-white hover:bg-beige/25 text-charcoal border border-beige py-3 rounded-full font-heading text-xs font-semibold tracking-wide transition-all cursor-pointer"
                    >
                      New Inquiry
                    </button>
                    <a
                      href={getWhatsAppSubmitLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] text-white hover:bg-[#20ba59] py-3 rounded-full font-heading text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="h-4 w-4 fill-current" />
                      Send to WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
