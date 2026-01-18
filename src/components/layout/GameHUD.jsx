import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { User, Cpu, FolderGit2, Send, Home } from 'lucide-react';

const GameHUD = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: Home, label: 'HUB' },
    { path: '/character', icon: User, label: 'Profil' },
    { path: '/skills', icon: Cpu, label: 'Système' },
    { path: '/quests', icon: FolderGit2, label: 'Projets' },
    { path: '/shrine', icon: Send, label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar - Status (Example: "Online", Level, etc.) */}
      <div className="fixed top-0 left-0 w-full p-4 z-50 pointer-events-none flex justify-between items-start">
        <div className="rpg-card px-4 py-2 pointer-events-auto">
          <h1 className="text-xl font-bold tracking-widest text-rpg-gold font-display">Y. KORICHI</h1>
          <div className="text-xs text-rpg-muted uppercase font-mono tracking-tighter">SysAdmin &amp; SecOps</div>
        </div>
        
        <div className="rpg-card px-4 py-2 pointer-events-auto font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-rpg-gold">SYS</span> 
              <span className="text-rpg-crimson">100%</span>
            </div>
            <div className="w-32 h-1 bg-rpg-slate mt-1 mb-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-rpg-crimson w-full shadow-[0_0_5px_theme('colors.rpg.crimson')]"></div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-rpg-gold">NET</span> 
              <span className="text-rpg-mana">ONLINE</span>
            </div>
            <div className="w-32 h-1 bg-rpg-slate mt-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-rpg-mana w-3/4 animate-pulse shadow-[0_0_5px_theme('colors.rpg.mana')]"></div>
            </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 flex justify-center items-end pointer-events-none">
        <nav className="rpg-card px-6 py-2 flex gap-8 pointer-events-auto clip-path-polygon-[10%_0,100%_0,100%_100%,0_100%]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center gap-1 group transition-all duration-300
                ${isActive ? 'text-rpg-gold -translate-y-1' : 'text-rpg-muted hover:text-rpg-text'}
              `}
            >
              <div className={`
                p-2 rounded-sm border transition-all duration-300 relative
                ${item.path === location.pathname 
                  ? 'bg-rpg-gold/10 border-rpg-gold shadow-neon-gold' 
                  : 'bg-transparent border-transparent group-hover:border-rpg-gold/30'}
              `}>
                <item.icon size={20} strokeWidth={1.5} />
                {/* Tech Corner Accents */}
                {item.path === location.pathname && (
                    <>
                        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-rpg-gold"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-rpg-gold"></div>
                    </>
                )}
              </div>
              <span className="text-[10px] font-display uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-rpg-slate px-2 py-1 border border-rpg-gold/30 text-rpg-gold">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default GameHUD;
