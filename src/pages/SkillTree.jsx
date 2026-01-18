import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Network, Code, Shield, Eye, X, ChevronRight, User } from 'lucide-react';

const SKILLS_DATA = {
  // BRANCH 1: Fondamentaux (Gauche - Bleu)
  "admin-network": {
    id: "admin-network",
    name: "Administrer les réseaux et l'Internet",
    branch: "fondamental",
    icon: Server,
    color: "rpg-mana",
    description: "Maîtrise de l'administration des infrastructures réseaux et des services Internet. Gestion des serveurs, protocoles et équipements d'interconnexion.",
    details: [
      "Configuration et maintenance de serveurs Linux/Windows",
      "Gestion des services essentiels (DNS, DHCP, Active Directory)",
      "Administration des équipements Cisco (Routeurs, Switches)",
      "Déploiement et supervision d'infrastructures virtualisées"
    ],
    techs: ["Linux", "Windows Server", "Cisco IOS", "Virtualisation", "Docker"]
  },
  "connect-users": {
    id: "connect-users",
    name: "Connecter les entreprises et les usagers",
    branch: "fondamental",
    icon: Network,
    color: "rpg-mana",
    description: "Conception et déploiement d'architectures réseau pour interconnecter sites distants et usagers. Garantie de la qualité de service et de la disponibilité.",
    details: [
      "Architecture LAN/WAN et plans d'adressage IP",
      "Configuration de VLANs et segmentation réseau",
      "Mise en place de VPN pour l'accès distant",
      "Optimisation des flux et gestion de la QoS"
    ],
    techs: ["VLAN", "VPN", "OSPF", "BGP", "QoS", "Téléphonie IP"]
  },
  "create-tools": {
    id: "create-tools",
    name: "Créer des outils et applications informatiques",
    branch: "fondamental",
    icon: Code,
    color: "rpg-mana",
    description: "Développement d'outils personnalisés pour automatiser les tâches d'administration et améliorer la gestion des infrastructures R&T.",
    details: [
      "Scripts d'automatisation en Python et Bash",
      "Développement d'interfaces web pour la supervision",
      "Intégration continue et gestion de versions",
      "APIs REST pour la gestion d'équipements"
    ],
    techs: ["Python", "Bash", "JavaScript", "Git", "API REST", "Ansible"]
  },

  // BRANCH 2: Cybersécurité (Droite - Rouge)
  "secure-admin": {
    id: "secure-admin",
    name: "Administrer un SI sécurisé",
    branch: "cyber",
    icon: Shield,
    color: "rpg-crimson",
    requires: ["center"],
    description: "Mise en œuvre de politiques de sécurité strictes pour protéger l'intégrité des systèmes d'information. Durcissement et segmentation.",
    details: [
      "Hardening des systèmes et services",
      "Configuration de pare-feu et règles de filtrage",
      "Gestion des identités et contrôle d'accès (IAM)",
      "Chiffrement des communications et des données"
    ],
    techs: ["Firewall", "PKI", "IPsec", "ACL", "SELinux", "Segmentation"]
  },
  "monitor-security": {
    id: "monitor-security",
    name: "Surveiller un SI sécurisé",
    branch: "cyber",
    icon: Eye,
    color: "rpg-crimson",
    requires: ["center"],
    description: "Surveillance active des flux et détection des anomalies. Analyse d'incidents et réponse aux menaces en temps réel.",
    details: [
      "Déploiement de solutions SIEM",
      "Configuration d'IDS/IPS (Suricata, Snort)",
      "Analyse de logs et corrélation d'événements",
      "Forensics et investigation post-incident"
    ],
    techs: ["SIEM", "IDS/IPS", "Wireshark", "ELK Stack", "Splunk", "Threat Intel"]
  }
};

