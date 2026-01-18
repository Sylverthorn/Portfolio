import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Globe, Server, Code, Eye, Lock, Network, X, Cpu, Terminal } from 'lucide-react';

// Data Details
const SKILL_DATA = {
  "admin-sys": {
    title: "Administrer les réseaux et l'Internet",
    icon: Server,
    color: "rpg-mana",
    desc: "Mise en place et gestion d'infrastructures systèmes complexes. Administration de serveurs et services réseaux essentiels.",
    techs: ["Linux (Debian/RedHat)", "Windows Server (AD, DNS, DHCP)", "Virtualisation (Proxmox, VMware)", "Docker"]
  },
  "connect": {
    title: "Connecter les entreprises",
    icon: Network,
    color: "rpg-mana",
    desc: "Conception et déploiement d'architectures réseaux LAN/WAN. Interconnexion de sites distants et gestion du trafic.",
    techs: ["Cisco IOS", "Routage (OSPF, BGP)", "Commutation (VLAN, STP)", "VPN / Tunneling"]
  },
  "tools": {
    title: "Créer des outils R&T",
    icon: Code,
    color: "rpg-mana",
    desc: "Développement de scripts d'automatisation et d'applications métiers pour la supervision et la gestion.",
    techs: ["Python", "Bash Scripting", "Git / GitLab", "Web (HTML/CSS/JS)"]
  },
  "cyber-admin": {
    title: "Administrer un SI Sécurisé",
    icon: Lock,
    color: "rpg-crimson",
    desc: "Durcissement des systèmes et mise en oeuvre de politiques de sécurité strictes pour protéger l'intégrité des données.",
    techs: ["Firewalling (Pfsense, Fortinet)", "Hardening Système", "Segmentation Réseau", "Chiffrement (PKI)"]
  },
  "cyber-watch": {
    title: "Surveiller un SI Sécurisé",
    icon: Eye,
    color: "rpg-crimson",
    desc: "Surveillance active des flux et détection d'intrusions. Analyse post-incident et veille technologique.",
    techs: ["SIEM", "IDS / IPS (Suricata)", "Analyse de Logs", "Wireshark / Packet Analysis"]
  },
};

const SkillNode = ({ id, x, y, onClick, connections = [] }) => {
  const skill = SKILL_DATA[id];
  const Icon = skill.icon;
  const color = skill.color;

  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
      
      {/* Connections (Lines) */}
      <svg className="absolute top-1/2 left-1/2 overflow-visible pointer-events-none -z-10 w-full h-full">
         {connections.map((targetId, idx) => {
            // Very simple calculation assuming target positions are known or strictly layout based.
            // For a static SVG approach within the component, we usually need coordinates. 
            // Here we will use a different approach for lines in the main component.
            return null; 
         })}
      </svg>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onClick(skill)}
        className={`relative group w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/80 border-2 border-${color} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_currentColor] text-${color}`}
      >
        <Icon size={32} md:size={40} />
        
        {/* Pulsing Glitch Effect Behind */}
        <div className={`absolute inset-0 rounded-full border border-${color} opacity-0 group-hover:opacity-100 animate-ping -z-10`} />
      </motion.button>
      
      <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <div className={`bg-black/90 text-${color} text-xs font-display border border-${color}/30 px-2 py-1 uppercase tracking-wider`}>
            {skill.title}
        </div>
      </div>
    </div>
  );
};

// SVG Connector Component
const Connector = ({ start, end, color = "white" }) => {
    // start and end are {x, y} percentages
    // We need to convert to rough pixels or use strict SVG coordinate space relative to container
    // For simplicity in this responsive layout, we'll use a full size SVG overlay
    
    return (
        <line 
            x1={`${start.x}%`} 
            y1={`${start.y}%`} 
            x2={`${end.x}%`} 
            y2={`${end.y}%`} 
            stroke={color === 'rpg-mana' ? '#00ccff' : '#ff3333'} 
            strokeWidth="2" 
            strokeDasharray="5,5"
            className="animate-pulse opacity-40"
        />
    );
};

