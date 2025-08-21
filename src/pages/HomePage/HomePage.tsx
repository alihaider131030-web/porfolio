import React from "react";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { LatestArticlesSection } from "./sections/LatestArticlesSection/LatestArticlesSection";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MainContentSection />
      <CallToActionSection />
      <LatestArticlesSection />
    </>
  );
};