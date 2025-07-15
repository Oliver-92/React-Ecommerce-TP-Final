import FeaturedProducts from '../organisms/FeaturedProducts';
import HeroSection from '../organisms/HeroSection';
import InfoBar from '../organisms/InfoBar';
import DefaultLayout from '../uiTemplates/DefaultLayout';
// Home: Página principal de la tienda.

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <InfoBar />
      <FeaturedProducts />
    </DefaultLayout>
  );
};

export default Home;
