/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

