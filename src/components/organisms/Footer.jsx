// Footer: Organismo que muestra el pie de página con contacto, redes y formas de pago.
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import naranja from "../../assets/naranja.png";
import pagofacil from "../../assets/pagofacil.png";
import SocialIconsGroup from "../molecules/SocialIconsGroup";

const Footer = () => (
  <footer className="mt-10">
    <div className="bg-gray-200 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:justify-items-center px-4">
      {/* Contacto */}
      <div className="flex flex-col gap-1 text-xs lg:text-sm 2xl:text-base text-gray-800">
        <h2 className="mb-1 text-base sm:text-lg md:text-xl font-semibold">Contacto</h2>
        <div><i className="bi bi-whatsapp"> 541122222222</i></div>
        <div><i className="bi bi-envelope"> nevermind-shop@gmail.com</i></div>
        <div><i className="bi bi-geo-alt"> Nuestros Locales</i></div>
        <div><i className="bi bi-question-circle"> Preguntas Frecuentes</i></div>
        <div><i className="bi bi-bag-x"> Arrepentimiento de compra</i></div>
      </div>

      {/* Redes Sociales */}
      <SocialIconsGroup />

      {/* Formas de pago */}
      <div className="flex flex-col gap-1">
        <h2 className="text-gray-800 mb-1 text-base sm:text-lg md:text-xl font-semibold">Formas de pago</h2>
        <div className="flex gap-2 my-1">
          <img src={mastercard} alt="mastercard-logo" className="w-10 sm:w-12 h-8 md:h-10" />
          <img src={visa} alt="visa-logo" className="w-10 md:w-12 h-8 md:h-10" />
          <img src={naranja} alt="naranja-logo" className="w-10 md:w-12 h-8 md:h-10" />
          <img src={pagofacil} alt="pagofacil-logo" className="w-10 md:w-12 h-8 md:h-10" />
        </div>
      </div>
    </div>

    {/* Footer final */}
    <div className="flex flex-col sm:flex-row justify-center gap-2 bg-gray-950 text-white text-center py-4">
      <p className="text-xs md:text-sm">© 2025 Nevermind-Shop. Todos los derechos reservados.</p>
      <p className="text-xs md:text-sm">Desarrollado por <a href="https://oliver-92.github.io/Portafolio/" className="font-semibold" target="_blank" rel="noopener noreferrer">Ezequiel Oliver</a></p>
    </div>
  </footer>
);

export default Footer;