
# Portfolio - Open Source

A modern, full-stack portfolio website built with React, TypeScript, Express, and Tailwind CSS.

## Features

- 🎨 Modern UI with dark mode support
- ⚡ Fast development with Vite
- 🎯 Type-safe with TypeScript
- 🎨 Beautiful components with shadcn/ui
- 📱 Fully responsive design
- 🔄 Real-time Discord status integration
- 📦 Easy deployment to Vercel

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Wouter (routing)
- TanStack Query

### Backend
- Node.js
- Express
- TypeScript

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

### Available Scripts

- `npm run dev` - Start development server (both frontend and backend)
- `npm run dev:client` - Start only the frontend development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   └── ui/       # Reusable UI components (shadcn/ui)
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── server/               # Backend application
│   ├── app.ts           # Express app setup
│   ├── routes.ts        # API routes
│   ├── index-dev.ts     # Development server
│   └── index-prod.ts    # Production server
├── shared/              # Shared types and schemas
└── attached_assets/     # Static assets (images, etc.)
```

## Key Features Explained

### Download Source Code
Visit `/download` to download the complete portfolio source code as a ZIP file.

### Discord Status Integration
The portfolio includes real-time Discord status using the Lanyard API. Update the Discord user ID in the relevant component.

### Responsive Design
Built with mobile-first approach using Tailwind CSS breakpoints.

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. Click "Deploy"

### Manual Configuration (if needed)

If auto-detection doesn't work, use these settings:

**Build Settings:**
- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `dist/public`
- Install Command: `npm install`

**Environment Variables:**
Add any required environment variables in the Vercel dashboard under Settings → Environment Variables.

### vercel.json Configuration

The project includes a `vercel.json` with:
- Static site deployment configuration
- API route handling for `/download`
- Security headers

### Post-Deployment

After deployment:
1. Your site will be live at `your-project.vercel.app`
2. Configure custom domain if needed
3. Set up environment variables in Vercel dashboard
4. The `/download` endpoint will work automatically

## Customization

### Branding
- Update meta tags in `client/index.html`
- Replace favicon in `client/public/`
- Update content in components

### Styling
- Modify `client/src/index.css` for global styles
- Update Tailwind configuration as needed
- Customize shadcn/ui components in `client/src/components/ui/`

### API Routes
- Add new routes in `server/routes.ts`
- Backend runs on the same domain in production (serverless)

## Important URLs

After deployment, your portfolio will have:
- **Main Site**: `https://your-project.vercel.app`
- **Download Source**: `https://your-project.vercel.app/download`

## License

MIT - Feel free to use this portfolio template for your own projects!

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions

---

Built with ❤️ using React, TypeScript, and Vercel
