/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Extra space to showcase what comes next in the page */}
      <section className="h-screen bg-cream flex items-center justify-center">
        <p className="text-dark/40 font-light text-2xl tracking-widest uppercase">
          Explora nuestros productos
        </p>
      </section>
    </div>
  );
}

