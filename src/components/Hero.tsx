import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });

  // Animate text upwards as user scrolls and stop in place
  const textY = useTransform(smoothProgress, [0, 0.5], ["0vh", "-26vh"]);
  const textScale = useTransform(smoothProgress, [0, 0.5], [1, 0.75]);

  // Image fades in and moves up
  const imageOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);
  const imageY = useTransform(smoothProgress, [0, 1], ["14vh", "7vh"]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1.05, 1]);

  // Fade out the scroll indicator
  const arrowOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div id="paquetes" ref={containerRef} className="h-[200vh] relative bg-cream">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Image container: Hidden initially, fades in and rises */}
        <motion.div 
          style={{ opacity: imageOpacity, y: imageY, scale: imageScale }}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          {/* Mobile Image */}
          <img
            src="https://webgabriel.vercel.app/h_movil.png"
            alt="Miel de origen"
            className="w-full h-full object-cover object-center block md:hidden"
          />
          {/* Desktop Image */}
          <img
            src="https://webgabriel.vercel.app/heroimg.png"
            alt="Miel de origen"
            className="w-full h-full object-cover object-center hidden md:block"
          />
        </motion.div>

        {/* Floating Text Container */}
        <motion.div
          style={{ y: textY, scale: textScale }}
          className="relative z-20 flex flex-col items-center justify-center text-center origin-top pointer-events-none -mt-4 md:-mt-8"
        >
          <h1 className="text-5xl md:text-[7rem] font-medium text-gold tracking-tight leading-[1.1] mb-0 drop-shadow-sm">
            Miel de origen
          </h1>
          <p className="text-2xl md:text-[2.5rem] font-light text-dark/90 leading-tight -mt-1 md:-mt-3">
            Hecha con pasión.
          </p>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          style={{ opacity: arrowOpacity }}
          className="absolute bottom-12 w-full flex justify-center pointer-events-none z-30"
        >
          <div className="bg-gold w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-gold/20 animate-bounce">
            <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
