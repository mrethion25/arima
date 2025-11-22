import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import archiver from "archiver";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Download portfolio as ZIP
  app.get("/download", (_req, res) => {
    const archive = archiver("zip", {
      zlib: { level: 9 }
    });

    res.attachment("portfolio-source.zip");
    archive.pipe(res);

    const rootDir = path.resolve(import.meta.dirname, "..");
    
    // Files and directories to exclude
    const excludePatterns = [
      "node_modules",
      "dist",
      ".git",
      ".config",
      ".env",
      ".env.local",
      "portfolio-source.zip"
    ];

    const shouldExclude = (filePath: string) => {
      const relativePath = path.relative(rootDir, filePath);
      return excludePatterns.some(pattern => 
        relativePath === pattern || relativePath.startsWith(pattern + path.sep)
      );
    };

    const addDirectory = (dirPath: string, zipPath: string = "") => {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const relativeZipPath = zipPath ? path.join(zipPath, item) : item;
        
        if (shouldExclude(fullPath)) {
          return;
        }
        
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          addDirectory(fullPath, relativeZipPath);
        } else {
          archive.file(fullPath, { name: relativeZipPath });
        }
      });
    };

    addDirectory(rootDir);
    
    archive.finalize();
  });

  const httpServer = createServer(app);

  return httpServer;
}
