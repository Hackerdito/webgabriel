import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('Paquetes');
  const menus = ['Sobre Nosotros', 'Paquetes', 'Conoce más'];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-8 flex justify-center pointer-events-none">
      <nav className="w-full max-w-6xl px-6 md:px-8 py-3 flex items-center justify-between bg-[#fdfcfb]/60 backdrop-blur-2xl rounded-full border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] pointer-events-auto transition-all duration-300">
        {/* Logo */}
      <div className="flex flex-col items-start cursor-pointer">
        <img src="https://webgabriel.vercel.app/pan.webp" alt="Gabriel Organic Foods" className="h-10 md:h-12 object-contain" />
      </div>

      {/* Right Side Navigation and Actions */}
      <div className="flex items-center gap-8 md:gap-12">
        <ul className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <li
              key={menu}
              className="relative group cursor-pointer py-2"
              onClick={() => setActive(menu)}
            >
              <span
                className={`text-sm transition-colors ${
                  active === menu
                    ? 'text-dark font-medium'
                    : 'text-dark/70 font-normal group-hover:text-dark'
                }`}
              >
                {menu}
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold transition-transform duration-300 origin-left ${
                  active === menu ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button className="bg-gold hover:bg-gold-hover transition-colors text-white px-7 py-2.5 rounded-full text-sm font-medium shadow-sm">
            Tienda
          </button>
          <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <ShoppingBag className="w-6 h-6 text-dark" strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-cream box-content">
              2
            </span>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
