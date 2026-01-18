/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        rpg: {
          dark: '#050510',     // Deep space/cyber dark
          slate: '#0f172a',    // Tech panel bg
          gold: '#ffd700',     // Cyber Gold (Brighter)
          goldDim: '#b8860b',  // Dimmed gold
          crimson: '#ff3333',  // Cyber Alert Red
          mana: '#00ccff',     // Cyber Neon Blue
          text: '#e2e8f0',     // Light grayish cyan
          muted: '#64748b',    // Slate text
          neon: '#00f3ff'      // Extra glow
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-grid': "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        'neon-gold': '0 0 5px theme("colors.rpg.gold"), 0 0 10px theme("colors.rpg.goldDim")',
        'neon-blue': '0 0 5px theme("colors.rpg.mana"), 0 0 10px theme("colors.rpg.mana")',
      }
    },
  },
  plugins: [],
}
