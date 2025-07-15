import { useState } from "react";
import HeroTextGroup from "../molecules/HeroTextGroup";

const HeroSection = () => {
// HeroSection: Organismo que muestra el banner principal con imagen y textos animados.
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full h-[65vh] md:h-[75vh] relative overflow-hidden">
      <img
        className="w-full h-full object-cover blur-[3px]"
        src="https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/banner01.webp"
        alt="Hero banner"
        onLoad={() => setImageLoaded(true)}
      />

      {imageLoaded && <HeroTextGroup />}
    </section>
  );
};

export default HeroSection;