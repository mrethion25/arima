import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal, ChevronRight } from "lucide-react";
import CyberCore from "@/components/CyberCore";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Epic Moving Grid Floor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[linear-gradient(transparent,rgba(238,21,75,0.05))] perspective-grid" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
            >
              {/* Status Bar */}
              <div className="flex items-center gap-4 mb-8 font-mono text-xs text-primary/60 border-b border-white/5 pb-4 w-fit">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>SYSTEM ONLINE</span>
                </div>
                <span>//</span>
                <span>LOC: EARTH</span>
                <span>//</span>
                <span>V.2.0.24</span>
              </div>

              {/* Main Title */}
              <h1 className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
                <span className="block text-white mix-blend-difference">I AM</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient-x bg-[length:200%_auto] glitch-wrapper">
                  <span className="glitch-layer text-primary" aria-hidden="true">Arima</span>
                  ARIMA
                </span>
              </h1>
              
              {/* Role & Link */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-3 text-2xl md:text-3xl font-light text-white/80">
                  <Terminal className="w-6 h-6 text-primary" />
                  <span>CEO of <strong className="text-white font-bold">bliss Development</strong></span>
                </div>
                
                <a 
                  href="https://blinime.vercel.app/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors font-mono text-sm border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/10"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  blinime.vercel.app
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
                Merging <span className="text-white font-medium">Full Stack Engineering</span> with high-end <span className="text-white font-medium">System Architecture</span>. 
                I build digital ecosystems that are alive, responsive, and infinitely scalable.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="h-16 px-10 text-lg rounded-none border-l-4 border-white bg-primary/90 hover:bg-primary text-white transition-all hover:pl-12 group">
                  Explore My Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-none border-white/20 hover:bg-white/5 hover:text-white gap-3">
                  <Github className="h-5 w-5" /> 
                  <span>dc server</span>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Visual Core - Spans 5 columns */}
          <div className="lg:col-span-5 h-[600px] relative flex items-center justify-center perspective-[1000px]">
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 lg:hidden" />
             <CyberCore />
          </div>

        </div>
      </div>
    </section>
  );
}
