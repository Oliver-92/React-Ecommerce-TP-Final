// NavigationMenu: Componente molécula que renderiza el menú de navegación principal.
import { useAuth } from '../../contexts/AuthContext';
import NavLink from '../atoms/NavLink';
import { useCart } from '../../contexts/CartContext';

const NavigationMenu = ({ isMobile = false }) => {
  const { user, logoutUser, isAdmin } = useAuth();
  const { productsCart } = useCart();
  const hasItems = productsCart.length > 0;

  const handleLogout = () => {
    logoutUser();
  }

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    user ? { label: "Salir", action: handleLogout } :
      { label: 'Ingresar', path: '/login' },
    { label: <i className={`bi bi-cart ${hasItems ? "text-cyan-400 animate-pulse border-3 border-cyan-400 rounded-full px-2 py-1" : "text-white"} text-xs md:text-sm lg:text-base hover:text-cyan-400 transition-colors duration-200`} title="Carrito"></i>, path: '/carrito' },
  ];

  if (isAdmin) {
    links.push({ label: 'Admin', path: '/admin' });
  }

  return (
    <ul className={`flex ${isMobile ? 'flex-col mt-4 space-y-1' : 'space-x-6'}`}>
      {links.map(({ label, path, action }) => (
        <li key={path || label.toString()}>
          {action ? (
            <button onClick={action} className="block px-3 py-2 text-white text-xs md:text-sm lg:text-base hover:text-cyan-400 transition-colors duration-200">{label}</button>
          ) : (
            <NavLink to={path}>{label}</NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;