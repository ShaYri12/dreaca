import AppShowcase from "./components/AppShowcase";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinTeam from "./components/JoinTeam";
import WhatIsDreaca from "./components/WhatIsDreaca";

export default function Home() {
  return (
    <div className="pt-[80px]">
      <Hero />
      <WhatIsDreaca />
      <Faq />
      <AppShowcase />
      <JoinTeam />
      <Contact />
      <Footer />
    </div>
  );
}
