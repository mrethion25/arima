import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Anime website",
    category: "website",
    image: "https://cdn.discordapp.com/attachments/1377628285479026718/1441840196902457515/image0.jpg?ex=692341d3&is=6921f053&hm=d89cc2c31aac9d3b91fb92a6d23a92d426d324db92c13ace37e9786ebd5f386d&",
    github: "https://discord.gg/jH7HpVQbH3",
    demo: "https://blinime.vercel.app/home"
  },
  {
    title: "radio site",
    category: "website",
    image: "https://cdn.discordapp.com/attachments/1377628285479026718/1441840501698466043/image0.png?ex=6923421b&is=6921f09b&hm=4f1c6e0d3b37f6fe586aded49128e434abac904ca21a94f32b3cb7be7c704375&",
    github: "https://discord.gg/jH7HpVQbH3",
    demo: "https://blisstune.netlify.app/"
  },
  {
    title: "music site",
    category: "website",
    image: "https://cdn.discordapp.com/attachments/1377628285479026718/1441840277051670568/Screenshot_20251121_201334_Chrome.jpg?ex=692341e6&is=6921f066&hm=f5475cd9c623e61652bd01417df184c2b7229532043edb4f02c1b4f9cb0d6a9e&",
    github: "https://discord.gg/jH7HpVQbH3",
    demo: "https://blissmusic.vercel.app/"
  }
];

function ProjectCard({ project }: { project: any }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(238, 21, 75, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col">
        <div className="h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        </div>
        
        <div className="p-6 flex-1 flex flex-col justify-between bg-black/40 backdrop-blur-sm">
          <div>
            <p className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">{project.category}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          </div>
          
          <div className="flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
             <Button size="sm" variant="outline" className="w-full border-white/20 hover:bg-white hover:text-black" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
             </Button>
             <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">Selected Works</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              A curated selection of digital experiences I've engineered.
            </p>
          </div>
          <Button variant="link" className="text-primary text-lg hidden md:flex gap-2 group">
            View All Archives <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Button variant="outline" className="w-full py-6">View All Archives</Button>
        </div>
      </div>
    </section>
  );
              }
