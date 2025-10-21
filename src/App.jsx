import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Countdown from "./components/CountDown";
import ImportanceSection from "./components/ImportanceSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { TrendingUp } from "lucide-react";
import Timeline from "./components/Timeline";
import Pricing from "./components/Pricing";
import InfoCards from "./components/InfoCards";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Map from "./components/Map";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Activities from "./components/Activities";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>{`
        .activity-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 12px 24px rgba(0,0,0,0.2); 
        }
        .pricing-card:hover { 
          transform: translateY(-10px); 
        }
        .gallery-img:hover { 
          transform: scale(1.05); 
        }
      `}</style>
      <Navigation />
      <Hero />
      <Countdown />
      <ImportanceSection />
      <InfoCards />
      <Timeline />
      <Team />
      <Pricing />
      <Activities />
      {/* <Gallery /> */}
      <FAQ />
      <Map />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
