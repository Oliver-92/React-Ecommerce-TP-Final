import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// ScrollToTop: Componente atómico que fuerza el scroll al inicio al cambiar de ruta.

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // o 'auto'
  }, [pathname]);

  return null;
};

export default ScrollToTop;
