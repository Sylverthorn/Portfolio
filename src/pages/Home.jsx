import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="scanline"></div>
      
      {/* Central Tech Circle Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-rpg-gold/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-rpg-gold/20"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-rpg-gold/20"></div>
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-rpg-gold/20"></div>
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-rpg-gold/20"></div>
      </div>

      <div className="z-10 text-center space-y-8 p-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1 text-xs text-rpg-gold border border-rpg-gold/50 bg-rpg-slate shadow-neon-gold font-mono tracking-[0.3em]">
            SYSTEM_Online_
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-white mb-2 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)] tracking-tighter">
            YANIS KORICHI
            <span className="text-rpg-gold text-4xl align-top animate-pulse">.</span>
          </h1>
          
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-rpg-gold to-transparent mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >

          {/* Download CV Button */}
          <div className="flex justify-center">
            <motion.a
              href="/CV_Korichi_Yanis.pdf"
              download="CV_Korichi_Yanis.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-rpg-gold/10 border border-rpg-gold/50 text-rpg-gold hover:bg-rpg-gold/20 hover:border-rpg-gold transition-all duration-300 font-mono text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
            >
              <Download size={18} />
              Télécharger CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
