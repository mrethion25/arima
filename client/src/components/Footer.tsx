import { Github, Youtube, Disc, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img src="https://cdn.discordapp.com/avatars/1216087894263857285/224199bde22ae219dd2d7cb7cbf6e4b1.webp?size=1024" alt="Arima" className="h-6 w-6" />
              <span className="text-lg font-bold font-heading">
                Arima
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating Next-Gen Discord Bots & Websites
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:gfxethion@gmail.com?subject=Hello&body=Hi%20there!" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://blinime.vercel.app/home/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.youtube.com/@MR.ETHION" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="YouTube">
              <Youtube size={20} />
            </a>
            <a href="https://discord.gg/jH7HpVQbH3" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200" title="Discord">
              <Disc size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Arima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
