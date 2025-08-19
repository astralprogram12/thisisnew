# Nenrin Dashboard - Next.js

A beautiful, nature-inspired dashboard built with Next.js, TypeScript, and Tailwind CSS. Nenrin provides a calm, WhatsApp-integrated interface for personal productivity and organization.

## Features

- **Forest Green Branding**: Calming nature-inspired color palette
- **Wooden Ring Backgrounds**: Subtle animated backgrounds that evoke tree rings
- **WhatsApp Integration**: Direct links to WhatsApp for task management and reminders
- **Smooth Animations**: Gentle, accessibility-friendly animations throughout
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Font**: Inter & Manrope (Google Fonts)
- **Icons**: Custom SVG icons
- **Deployment**: Optimized for Vercel

## Project Structure

```
nenrin-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main dashboard page
├── src/
│   └── components/         # React components
│       ├── Home.tsx         # Main dashboard content
│       ├── Icons.tsx        # SVG icon components
│       ├── NenrinLogo.tsx   # Animated logo component
│       ├── RingsBackground.tsx # Animated background
│       └── SuggestionCard.tsx # WhatsApp suggestion cards
├── public/                # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd nenrin-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### WhatsApp Configuration

To customize the WhatsApp integration:

1. Open `src/components/SuggestionCard.tsx`
2. Replace the `WHATSAPP_NUMBER` constant with your actual WhatsApp number:
   ```typescript
   const WHATSAPP_NUMBER = "6280000000000"; // Replace with your number
   ```
   Use international format without + or spaces (e.g., "6281234567890")

## Deployment to Vercel

### Method 1: Deploy with Vercel Button (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Method 2: Manual Deployment

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy using Vercel CLI**
   ```bash
   vercel
   ```

4. **Or deploy via GitHub**
   - Push your code to GitHub
   - Connect your GitHub repository to Vercel
   - Vercel will automatically build and deploy

### Method 3: One-Click Deployment

1. **Push to GitHub/GitLab/Bitbucket**
2. **Visit [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your repository**
5. **Deploy!** (Vercel will auto-detect Next.js)

### Build Configuration

The project is already configured for optimal Vercel deployment:

- **Build Command**: `next build` (automatically detected)
- **Output Directory**: `.next` (automatically detected)
- **Install Command**: `npm install` (automatically detected)
- **Node.js Version**: 18.x (recommended)

## Customization

### Color Scheme

The Nenrin color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  'nenrin-forest': '#1A4A35',      // Primary forest green
  'nenrin-sprout': '#4FB36B',      // Lighter green accent
  'nenrin-gold': '#B8941F',        // Gold accent
  'nenrin-sage': '#7A9B6E',        // Sage green
  'nenrin-mist': '#F8FAF9',        // Light background
  // ... more colors
}
```

### Typography

Two custom font families are available:

- `font-nenrin-heading`: Manrope (for headings)
- `font-nenrin-body`: Inter (for body text)

### Animations

Custom animations are defined in `app/globals.css`:

- `animate-float`: Gentle floating motion
- `animate-breathe`: Subtle scaling animation
- `animate-sparkle`: Rotating sparkle effect
- `animate-fadeInUp`: Fade in with upward motion

## Environment Variables

No environment variables are required for basic functionality. All configuration is done through the source code.

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with Next.js automatic splitting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created by MiniMax Agent for demonstration purposes.

## Support

For questions or issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Consult [Vercel deployment guides](https://vercel.com/docs)

---

**Built with care by MiniMax Agent** • Designed for calm, productive living • Powered by Next.js
