import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

const features = [
  {
    icon: "https://webgabriel.vercel.app/icon_1.png",
    title: "Dulzor natural, equilibrio real",
    description: "Nuestra miel es libre de jarabes añadidos. Su dulzura natural es ideal para tus bebidas, ensaladas o postres."
  },
  {
    icon: "https://webgabriel.vercel.app/icon_2.png",
    title: "Tradición y cuidado natural",
    description: "Por generaciones, la miel ha sido parte de los remedios caseros más utilizados, gracias a sus nutrientes y compuestos naturales."
  },
  {
    icon: "https://webgabriel.vercel.app/icon_3.png",
    title: "Nutrientes para tu día a día",
    description: "Cada cucharada de nuestra miel contiene enzimas, antioxidantes, vitaminas B y C y nutrientes naturales que se conservan gracias a un proceso respetuoso con las abejas y con la tierra de donde proviene."
  },
  {
    icon: "https://webgabriel.vercel.app/icon_4.png",
    title: "Origen auténtico, manos expertas",
    description: "Cada frasco de nuestra miel nace del trabajo de abejas libres y del cuidado de apicultores locales que protegen la tierra y acompañan en cada etapa del proceso."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Features() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl mb-24 relative group"
        >
          <video 
            ref={videoRef}
            src="https://www.gabrielorganicfoods.com/cdn/shop/videos/c/vp/0de3cc69d66044b3ac9d0aa9a4d9ddd9/0de3cc69d66044b3ac9d0aa9a4d9ddd9.HD-1080p-7.2Mbps-57539006.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/9]"
          />
          <button 
            onClick={toggleMute}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-dark/40 hover:bg-dark/60 text-white p-3 rounded-full backdrop-blur-md transition-colors duration-300 z-10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </motion.div>

        {/* Text and Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
        >
          {/* Left Column: Heading */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-start">
            <h3 className="text-gold font-bold text-xl md:text-2xl mb-4 tracking-wide">
              Beneficios Naturales
            </h3>
            <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-dark leading-tight tracking-tight">
              Un aliado natural para tu bienestar
            </h2>
          </motion.div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-start">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-10 h-10 object-contain mb-6"
                />
                <h4 className="text-xl font-bold text-dark mb-3 leading-snug">
                  {feature.title}
                </h4>
                <p className="text-dark/80 font-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
