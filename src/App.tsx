import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import AvailableKittens from "./components/AvailableKittens";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ReviewSection from "./components/ReviewSection";
import HowItWorks from "./components/HowItWorks";
import FaqSection from "./components/FaqSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButtons from "./components/WhatsAppButtons";
import Loader from "./components/Loader";
import LocalSeoAreas from "./components/LocalSeoAreas";
import LocationDetailPage from "./components/LocationDetailPage";
import { HYDERABAD_LOCATIONS } from "./locationsData";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedLocationSlug, setSelectedLocationSlug] = useState<string>("banjara-hills");
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [transitionLoading, setTransitionLoading] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic SEO Title and Metadata updates for Hyderabad search rankings
  useEffect(() => {
    let title = "Shams Persians Hyderabad | Persian Cats Near Me | Cattery 5.0★";
    let desc =
      "Shams Persians Hyderabad: All type of Persian cats available. 5.0 Google rated cattery. Buy healthy doll face and punch face Persian kittens with safe home delivery in Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Gachibowli, Old City, and all over Hyderabad. Call 078424 96805.";
    let keywords =
      "persian cats near me, persian cats hyderabad, shams persians, buy persian cat hyderabad, persian kittens for sale banjara hills, jubilee hills persian cats, secunderabad cat cattery, begumpet persian kittens, old city persian cat, doll face persian kitten hyderabad, punch face persian cat price hyderabad, cattery hyderabad";

    switch (currentPage) {
      case "home":
        title = "Shams Persians Hyderabad | Persian Cats Near Me | Cattery 5.0★";
        desc =
          "All type of Persian cats available at Shams Persians. 5.0 Google rated cattery. Doll face and punch face kittens with safe home delivery to Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, and all Hyderabad areas.";
        break;
      case "kittens":
        title = "All Type of Persian Cats Available in Hyderabad | Shams Persians";
        desc =
          "Browse gorgeous, active available Persian and Himalayan kittens ready for adoption in Hyderabad. Pure white doll face, golden punch face, and seal point Himalayans.";
        keywords =
          "available Persian kittens, doll face persian kitten hyderabad, punch face persian cat price hyderabad, buy white persian cat hyderabad, himalayan kitten price";
        break;
      case "locations":
        title = "Persian Cats Near Me in Hyderabad | All Areas & Neighborhoods | Shams Persians";
        desc =
          "Looking for Persian cats near you in Hyderabad? Shams Persians delivers to Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, Gachibowli, Kukatpally, and all 16 locations.";
        keywords =
          "persian cats near me, persian cat delivery hyderabad, cattery banjara hills, jubilee hills cat breeders, secunderabad cat cattery, begumpet persian kittens";
        break;
      case "location-detail": {
        const loc = HYDERABAD_LOCATIONS.find((l) => l.slug === selectedLocationSlug);
        if (loc) {
          title = loc.metaTitle;
          desc = loc.metaDescription;
          keywords = loc.popularSearchKeywords.join(", ");
        } else {
          title = "Persian Cats Near Me in Hyderabad | Shams Persians";
        }
        break;
      }
      case "about":
        title = "About Shams Persians Hyderabad | 5.0 Google Rated Cattery";
        desc =
          "Learn about Shams Persians in Hyderabad. 'All type of Persian cats available'. 5.0 Google review rating, cage-free environment, and dedicated customer support.";
        keywords =
          "about Shams Persians, cat breeders Hyderabad, ethical cattery Hyderabad, cage free persian cats, 5.0 google rated cattery";
        break;
      case "services":
        title = "Persian Cat Delivery & Care Services | Shams Persians Hyderabad";
        desc =
          "Explore our safe air-conditioned home delivery, comprehensive vaccination guidance, and lifetime post-adoption consultation across all Hyderabad areas.";
        keywords =
          "persian cat delivery Hyderabad, cat vaccinations Telangana, kitten home delivery banjara hills, pet transportation hyderabad";
        break;
      case "gallery":
        title = "Persian Kittens Photo Gallery | Real Photos - Shams Persians Hyderabad";
        desc =
          "Discover our gallery of beautiful Persian and Himalayan cats, clean cage-free play haven, and real happy clients across Hyderabad.";
        keywords =
          "Persian kitten photos Hyderabad, Himalayan kittens gallery, real cat pictures cattery, happy pet owners Hyderabad";
        break;
      case "reviews":
        title = "5.0 Google Reviews & Testimonials | Shams Persians Hyderabad";
        desc =
          "Read authentic 5.0 Google reviews from customers who adopted purebred Persian companions from Shams Persians in Hyderabad.";
        keywords =
          "Shams Persians reviews, 5.0 google reviews cattery, cat buyer testimonials hyderabad, verified cattery ratings";
        break;
      case "faq":
        title = "Persian Cat FAQs & Care Guide | Shams Persians Hyderabad";
        desc =
          "Have questions about Persian cat types, prices, grooming, food, vaccination schedules, or Hyderabad home delivery? Read our comprehensive FAQ.";
        keywords =
          "Persian cat food guide, kitten vaccines timeline, persian cat price hyderabad, how to adopt pet Hyderabad";
        break;
      case "contact":
        title = "Contact Shams Persians Hyderabad | Phone 078424 96805 | Cattery";
        desc =
          "Connect with Shams Persians in Hyderabad. Call or WhatsApp 078424 96805 for instant photos, live video inspection, and safe doorstep delivery.";
        keywords =
          "contact Shams Persians, WhatsApp 07842496805, buy persian cat hyderabad, adopt kitten banjara hills";
        break;
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", desc);
      document.head.appendChild(metaDesc);
    }

    // Update Meta Keywords
    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (metaKeys) {
      metaKeys.setAttribute("content", keywords);
    } else {
      metaKeys = document.createElement("meta");
      metaKeys.setAttribute("name", "keywords");
      metaKeys.setAttribute("content", keywords);
      document.head.appendChild(metaKeys);
    }
  }, [currentPage, selectedLocationSlug]);

  const handlePageChange = (pageId: string) => {
    if (pageId === currentPage) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        window.scrollTo(0, 0);
      }
      return;
    }

    setTransitionLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentPage(pageId);
      setTransitionLoading(false);
    }, 200);
  };

  const handleSelectLocation = (slug: string) => {
    setSelectedLocationSlug(slug);
    setTransitionLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentPage("location-detail");
      setTransitionLoading(false);
    }, 200);
  };

  return (
    <div className="relative min-h-screen bg-cream select-none antialiased text-charcoal">
      {/* Brand Loader */}
      <AnimatePresence>
        {initialLoading && <Loader key="initial-loader" />}
        {transitionLoading && <Loader key="transition-loader" />}
      </AnimatePresence>

      {/* Sticky Header */}
      <Header activeSection={currentPage} onNavClick={handlePageChange} />

      {/* Main View Renderer */}
      <main id="main-content" className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === "location-detail" ? `loc-${selectedLocationSlug}` : currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-[75vh]"
          >
            {/* HOME PAGE VIEW */}
            {currentPage === "home" && (
              <>
                <Hero
                  onExploreClick={() => handlePageChange("kittens")}
                  onLocationsClick={() => handlePageChange("locations")}
                />
                <TrustBar />
                <AvailableKittens />
                {/* Hyderabad Locations Grid on Home Page */}
                <LocalSeoAreas onSelectLocation={handleSelectLocation} />
                <WhyChooseUs />
                <About />
                <ReviewSection />
                <Gallery />
                <ContactForm />
              </>
            )}

            {/* KITTENS PAGE VIEW */}
            {currentPage === "kittens" && (
              <>
                <AvailableKittens />
                <LocalSeoAreas onSelectLocation={handleSelectLocation} />
              </>
            )}

            {/* HYDERABAD LOCATIONS HUB PAGE VIEW */}
            {currentPage === "locations" && (
              <>
                <LocalSeoAreas onSelectLocation={handleSelectLocation} />
              </>
            )}

            {/* DEDICATED LOCATION SEO PAGE VIEW */}
            {currentPage === "location-detail" && (
              <LocationDetailPage
                locationSlug={selectedLocationSlug}
                onBack={() => handlePageChange("locations")}
                onSelectLocation={handleSelectLocation}
                onNavigateHome={() => handlePageChange("home")}
              />
            )}

            {/* ABOUT PAGE VIEW */}
            {currentPage === "about" && (
              <>
                <About />
                <TrustBar />
                <WhyChooseUs />
                <HowItWorks />
              </>
            )}

            {/* SERVICES PAGE VIEW */}
            {currentPage === "services" && (
              <>
                <Services />
                <TrustBar />
                <LocalSeoAreas onSelectLocation={handleSelectLocation} />
              </>
            )}

            {/* GALLERY PAGE VIEW */}
            {currentPage === "gallery" && (
              <>
                <Gallery />
              </>
            )}

            {/* REVIEWS PAGE VIEW */}
            {currentPage === "reviews" && (
              <>
                <ReviewSection />
              </>
            )}

            {/* FAQ PAGE VIEW */}
            {currentPage === "faq" && (
              <>
                <FaqSection />
                <HowItWorks />
              </>
            )}

            {/* CONTACT PAGE VIEW */}
            {currentPage === "contact" && (
              <>
                <ContactForm />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handlePageChange} onSelectLocation={handleSelectLocation} />

      {/* Overlay WhatsApp & Mobile CTAs */}
      <WhatsAppButtons />
    </div>
  );
}
