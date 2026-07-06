import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section id="sobre-nosotros" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Mobile Video */}
        <video
          src="https://webgabriel.vercel.app/H_mov.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://webgabriel.vercel.app/h_movil.png"
          className="w-full h-full object-cover block md:hidden bg-dark"
        />
        {/* Desktop Video */}
        <video
          src="https://webgabriel.vercel.app/honey.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://webgabriel.vercel.app/heroimg.png"
          className="w-full h-full object-cover hidden md:block bg-dark"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-white"
        >
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium mb-6 md:mb-8 leading-[1.05] tracking-tight drop-shadow-md">
            Origen auténtico,<br /> bienestar real
          </h2>
          <p className="text-xl md:text-2xl lg:text-[1.75rem] font-light leading-snug text-white/90 max-w-[40rem] drop-shadow-sm">
            Ofrecemos miel orgánica premium que cuida tu bienestar, a las abejas, a las comunidades productoras y al planeta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
