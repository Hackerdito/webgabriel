import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const features = [
  {
    num: '01',
    icon: 'https://webgabriel.vercel.app/icon_1.png',
    title: 'Tradición',
    description: 'Generaciones de cuidado y respeto por la naturaleza.'
  },
  {
    num: '02',
    icon: 'https://webgabriel.vercel.app/icon_3.png',
    title: 'Nutrición real',
    description: 'Enzimas, antioxidantes y vitaminas naturales.'
  },
  {
    num: '03',
    icon: 'https://webgabriel.vercel.app/icon_5.png',
    title: 'Origen auténtico',
    description: 'Abejas libres y apicultores locales, cuidando la tierra.'
  },
  {
    num: '04',
    icon: 'https://webgabriel.vercel.app/icon_4.png',
    title: 'Compromiso',
    description: 'Ingredientes puros para tu bienestar y confianza.'
  }
];

export default function OurHistory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 120 });
  
  // Parallax offsets for a premium float effect
  const y1 = useTransform(smoothProgress, [0, 1], [30, -50]);
  const y2 = useTransform(smoothProgress, [0, 1], [80, -90]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -40]);
  const y4 = useTransform(smoothProgress, [0, 1], [60, -70]);
  const y5 = useTransform(smoothProgress, [0, 1], [40, -100]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-cream relative z-20 overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start lg:sticky lg:top-32">
          <h3 className="text-gold font-bold text-sm md:text-base mb-3 tracking-widest uppercase">
            Nuestra historia
          </h3>
          <div className="w-12 h-[2px] bg-gold mb-10" />
          
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-dark leading-[1.1] tracking-tight mb-12">
            Lo natural<br/>siempre sabe mejor
          </h2>
          
          <div className="flex items-center gap-4 mb-10 w-full max-w-md">
            <div className="flex-grow h-[1px] bg-gold/30"></div>
            <img src="https://webgabriel.vercel.app/icon_1.png" alt="Bee icon" className="w-8 h-8 opacity-80" />
            <div className="flex-grow h-[1px] bg-gold/30"></div>
          </div>
          
          <div className="text-dark/90 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-20">
            <p>
              En Gabriel Organic Foods creemos en el poder de los alimentos auténticos. Nacimos con la miel, un alimento noble y lleno de tradición.
            </p>
          </div>

          {/* 4 Features Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 w-full">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-10 h-10 object-contain mb-6"
                />
                <span className="text-gold font-medium text-sm mb-1">{feature.num}</span>
                <h4 className="text-lg font-medium text-dark mb-2 leading-snug">
                  {feature.title}
                </h4>
                <p className="text-dark/70 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Parallax Images Bento Grid */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            
            {/* Image 1: Top Left */}
            <motion.div style={{ y: y1 }} className="col-span-1">
              <img 
                src="https://webgabriel.vercel.app/Stock/h_v1.jpeg" 
                alt="Abejas en panal" 
                className="w-full h-full min-h-[16rem] rounded-2xl md:rounded-3xl object-cover shadow-lg bg-dark/5"
              />
            </motion.div>

            {/* Image 2: Top Right */}
            <motion.div style={{ y: y2 }} className="col-span-1">
              <img 
                src="https://webgabriel.vercel.app/Stock/h_v2.jpeg" 
                alt="Abeja en flor" 
                className="w-full h-full min-h-[20rem] rounded-2xl md:rounded-3xl object-cover shadow-lg bg-dark/5"
              />
            </motion.div>

            {/* Image 3: Middle Left */}
            <motion.div style={{ y: y3 }} className="col-span-1 -mt-8 md:-mt-12">
              <img 
                src="https://webgabriel.vercel.app/Stock/h_v3.jpeg" 
                alt="Miel cayendo" 
                className="w-full h-full min-h-[16rem] rounded-2xl md:rounded-3xl object-cover shadow-lg bg-dark/5"
              />
            </motion.div>

            {/* Image 4: Middle Right */}
            <motion.div style={{ y: y4 }} className="col-span-1">
              <img 
                src="https://webgabriel.vercel.app/Stock/h_v4.jpeg" 
                alt="Apicultor trabajando" 
                className="w-full h-full min-h-[20rem] rounded-2xl md:rounded-3xl object-cover shadow-lg bg-dark/5"
              />
            </motion.div>

            {/* Image 5: Bottom spanning both */}
            <motion.div style={{ y: y5 }} className="col-span-2 mt-4 md:mt-2">
              <img 
                src="https://webgabriel.vercel.app/Stock/h_v5.jpeg" 
                alt="Atardecer y panales" 
                className="w-full h-full max-h-[18rem] md:max-h-[22rem] rounded-2xl md:rounded-[2rem] object-cover shadow-lg bg-dark/5"
              />
            </motion.div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
