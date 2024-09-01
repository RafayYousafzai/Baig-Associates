"use client";

import Hero from "components/Hero";
import Brands from "components/Brands";
import PropertyListings from "components/PropertyListings";
import Services from "components/Services";
import FunFact from "components/FunFact";
import SAM from "components/SAM";
import FAQ from "components/FAQ";
import Blog from "components/Blog";
import Testimonial from "components/Testimonial";
import HeroVideo from "components/HeroVideo";
import Header from "components/Header";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <main>
        <section className="relative">
          <HeroVideo />
          <div className="absolute z-99 top-0">
            <Hero />
          </div>
        </section>
        <Brands />
        <PropertyListings all={false} />
        <Testimonial />
        <SAM />
        <Blog all={false} />
        <Services />
        <FunFact />
        <FAQ />
        {/* <FeaturesTab /> */}
        {/* <Integration /> */}
        {/* <About /> */}
        {/* <Pricing /> */}
      </main>
    </>
  );
}