const CenterAvatar = ({ onClick }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-rpg-mana via-rpg-gold to-rpg-crimson opacity-30 blur-2xl"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Avatar Container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-rpg-slate to-black border-4 border-rpg-gold shadow-[0_0_40px_rgba(255,215,0,0.4)] flex items-center justify-center overflow-hidden">
        
        {/* Inner Circles */}
        <div className="absolute inset-2 rounded-full border border-rpg-gold/30" />
        <div className="absolute inset-4 rounded-full border border-rpg-gold/20" />
        
        {/* Icon */}
        <User size={48} className="text-rpg-gold z-10" strokeWidth={1.5} />
        
        {/* Rotating Border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 215, 0, 0.4) 50%, transparent 100%)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Label */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <div className="bg-black/95 border border-rpg-gold px-4 py-1 text-xs font-display uppercase tracking-[0.3em] text-rpg-gold backdrop-blur-sm">
          Y. KORICHI
        </div>
      </div>
    </motion.div>
  );
};

const SkillNode = ({ skill, position, onSelect, isSelected }) => {
  const Icon = skill.icon;
  const colorClass = skill.color === 'rpg-mana' 
    ? 'border-rpg-mana text-rpg-mana shadow-[0_0_15px_rgba(0,204,255,0.3)]' 
    : 'border-rpg-crimson text-rpg-crimson shadow-[0_0_15px_rgba(255,51,51,0.3)]';
  const bgClass = skill.color === 'rpg-mana' ? 'from-rpg-mana/20' : 'from-rpg-crimson/20';

  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: position.delay || 0, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(skill)}
    >
      <div className="relative group">
        {/* Glow Effect when selected */}
        {isSelected && (
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-radial ${bgClass} to-transparent blur-xl -z-10`}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {/* Node Circle */}
        <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/90 border-2 ${colorClass} flex items-center justify-center transition-all duration-300 ${isSelected ? 'scale-110 border-4' : ''}`}>
          <Icon size={28} strokeWidth={1.5} />
          
          {/* Pulse Ring on Hover */}
          <div className={`absolute inset-0 rounded-full border ${skill.color === 'rpg-mana' ? 'border-rpg-mana' : 'border-rpg-crimson'} opacity-0 group-hover:opacity-100 animate-ping`} />
        </div>

        {/* Hover Label */}
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 text-center pointer-events-none">
          <div className={`bg-black/95 backdrop-blur-sm border ${skill.color === 'rpg-mana' ? 'border-rpg-mana/40' : 'border-rpg-crimson/40'} px-2 py-1 text-[10px] font-display uppercase tracking-wider ${skill.color === 'rpg-mana' ? 'text-rpg-mana' : 'text-rpg-crimson'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            {skill.name.length > 30 ? skill.name.substring(0, 30) + '...' : skill.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BranchConnection = ({ from, to, color, delay = 0 }) => {
  const strokeColor = color === 'rpg-mana' ? '#00ccff' : '#ff3333';

  return (
    <motion.line
      x1={`${from.x}%`}
      y1={`${from.y}%`}
      x2={`${to.x}%`}
      y2={`${to.y}%`}
      stroke={strokeColor}
      strokeWidth="2.5"
      strokeDasharray="8,4"
      strokeOpacity="0.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
    />
  );
};

const SkillTree = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Position centrale
  const CENTER = { x: 50, y: 50 };

  // Positions en éventail depuis le centre
  const POSITIONS = {
    // LEFT BRANCH: Fondamental (Bleu) - Arc gauche
    "admin-network": { x: 15, y: 30, delay: 0.3 },
    "connect-users": { x: 10, y: 50, delay: 0.4 },
    "create-tools": { x: 15, y: 70, delay: 0.5 },

    // RIGHT BRANCH: Cybersécurité (Rouge) - Arc droit
    "secure-admin": { x: 85, y: 40, delay: 0.6 },
    "monitor-security": { x: 85, y: 60, delay: 0.7 }
  };

  // Connections depuis le centre vers chaque nœud
  const connections = [
    // Left Branch (Fondamental - Blue)
    { from: CENTER, to: POSITIONS["admin-network"], color: "rpg-mana", delay: 0.3 },
    { from: CENTER, to: POSITIONS["connect-users"], color: "rpg-mana", delay: 0.4 },
    { from: CENTER, to: POSITIONS["create-tools"], color: "rpg-mana", delay: 0.5 },

    // Right Branch (Cyber - Red)
    { from: CENTER, to: POSITIONS["secure-admin"], color: "rpg-crimson", delay: 0.6 },
    { from: CENTER, to: POSITIONS["monitor-security"], color: "rpg-crimson", delay: 0.7 },
  ];

  return (
    <div className="pt-20 pb-20 px-4 min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-6 z-30 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl text-rpg-gold font-display tracking-[0.3em] drop-shadow-neon-gold mb-2"
        >
          ARBRE DE COMPÉTENCES
        </motion.h2>
        <p className="text-rpg-muted font-mono text-sm">CLICK_NODE_TO_UNLOCK_DETAILS</p>
      </div>

      {/* Tree Container */}
      <div className="flex-1 relative max-w-7xl mx-auto w-full min-h-[600px]">
        
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rpg-gold/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,215,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {connections.map((conn, i) => (
            <BranchConnection
              key={i}
              from={conn.from}
              to={conn.to}
              color={conn.color}
              delay={conn.delay}
            />
          ))}
        </svg>

        {/* Branch Labels */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-5"
        >
          <div className="flex items-center gap-3 rpg-card px-4 py-2 bg-rpg-mana/10 border-rpg-mana">
            <div className="w-3 h-3 rounded-full bg-rpg-mana animate-pulse" />
            <span className="text-rpg-mana font-display text-sm tracking-[0.3em] uppercase">Fondamental</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-5"
        >
          <div className="flex items-center gap-3 rpg-card px-4 py-2 bg-rpg-crimson/10 border-rpg-crimson">
            <span className="text-rpg-crimson font-display text-sm tracking-[0.3em] uppercase">Cybersécurité</span>
            <div className="w-3 h-3 rounded-full bg-rpg-crimson animate-pulse" />
          </div>
        </motion.div>

        {/* Central Avatar */}
        <CenterAvatar />

        {/* Skill Nodes */}
        {Object.values(SKILLS_DATA).map(skill => (
          <SkillNode
            key={skill.id}
            skill={skill}
            position={POSITIONS[skill.id]}
            onSelect={setSelectedSkill}
            isSelected={selectedSkill?.id === skill.id}
          />
        ))}
      </div>

      {/* Detail Panel (Side Drawer) - KEPT AS IS */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-rpg-slate/98 border-l-2 border-rpg-gold shadow-[-10px_0_50px_rgba(0,0,0,0.8)] z-50 overflow-y-auto"
            >
              <div className={`p-6 border-b ${selectedSkill.color === 'rpg-mana' ? 'border-rpg-mana/30 bg-gradient-to-r from-rpg-mana/10' : 'border-rpg-crimson/30 bg-gradient-to-r from-rpg-crimson/10'} to-transparent relative`}>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-rpg-text hover:text-rpg-crimson transition-colors p-2"
                >
                  <X size={24} />
                </button>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg border-2 ${selectedSkill.color === 'rpg-mana' ? 'border-rpg-mana bg-rpg-mana/10' : 'border-rpg-crimson bg-rpg-crimson/10'}`}>
                    <selectedSkill.icon size={32} className={selectedSkill.color === 'rpg-mana' ? 'text-rpg-mana' : 'text-rpg-crimson'} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-mono ${selectedSkill.color === 'rpg-mana' ? 'text-rpg-mana' : 'text-rpg-crimson'} mb-1`}>
                      {selectedSkill.branch === 'fondamental' ? '[ FONDAMENTAL ]' : '[ CYBERSÉCURITÉ ]'}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display text-white leading-tight">
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-rpg-gold font-display text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ChevronRight size={16} /> Synopsis
                  </h4>
                  <p className="text-rpg-text leading-relaxed font-sans">
                    {selectedSkill.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-rpg-gold font-display text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ChevronRight size={16} /> Capacités
                  </h4>
                  <ul className="space-y-2">
                    {selectedSkill.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-rpg-text"
                      >
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${selectedSkill.color === 'rpg-mana' ? 'bg-rpg-mana' : 'bg-rpg-crimson'}`} />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-rpg-gold font-display text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ChevronRight size={16} /> Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.techs.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="px-3 py-1.5 bg-black/60 border border-rpg-gold/30 text-rpg-gold font-mono text-xs rounded-sm hover:border-rpg-gold/60 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillTree;