const SkillTree = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Position Configuration (Responsive % based)
  const NODE_POSITIONS = {
    // Level 1: Foundations (Bottom)
    'admin-sys': { x: 35, y: 80, color: 'rpg-mana' },
    'connect': { x: 65, y: 80, color: 'rpg-mana' },
    
    // Level 2: Tools (Middle)
    'tools': { x: 50, y: 50, color: 'rpg-mana' },
    
    // Level 3: Cyber (Top)
    'cyber-admin': { x: 35, y: 20, color: 'rpg-crimson' },
    'cyber-watch': { x: 65, y: 20, color: 'rpg-crimson' }
  };

  const CONNECTIONS = [
    { start: 'admin-sys', end: 'tools', color: 'rpg-mana' },
    { start: 'connect', end: 'tools', color: 'rpg-mana' },
    { start: 'tools', end: 'cyber-admin', color: 'rpg-crimson' },
    { start: 'tools', end: 'cyber-watch', color: 'rpg-crimson' },
    // Cross connections?
    { start: 'cyber-admin', end: 'cyber-watch', color: 'rpg-crimson' }
  ];

  return (
    <div className="pt-20 pb-20 px-4 h-[calc(100vh-80px)] overflow-hidden relative">
      
      <h2 className="text-3xl md:text-4xl text-center text-rpg-gold font-display mb-8 drop-shadow-neon-gold z-30 relative pointer-events-none">
        ARBRE DE PROTOCOLES
      </h2>

      {/* Tree Container */}
      <div className="w-full max-w-4xl mx-auto h-[600px] relative bg-rpg-slate/20 border border-rpg-gold/10 rounded-xl backdrop-blur-sm shadow-2xl overflow-hidden mt-8">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* SVG Layer for Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {CONNECTIONS.map((conn, i) => (
             <Connector 
                key={i} 
                start={NODE_POSITIONS[conn.start]} 
                end={NODE_POSITIONS[conn.end]} 
                color={conn.color} 
             />
          ))}
        </svg>

        {/* Nodes */}
        {Object.keys(NODE_POSITIONS).map((key) => (
            <SkillNode 
                key={key}
                id={key}
                x={NODE_POSITIONS[key].x}
                y={NODE_POSITIONS[key].y}
                onClick={setSelectedSkill}
            />
        ))}

        {/* Decorative Corner Stats */}
        <div className="absolute bottom-4 left-4 font-mono text-xs text-rpg-mana">
            SYSTEM_INTEGRITY: 100%<br/>
            NODES_ACTIVE: 5/5
        </div>
      </div>

      {/* MODAL / SIDE PANEL */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-black/95 border-l-2 border-rpg-gold shadow-[0_0_50px_rgba(0,0,0,0.8)] z-50 p-8 overflow-y-auto"
          >
             <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-rpg-muted hover:text-rpg-crimson transition-colors"
             >
                <X size={32} />
             </button>

             <div className="mt-8 space-y-6">
                <div className={`w-16 h-16 rounded-lg bg-black border border-${selectedSkill.color} flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                    <selectedSkill.icon className={`text-${selectedSkill.color}`} size={32} />
                </div>

                <div className="text-center">
                    <h3 className={`text-2xl font-display font-bold text-${selectedSkill.color} uppercase mb-2`}>
                        {selectedSkill.title}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rpg-text to-transparent mx-auto opacity-30"></div>
                </div>

                <div className="rpg-card p-4 bg-rpg-slate/50">
                    <p className="text-rpg-text font-sans leading-relaxed text-sm">
                        {selectedSkill.desc}
                    </p>
                </div>

                <div>
                    <h4 className="flex items-center gap-2 text-rpg-gold font-display text-lg mb-4">
                        <Terminal size={18} /> STACK TECHNIQUE
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                        {selectedSkill.techs.map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 p-2 bg-black/40 border border-white/5 rounded hover:border-rpg-gold/30 transition-colors">
                                <Cpu size={14} className="text-rpg-muted" />
                                <span className="font-mono text-xs text-rpg-text">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 text-center">
                    <button className="rpg-btn w-full">
                        VOIR LES PROJETS ASSOCIÉS
                    </button>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for Modal */}
      {selectedSkill && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}
    </div>
  );
};

export default SkillTree;
