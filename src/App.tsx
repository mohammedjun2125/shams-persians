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

const CANONICAL_ORIGIN = "https://shamspersians.com";

function parseCurrentUrl(): { page: string; locationSlug: string } {
  if (typeof window === "undefined") {
    return { page: "home", locationSlug: "banjara-hills" };
  }

  const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, "");
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, "");
  const params = new URLSearchParams(window.location.search);
  const locParam = params.get("location") || params.get("area");

  if (locParam) {
    const matched = HYDERABAD_LOCATIONS.find((l) => l.slug === locParam.toLowerCase());
    if (matched) return { page: "location-detail", locationSlug: matched.slug };
  }

  // Check matching location slugs in path or hash
  for (const loc of HYDERABAD_LOCATIONS) {
    if (
      rawPath === `/persian-cats-${loc.slug}` ||
      rawPath === `/location/${loc.slug}` ||
      rawPath === `/locations/${loc.slug}` ||
      hash === `persian-cats-${loc.slug}` ||
      hash === loc.slug
    ) {
      return { page: "location-detail", locationSlug: loc.slug };
    }
  }

  // Check standard static routes
  const cleanPath = rawPath.replace(/^\//, "");
  const validPages = ["kittens", "locations", "service-areas", "about", "services", "gallery", "reviews", "faq", "contact"];
  if (validPages.includes(cleanPath)) {
    if (cleanPath === "service-areas") {
      return { page: "locations", locationSlug: "banjara-hills" };
    }
    return { page: cleanPath, locationSlug: "banjara-hills" };
  }

  return { page: "home", locationSlug: "banjara-hills" };
}

function getPathForState(page: string, locationSlug?: string): string {
  if (page === "home") return "/";
  if (page === "location-detail" && locationSlug) {
    return `/persian-cats-${locationSlug}`;
  }
  return `/${page}`;
}

export default function App() {
  const initialRoute = parseCurrentUrl();
  const [currentPage, setCurrentPage] = useState<string>(initialRoute.page);
  const [selectedLocationSlug, setSelectedLocationSlug] = useState<string>(initialRoute.locationSlug);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [transitionLoading, setTransitionLoading] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Listen for browser Back/Forward (popstate) navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = parseCurrentUrl();
      setCurrentPage(route.page);
      if (route.locationSlug) {
        setSelectedLocationSlug(route.locationSlug);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Dynamic SEO Title, Description, Keywords, Canonical, OpenGraph & Structured Data
  useEffect(() => {
    let title = "Shams Persians Hyderabad | Persian Cats Near Me | Cattery 5.0★";
    let desc =
      "Shams Persians Hyderabad: All type of Persian cats available. 5.0 Google rated cattery. Buy healthy doll face and punch face Persian kittens with safe home delivery in Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Gachibowli, Old City, and all over Hyderabad. Call 078424 96805.";
    let keywords =
      "persian cats near me, persian cats hyderabad, shams persians, buy persian cat hyderabad, persian kittens for sale banjara hills, jubilee hills persian cats, secunderabad cat cattery, begumpet persian kittens, old city persian cat, doll face persian kitten hyderabad, punch face persian cat price hyderabad, cattery hyderabad";

    const currentLoc = HYDERABAD_LOCATIONS.find((l) => l.slug === selectedLocationSlug);

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
        if (currentLoc) {
          title = currentLoc.metaTitle;
          desc = currentLoc.metaDescription;
          keywords = currentLoc.popularSearchKeywords.join(", ");
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

    // 1. Document Title
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", desc);
      document.head.appendChild(metaDesc);
    }

    // 3. Meta Keywords
    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (metaKeys) {
      metaKeys.setAttribute("content", keywords);
    } else {
      metaKeys = document.createElement("meta");
      metaKeys.setAttribute("name", "keywords");
      metaKeys.setAttribute("content", keywords);
      document.head.appendChild(metaKeys);
    }

    // 4. Canonical URL Link Tag
    const pagePath = getPathForState(currentPage, selectedLocationSlug);
    const canonicalUrl = `${CANONICAL_ORIGIN}${pagePath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // 5. OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    } else {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      ogUrl.setAttribute("content", canonicalUrl);
      document.head.appendChild(ogUrl);
    }

    // 6. Twitter Card Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", desc);

    // 7. Dynamic Route-Specific Schema (Breadcrumbs & Hyperlocal LocalBusiness)
    const existingDynamicScript = document.getElementById("dynamic-route-schema");
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    if (currentPage === "location-detail" && currentLoc) {
      const script = document.createElement("script");
      script.id = "dynamic-route-schema";
      script.type = "application/ld+json";
      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${CANONICAL_ORIGIN}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Hyderabad Locations",
                "item": `${CANONICAL_ORIGIN}/locations`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": currentLoc.name,
                "item": canonicalUrl
              }
            ]
          },
          {
            "@type": ["LocalBusiness", "PetStore"],
            "@id": `${canonicalUrl}#service`,
            "name": `Shams Persians - ${currentLoc.name}`,
            "description": currentLoc.metaDescription,
            "telephone": "+917842496805",
            "openingHours": "Mo-Su 00:00-23:59",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": `${currentLoc.name}, Hyderabad`
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "3"
            }
          }
        ]
      };
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
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

    const nextPath = getPathForState(pageId);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ page: pageId }, "", nextPath);
    }

    setTransitionLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentPage(pageId);
      setTransitionLoading(false);
    }, 180);
  };

  const handleSelectLocation = (slug: string) => {
    const nextPath = getPathForState("location-detail", slug);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ page: "location-detail", slug }, "", nextPath);
    }

    setSelectedLocationSlug(slug);
    setTransitionLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentPage("location-detail");
      setTransitionLoading(false);
    }, 180);
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
            {/* HOME PAGE VIEW - Clean layout with no locality name lists or keyword blocks */}
            {currentPage === "home" && (
              <>
                <Hero
                  onExploreClick={() => handlePageChange("kittens")}
                  onLocationsClick={() => handlePageChange("locations")}
                />
                <TrustBar />
                <AvailableKittens />
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
