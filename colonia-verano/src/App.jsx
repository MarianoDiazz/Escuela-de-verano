import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Countdown from "./components/CountDown";
import ImportanceSection from "./components/ImportanceSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { TrendingUp } from "lucide-react";
import Timeline from "./components/TimeLine";
import Pricing from "./components/Pricing";
import InfoCards from "./components/InfoCards";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Hero />
      <Countdown />
      <ImportanceSection />
      <Timeline />
      <Pricing />
      <InfoCards />
    </>
  );
}

export default App;
