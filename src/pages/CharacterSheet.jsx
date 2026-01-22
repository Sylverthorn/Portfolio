import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Terminal, Clock, Award, User } from 'lucide-react';

const CharacterSheet = () => {
  // Soft Skills as "System Stats"
  const stats = [
    { label: 'Administration Système', value: 90, color: 'bg-rpg-gold' },
    { label: 'Réseaux & Sécurité', value: 88, color: 'bg-rpg-mana' },
    { label: 'Troubleshooting', value: 92, color: 'bg-rpg-crimson' },
    { label: 'Documentation & Rigueur', value: 85, color: 'bg-purple-500' },
    { label: 'Travail d\'Équipe', value: 87, color: 'bg-rpg-neon' },
  ];

  // Expérience / Formation as "System Logs"
  const timeline = [
    { year: '2023 - 2026', title: 'BUT Réseaux & Télécommunications', subtitle: 'Parcours Cybersécurité - IUT de Colmar', desc: 'Administration système Linux/Windows, sécurité des infrastructures, virtualisation, scripting Python/Bash, et protocoles réseau avancés.' },
    { year: '2020 - 2023', title: 'Baccalauréat Général', subtitle: 'Spécialités Maths, SVT & Physique - Mention Bien', desc: 'Fondamentaux scientifiques en mathématiques, sciences de la vie et de la terre, et physique-chimie.' },
  ];

  return (
    <div className="pt-24 pb-32 px-4 container mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        
        {/* LEFT COLUMN: ID CARD */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rpg-card p-6 text-center border-t-4 border-t-rpg-gold">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full border-2 border-rpg-gold/50 p-1">
              <div className="w-full h-full rounded-full bg-rpg-slate overflow-hidden flex items-center justify-center">
                 <User size={64} className="text-rpg-muted" />
              </div>
              <div className="absolute bottom-0 right-0 bg-rpg-dark border border-rpg-gold text-rpg-gold text-xs font-bold px-2 py-1 rounded-full">
                LVL 21
              </div>
            </div>
            
            <h2 className="text-2xl font-display text-white mb-1">YANIS KORICHI</h2>
            <div className="text-rpg-gold text-sm font-mono mb-4 tracking-widest">SYSADMIN // SEC_OPS</div>
            
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-left bg-black/30 p-3 rounded border border-rpg-gold/10">
              <span className="text-rpg-muted">AGE:</span> <span className="text-right text-rpg-text">21 ANS</span>
              <span className="text-rpg-muted">LOCATION:</span> <span className="text-right text-rpg-text">COLMAR</span>
              <span className="text-rpg-muted">PERMIS:</span> <span className="text-right text-rpg-text">B</span>
              <span className="text-rpg-muted">STATUS:</span> <span className="text-right text-rpg-mana">ONLINE</span>
            </div>
            
            <div className="mt-6 flex justify-center gap-4">
               {/* Badges / Medals Placeholder */}
               <Award className="text-rpg-crimson" size={20} />
               <Shield className="text-rpg-gold" size={20} />
               <Brain className="text-rpg-mana" size={20} />
            </div>
          </div>

          {/* Languages / Tools */}
          <div className="rpg-card p-6">
            <h3 className="font-display text-rpg-gold mb-4 flex items-center gap-2">
              <Terminal size={18} /> PROTOCOLS
            </h3>
            <div className="space-y-3">
               <div className="flex justify-between text-sm font-mono">
                  <span>FRANÇAIS</span>
                  <span className="text-rpg-gold">NATIVE</span>
               </div>
               <div className="flex justify-between text-sm font-mono">
                  <span>ANGLAIS</span>
                  <span className="text-rpg-mana">B2 (TECH)</span>
               </div>
               <div className="flex justify-between text-sm font-mono">
                  <span>ALLEMAND</span>
                  <span className="text-rpg-crimson">A2</span>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DATA */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* BIO SECTION */}
          <div className="rpg-card p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain size={100} />
             </div>
             <h3 className="font-display text-2xl text-rpg-gold mb-4 border-b border-rpg-gold/20 pb-2">
                USER_LOGS
             </h3>
             <p className="text-rpg-text leading-relaxed font-sans text-lg">
                Étudiant en 3ème année de BUT Réseaux & Télécommunications parcours Cybersécurité à l'IUT de Colmar. 
                Passionné par l'administration système, la sécurité des infrastructures et les réseaux informatiques.
                <br/><br/>
                Spécialisé dans la configuration et la maintenance de serveurs Linux/Windows, la virtualisation, 
                la supervision réseau et la sécurisation des infrastructures IT.
                <br/><br/>
                Mon objectif : construire et sécuriser des architectures réseau robustes tout en maintenant une veille technologique active.
             </p>
          </div>

          {/* STATS SECTION */}
          <div className="rpg-card p-6">
             <h3 className="font-display text-xl text-rpg-gold mb-6 flex items-center gap-2">
                <Zap size={20} /> CORE_MODULES (Soft Skills)
             </h3>
             <div className="space-y-5">
                {stats.map((stat, index) => (
                   <div key={index}>
                      <div className="flex justify-between mb-1">
                         <span className="font-mono text-xs text-rpg-text uppercase">{stat.label}</span>
                         <span className="font-mono text-xs text-rpg-gold">{stat.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-rpg-gold/10">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stat.value}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                         />
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* TIMELINE SECTION */}
          <div className="rpg-card p-6">
             <h3 className="font-display text-xl text-rpg-gold mb-6 flex items-center gap-2">
                <Clock size={20} /> SYSTEM_HISTORY
             </h3>
             <div className="space-y-6 relative border-l-2 border-rpg-gold/20 ml-3 pl-8">
                {timeline.map((item, index) => (
                   <div key={index} className="relative">
                      {/* Dot */}
                      <div className="absolute -left-[39px] top-1 w-5 h-5 bg-rpg-dark border-2 border-rpg-gold rounded-full flex items-center justify-center">
                         <div className="w-2 h-2 bg-rpg-gold rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="font-mono text-xs text-rpg-mana mb-1">{item.year}</div>
                      <h4 className="text-lg text-white font-bold">{item.title}</h4>
                      <div className="text-rpg-gold text-sm italic mb-2">{item.subtitle}</div>
                      <p className="text-sm text-rpg-muted">{item.desc}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default CharacterSheet;
