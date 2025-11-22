import { motion } from "framer-motion";
import { Palette, Code, Zap, Globe, Smartphone, Layers } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces.",
    icon: <Palette className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-purple-900/50 to-blue-900/50"
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and modern websites.",
    icon: <Globe className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    bg: "bg-card/50"
  },
  {
    title: "Performance",
    description: "Optimizing for speed and efficiency.",
    icon: <Zap className="w-6 h-6" />,
    colSpan: "md:col-span-1",
    bg: "bg-card/50"
  },
  {
    title: "Full Stack",
    description: "End-to-end solutions from database to frontend.",
    icon: <Layers className="w-6 h-6" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-primary/20 to-purple-900/50"
  },
  {
    title: "Mobile First",
    description: "Responsive designs that work on any device.",
    icon: <Smartphone className="w-6 h-6" />,
    colSpan: "md:col-span-3",
    bg: "bg-card/30 border-dashed"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Capabilities</h2>
          <div className="h-1 w-full max-w-[200px] bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 group relative overflow-hidden ${service.colSpan} ${service.bg}`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-md text-white">
                   {service.icon}
                </div>
              </div>
              
              <div className="h-full flex flex-col justify-end relative z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
