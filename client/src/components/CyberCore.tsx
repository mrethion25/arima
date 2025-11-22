import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CyberCore() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
      {/* Energy Field */}
      <div className="absolute w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      
      {/* Outer Gyroscope */}
      <motion.div 
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-primary/10 rounded-full border-dashed"
        style={{ transformStyle: "preserve-3d" }}
      />
      
      <motion.div 
        animate={{ rotateX: -360, rotateY: 180 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Inner Rings */}
      <motion.div 
        animate={{ rotateZ: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] border-2 border-primary/20 rounded-full border-t-transparent border-l-transparent"
      />
      
      <motion.div 
        animate={{ rotateZ: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] border border-white/10 rounded-full border-dashed"
      />

      {/* Core Container */}
      <div className="relative w-64 h-64 group cursor-pointer">
        {/* Hexagon Shape (CSS Clip Path) */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl border border-primary/30 flex items-center justify-center overflow-hidden"
          style={{ 
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            boxShadow: "0 0 50px rgba(238,21,75,0.2)"
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[size:250%_250%,100%_100%] animate-[background-position_0%_0%_to_100%_100%_3s_linear_infinite]" />
          
          {/* Profile Image */}
          <div className="w-full h-full relative z-10 p-1">
             <div className="w-full h-full" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
               <img 
                 src="https://images-ext-1.discordapp.net/external/62Z18IyUDPSKmuFm9DE3JuZDsZ3NBa-bssyYt_TdCQE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1304080189029875753/16b589870dec30e251c493faad39af8f.webp?format=webp" 
                 alt="Alive Profile" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
             </div>
          </div>

          {/* Glitch Overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none" style={{ mixBlendMode: "overlay" }} />
        </motion.div>

        {/* Data Indicators */}
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-1"
        >
           <div className="w-24 h-[1px] bg-primary/50" />
           <div className="text-[10px] font-mono text-primary text-right">CORE: ACTIVE</div>
           <div className="text-[10px] font-mono text-white/50 text-right">SYS.32.89</div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", delay: i * 2 }}
        >
          <div 
            className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full blur-[1px]" 
            style={{ left: `${15 + i * 8}%`, opacity: 0.3 + Math.random() * 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
