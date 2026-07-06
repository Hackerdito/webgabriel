import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // Obtenemos la ruta actual para saber qué enlace está activo
  const location = useLocation();
  
  // Estado para abrir/cerrar el menú en versión móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Escuchar el evento de cambio en el carrito de Shopify
    const interval = setInterval(() => {
      // @ts-ignore
      if (window.ShopifyUI && window.ShopifyUI.components && window.ShopifyUI.components.cart && window.ShopifyUI.components.cart[0] && window.ShopifyUI.components.cart[0].model && window.ShopifyUI.components.cart[0].model.lineItems) {
        // @ts-ignore
        const count = window.ShopifyUI.components.cart[0].model.lineItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(count);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const openCart = () => {
    // @ts-ignore
    if (window.ShopifyUI && window.ShopifyUI.components && window.ShopifyUI.components.cart && window.ShopifyUI.components.cart[0]) {
      // @ts-ignore
      window.ShopifyUI.components.cart[0].open();
    }
  };
  
  // Lista de secciones del menú con sus rutas
  const menus = [
    { name: 'Sobre Nosotros', path: '/nosotros', hash: '' },
    { name: 'Producto', path: '/paquetes', hash: '' },
    { name: 'Conoce más', path: '/', hash: '#conoce-mas' }
  ];

  // Función para determinar si un menú está activo
  const isActive = (menu: typeof menus[0]) => {
    if (location.pathname !== menu.path) return false;
    if (menu.hash) return location.hash === menu.hash;
    return true; // Para '/nosotros' no requerimos hash
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, menu: typeof menus[0]) => {
    if (menu.hash) {
      if (location.pathname === menu.path) {
        e.preventDefault();
        const id = menu.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `${menu.path}${menu.hash}`);
        }
      }
    } else {
      if (location.pathname === menu.path) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Scroll para los hashes cuando la ruta cambia
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    // Contenedor principal fijo en la parte superior
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-8 flex flex-col items-center pointer-events-none">
      
      {/* Barra de navegación principal */}
      <nav className="w-full max-w-6xl px-4 md:px-8 py-2.5 md:py-3 flex items-center justify-between bg-[#fdfcfb]/60 backdrop-blur-2xl rounded-full border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] pointer-events-auto transition-all duration-300">
        
        {/* Logotipo de la izquierda */}
        <div className="flex flex-col items-start cursor-pointer">
          <Link to="/">
            <img src="https://webgabriel.vercel.app/pan.webp" alt="Gabriel Organic Foods" className="h-7 md:h-12 object-contain" />
          </Link>
        </div>

        {/* Sección derecha de la barra (Enlaces y Botones) */}
        <div className="flex items-center gap-3 md:gap-8 lg:gap-12">
          
          {/* Enlaces del menú (Ocultos en móvil, visibles en escritorio) */}
          <ul className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <li
                key={menu.name}
                className="relative group cursor-pointer py-2"
              >
                <Link to={`${menu.path}${menu.hash}`} onClick={(e) => handleNavClick(e, menu)}>
                  {/* Nombre de la sección */}
                  <span
                    className={`text-sm transition-colors ${
                      isActive(menu)
                        ? 'text-dark font-medium' // Estilo activo
                        : 'text-dark/70 font-normal group-hover:text-dark' // Estilo inactivo
                    }`}
                  >
                    {menu.name}
                  </span>
                  
                  {/* Línea animada debajo del enlace activo o al hacer hover */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold transition-transform duration-300 origin-left ${
                      isActive(menu) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Botones de Acción (Canasta, Tienda y Menú Hamburguesa) */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* Botón de Canasta de compras en la barra principal */}
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity" onClick={openCart}>
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-dark" strokeWidth={1.5} />
              
              {/* Notificación (número de items) de la canasta */}
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[9px] md:text-[10px] font-bold w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center border-2 border-cream box-content">
                  {cartCount}
                </span>
              )}
            </div>
            
            {/* Botón de Tienda en la barra principal */}
            <button className="bg-gold hover:bg-gold-hover transition-colors text-white px-4 py-1.5 md:px-7 md:py-2.5 rounded-full text-xs md:text-sm font-medium shadow-sm">
              Tienda
            </button>
            
            {/* Botón para abrir/cerrar el menú hamburguesa (Solo visible en versión móvil) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-dark/60 text-dark hover:bg-dark/5 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" strokeWidth={1.5} /> // Icono X cuando está abierto
              ) : (
                <Menu className="w-4 h-4" strokeWidth={1.5} /> // Icono Hamburguesa cuando está cerrado
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Contenedor Animado del Menú Móvil Desplegable */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-6xl mt-2 px-6 py-6 bg-[#fdfcfb]/95 backdrop-blur-3xl rounded-3xl border border-white/50 shadow-[0_16px_40px_rgba(0,0,0,0.08)] pointer-events-auto md:hidden flex flex-col gap-5"
          >
            {/* Lista de enlaces en el menú móvil */}
            <ul className="flex flex-col gap-4">
              {menus.map((menu) => (
                <li
                  key={menu.name}
                  className="cursor-pointer border-b border-dark/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)} // Cerrar menú al hacer clic
                >
                  <Link 
                    to={`${menu.path}${menu.hash}`}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(e, menu);
                    }}
                  >
                    <span
                      className={`block text-base transition-colors ${
                        isActive(menu)
                          ? 'text-dark font-medium' // Estilo de enlace activo
                          : 'text-dark/70 font-normal hover:text-dark' // Estilo de enlace inactivo
                      }`}
                    >
                      {menu.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Botones adicionales dentro del menú móvil */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Botón de Canasta en el menú móvil */}
              <button className="w-full border border-dark hover:bg-dark/5 transition-colors text-dark px-7 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2" onClick={openCart}>
                <ShoppingBag className="w-4 h-4" />
                Ver Canasta {cartCount > 0 ? `(${cartCount})` : ''}
              </button>
              
              {/* Botón de Tienda en el menú móvil */}
              <button className="w-full bg-gold hover:bg-gold-hover transition-colors text-white px-7 py-3 rounded-full text-sm font-medium shadow-sm">
                Tienda
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
