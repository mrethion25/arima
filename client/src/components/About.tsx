import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Server, Wrench } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code2 className="text-yellow-400" /> },
  { name: "Node.js", icon: <Server className="text-green-500" /> },
  { name: "Discord.js", icon: <Terminal className="text-blue-500" /> },
  { name: "MongoDB", icon: <Database className="text-green-400" /> },
  { name: "API Integration", icon: <Wrench className="text-purple-500" /> },
  { name: "React/UI", icon: <Layout className="text-cyan-400" /> },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Developing with passion & precision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate Developer with a strong focus on Discord bot development and backend automation. 
                I create custom solutions that help communities manage their servers efficiently and provide unique experiences for their members.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in the Discord.js library and Node.js ecosystem, I can bring any idea to life—from complex economy systems to advanced moderation tools.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg border border-border text-center">
                  <span className="block text-3xl font-bold text-primary mb-1">3+</span>
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border text-center">
                  <span className="block text-3xl font-bold text-primary mb-1">50+</span>
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="mb-3 p-3 bg-background rounded-lg w-fit group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-foreground">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
