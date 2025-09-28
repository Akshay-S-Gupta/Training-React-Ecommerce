import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import MainNavbar from "./components/MainNavbar";
import CartOffcanvas from "./components/CartOffcanvas";
import HeroCarousel from "./components/HeroCarousel";
import WelcomeSection from "./components/WelcomeSection";
import ProductsSection from "./components/ProductsSection";
import CtaBanner from "./components/CtaBanner";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import NewsletterSection from "./components/NewsletterSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  useEffect(() => {
    if (window.AOS) window.AOS.refresh();
  });

  return (
    <div className="app-root">
      <TopBar />
      <MainNavbar />
      <CartOffcanvas />
      <HeroCarousel />
      <WelcomeSection />
      <ProductsSection />
      <CtaBanner />
      <FeaturesSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}
