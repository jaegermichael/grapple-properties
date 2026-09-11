import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import WhyGrapple from "@/components/home/WhyGrapple";
import AreasServed from "@/components/home/AreasServed";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Full-Screen Architectural Hero */}
      <HeroSection />

      {/* 3. Featured Properties Grid & Filters */}
      <FeaturedProperties />

      {/* 4. About Grapple Editorial Showcase */}
      <AboutSection />

      {/* 5. Capabilities & Services Grid */}
      <ServicesSection />

      {/* 6. Signature Property Showcase */}
      <ShowcaseSection />

      {/* 7. Why Grapple Properties */}
      <WhyGrapple />

      {/* 8. Areas We Serve (Harare Prime) */}
      <AreasServed />

      {/* 9. Minimal Luxury Testimonials */}
      <Testimonials />

      {/* 10. Large Conversion CTA */}
      <CallToAction />
    </div>
  );
}
