import { Github, Youtube, Disc, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img src="https://images-ext-1.discordapp.net/external/62Z18IyUDPSKmuFm9DE3JuZDsZ3NBa-bssyYt_TdCQE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1304080189029875753/16b589870dec30e251c493faad39af8f.webp?format=webp" alt="Alive" className="h-6 w-6" />
              <span className="text-lg font-bold font-heading">
                Alive
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating Next-Gen Discord Bots & Websites
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:contact@encorebot.me" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/teamapexofc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.youtube.com/@apex-teamofc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="YouTube">
              <Youtube size={20} />
            </a>
            <a href="https://discord.gg/6QwS5BQx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="Discord">
              <Disc size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
