// Header: Organismo que muestra la cabecera principal con logo y menú de navegación.
import { useState } from 'react';
import Logo from '../atoms/Logo';
import NavigationMenu from '../molecules/NavigationMenu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gray-950 px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden sm:flex items-end flex-col gap-4 mt-0">
          <NavigationMenu />
        </div>

        {/* Toggle button mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden text-white"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden mt-4">
          <NavigationMenu isMobile />
        </div>
      )}
    </header>
  );
};

export default Header;