import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { LawyerPage } from "./pages/LawyerPage/LawyerPage";
import { EntrepreneurPage } from "./pages/EntrepreneurPage/EntrepreneurPage";
import { BusinessAdvisorPage } from "./pages/BusinessAdvisorPage/BusinessAdvisorPage";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="/entrepreneur" element={<EntrepreneurPage />} />
        <Route path="/business-advisor" element={<BusinessAdvisorPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};