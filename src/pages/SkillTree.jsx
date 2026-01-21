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
    description: "Conception et administration complète de l'infrastructure réseau informatique d'une entreprise. Installation et déploiement de services réseau pour les clients d'opérateurs de télécommunication, en respectant les principes de sécurité et les règles métiers.",
    details: [
      "Conception de l'infrastructure réseau en choisissant les solutions et technologies adaptées",
      "Installation et administration des services réseau (DNS, DHCP, Active Directory)",
      "Déploiement de solutions fixes pour les clients d'opérateurs télécoms",
      "Intervention sur les équipements réseaux et télécommunications",
      "Configuration des fonctions de base du réseau local et administration des systèmes d'exploitation",
      "Identification et résolution rigoureuse des dysfonctionnements réseau",
      "Installation et configuration de postes clients avec documentation des procédures",
      "Veille technologique continue pour maintenir les compétences à jour"
    ],
    competences: [
      "CE 1.01 : Choix de solutions et technologies réseaux adaptées",
      "CE 1.02 : Respect des principes de sécurité informatique",
      "CE 1.03 : Approche rigoureuse de résolution des dysfonctionnements",
      "CE 1.04 : Respect des règles métiers",
      "CE 1.05 : Veille technologique active"
    ],
    apprentissages: [
      "AC 11.01 : Maîtrise des lois fondamentales de l'électricité pour intervenir sur les équipements",
      "AC 11.02 : Compréhension de l'architecture et des fondements des systèmes numériques",
      "AC 11.03 : Configuration des fonctions de base du réseau local",
      "AC 11.04 : Maîtrise des systèmes d'exploitation pour la configuration et l'administration",
      "AC 11.05 : Identification et signalement des dysfonctionnements réseau",
      "AC 11.06 : Installation de postes clients et documentation des procédures"
    ],
    techs: ["Linux", "Windows Server", "Cisco IOS", "DNS", "DHCP", "Active Directory", "Virtualisation", "Docker", "Supervision"]
  },
  "connect-users": {
    id: "connect-users",
    name: "Connecter les entreprises et les usagers",
    branch: "fondamental",
    icon: Network,
    color: "rpg-mana",
    description: "Déploiement complet des infrastructures de transmission pour interconnecter entreprises et usagers. Mise en service des équipements d'accès fixe et mobile, administration des accès sans fil et déploiement des systèmes de communications. Communication avec les clients et acteurs impliqués, parfois en anglais, avec une démarche scientifique rigoureuse.",
    details: [
      "Déploiement et caractérisation des supports et systèmes de transmission",
      "Mise en service et administration des équipements d'accès fixe ou mobile d'opérateurs télécoms",
      "Déploiement et administration des accès sans fil pour l'entreprise (Wi-Fi, 4G/5G)",
      "Déploiement des systèmes de communications unifiées",
      "Mesure, analyse et documentation des signaux de transmission",
      "Connexion et configuration des systèmes de ToIP (Téléphonie sur IP)",
      "Architecture LAN/WAN avec plans d'adressage optimisés",
      "Proposition de solutions respectueuses de l'environnement",
      "Communication technique avec clients et collaborateurs, adaptation du discours"
    ],
    competences: [
      "CE 2.01 : Communication avec le client et les acteurs impliqués, parfois en anglais",
      "CE 2.02 : Démarche scientifique dans l'analyse et le déploiement",
      "CE 2.03 : Choix de solutions et technologies adaptées",
      "CE 2.04 : Proposition de solutions respectueuses de l'environnement"
    ],
    apprentissages: [
      "AC 12.01 : Mesure, analyse et commentaire des signaux",
      "AC 12.02 : Caractérisation des systèmes de transmissions et modélisation mathématique",
      "AC 12.03 : Déploiement des supports de transmission (fibre, cuivre, sans-fil)",
      "AC 12.04 : Connexion et configuration des systèmes de ToIP",
      "AC 12.05 : Communication avec tiers et adaptation du discours à l'interlocuteur"
    ],
    techs: ["VLAN", "VPN", "OSPF", "BGP", "QoS", "ToIP", "Wi-Fi 6", "Fibre Optique", "SDH/WDM", "4G/5G", "SIP", "Unified Communications"]
  },
  "create-tools": {
    id: "create-tools",
    name: "Créer des outils et applications informatiques",
    branch: "fondamental",
    icon: Code,
    color: "rpg-mana",
    description: "Conception, déploiement et maintenance du système d'information d'une entreprise. Automatisation du déploiement et de la maintenance des outils logiciels. Développement d'outils informatiques à usage interne, en étant à l'écoute des besoins clients et en intégrant les problématiques de sécurité dès la conception.",
    details: [
      "Conception et déploiement du système d'information d'entreprise",
      "Automatisation du déploiement et de la maintenance des outils logiciels",
      "Développement d'outils informatiques à usage interne d'une équipe",
      "Utilisation des systèmes informatiques et leurs outils de développement",
      "Lecture, exécution, correction et modification de programmes existants",
      "Traduction d'algorithmes dans des langages adaptés à l'environnement",
      "Conception d'architectures et technologies de sites Web",
      "Choix et argumentation des mécanismes de gestion de données",
      "Documentation complète du travail réalisé et intégration au travail collaboratif"
    ],
    competences: [
      "CE 3.01 : Écoute active des besoins du client",
      "CE 3.02 : Documentation rigoureuse du travail réalisé",
      "CE 3.03 : Utilisation pertinente des outils numériques",
      "CE 3.04 : Choix des outils de développement adaptés",
      "CE 3.05 : Intégration des problématiques de sécurité"
    ],
    apprentissages: [
      "AC 13.01 : Utilisation d'un système informatique et ses outils",
      "AC 13.02 : Lecture, exécution, correction et modification de programmes",
      "AC 13.03 : Traduction d'algorithmes dans un langage et environnement donné",
      "AC 13.04 : Connaissance de l'architecture et des technologies d'un site Web",
      "AC 13.05 : Choix des mécanismes de gestion de données adaptés et argumentation",
      "AC 13.06 : Intégration dans un environnement de développement collaboratif"
    ],
    techs: ["Python", "Bash", "JavaScript", "React", "Node.js", "Git", "API REST", "Ansible", "Docker", "CI/CD", "PostgreSQL", "MongoDB"]
  },

  // BRANCH 2: Cybersécurité (Droite - Rouge)
  "secure-admin": {
    id: "secure-admin",
    name: "Administrer un SI sécurisé",
    branch: "cyber",
    icon: Shield,
    color: "rpg-crimson",
    requires: ["center"],
    description: "Analyse de l'existant et étude des besoins de sécurité d'une petite structure. Évolution et mise en conformité du système d'information, en visant un juste compromis entre exigences de sécurité et contraintes d'utilisation. Respect des normes, du cadre juridique et intégration des dernières technologies de cybersécurité.",
    details: [
      "Analyse de l'existant et identification des besoins de sécurité",
      "Évolution et mise en conformité du système d'information",
      "Application des bonnes pratiques et recommandations de cybersécurité",
      "Mise en œuvre des outils fondamentaux de sécurisation de l'infrastructure réseau",
      "Sécurisation complète des services (hardening, durcissement)",
      "Configuration de pare-feu et règles de filtrage avancées",
      "Choix et implémentation d'outils cryptographiques adaptés",
      "Gestion des identités et contrôle d'accès (IAM)",
      "Connaissance des différents types d'attaque et contre-mesures",
      "Sensibilisation efficace des utilisateurs aux bonnes pratiques",
      "Travail en équipe et compréhension de documentation technique en anglais"
    ],
    competences: [
      "CE 4.01 : Juste compromis entre exigences de sécurité et contraintes d'utilisation",
      "CE 4.02 : Respect des normes et du cadre juridique",
      "CE 4.03 : Intégration des dernières technologies",
      "CE 4.04 : Travail en équipe efficace",
      "CE 4.05 : Sensibilisation efficace des utilisateurs"
    ],
    apprentissages: [
      "AC 24.01 Cyber : Connaissance et utilisation des bonnes pratiques de cybersécurité",
      "AC 24.02 Cyber : Mise en œuvre des outils fondamentaux de sécurisation réseau",
      "AC 24.03 Cyber : Sécurisation complète des services",
      "AC 24.04 Cyber : Choix des outils cryptographiques adaptés aux besoins fonctionnels",
      "AC 24.05 Cyber : Connaissance des différents types d'attaque",
      "AC 24.06 Cyber : Compréhension des documents techniques en anglais"
    ],
    techs: ["Firewall", "PKI", "IPsec", "ACL", "SELinux", "Segmentation", "IDS/IPS", "SIEM", "Cryptographie", "OpenSSL", "VPN", "RGPD"]
  },
  "monitor-security": {
    id: "monitor-security",
    name: "Surveiller un SI sécurisé",
    branch: "cyber",
    icon: Eye,
    color: "rpg-crimson",
    requires: ["center"],
    description: "Surveillance active et analyse continue du système d'information. Réalisation d'audits de sécurité et gestion complète des incidents de sécurité. Veille permanente, mise à jour des protections, automatisation des tâches de surveillance et respect des contrats de service.",
    details: [
      "Surveillance active et analyse continue du système d'information",
      "Réalisation d'audits de sécurité et tests d'intrusion",
      "Gestion complète des incidents de sécurité (détection, réponse, remédiation)",
      "Veille permanente sur les menaces et vulnérabilités émergentes",
      "Réalisation des mises à jour critiques de sécurité",
      "Automatisation des tâches de surveillance et d'alerting",
      "Surveillance du comportement du réseau et détection d'anomalies",
      "Administration des protections contre les logiciels malveillants",
      "Prise en main et utilisation d'outils de test de pénétration réseau/système",
      "Déploiement de solutions SIEM et corrélation d'événements",
      "Configuration d'IDS/IPS (Suricata, Snort) et analyse de logs",
      "Forensics et investigation post-incident",
      "Veille au respect des contrats et conformité du SI"
    ],
    competences: [
      "CE 5.01 : Veille permanente sur les menaces et vulnérabilités",
      "CE 5.02 : Réalisation des mises à jour critiques",
      "CE 5.03 : Automatisation des tâches de surveillance",
      "CE 5.04 : Intégration dans une équipe de sécurité",
      "CE 5.05 : Surveillance du comportement du réseau",
      "CE 5.06 : Respect des contrats et conformité des obligations du SI"
    ],
    apprentissages: [
      "AC 25.01 Cyber : Administration des protections contre les logiciels malveillants",
      "AC 25.02 Cyber : Prise en main des outils de test de pénétration réseau/système"
    ],
    techs: ["SIEM", "IDS/IPS", "Wireshark", "ELK Stack", "Splunk", "Threat Intel", "Suricata", "Snort", "Metasploit", "Nmap", "Burp Suite", "Antivirus/EDR", "SOC"]
  }
};

const CenterAvatar = ({ onClick }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-30 cursor-pointer group"
      style={{
        marginLeft: '-80px',
        marginTop: '-80px'
      }}
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
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        marginLeft: '-40px',
        marginTop: '-40px'
      }}
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
    "admin-network": { x: 20, y: 30, delay: 0.3 },
    "connect-users": { x: 15, y: 50, delay: 0.4 },
    "create-tools": { x: 20, y: 70, delay: 0.5 },

    // RIGHT BRANCH: Cybersécurité (Rouge) - Arc droit
    "secure-admin": { x: 80, y: 40, delay: 0.6 },
    "monitor-security": { x: 80, y: 60, delay: 0.7 }
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
      <div className="flex-1 relative max-w-7xl mx-auto w-full h-[700px]">
        
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
          className="absolute left-8 top-[10%] -translate-y-1/2 z-5"
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
          className="absolute right-8 top-[10%] -translate-y-1/2 z-5"
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

                {selectedSkill.competences && (
                  <div>
                    <h4 className="text-rpg-gold font-display text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ChevronRight size={16} /> Composantes Essentielles
                    </h4>
                    <ul className="space-y-2">
                      {selectedSkill.competences.map((comp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-rpg-text"
                        >
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${selectedSkill.color === 'rpg-mana' ? 'bg-rpg-mana' : 'bg-rpg-crimson'}`} />
                          {comp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedSkill.apprentissages && (
                  <div>
                    <h4 className="text-rpg-gold font-display text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ChevronRight size={16} /> Apprentissages Critiques
                    </h4>
                    <ul className="space-y-2">
                      {selectedSkill.apprentissages.map((ac, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-rpg-text"
                        >
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${selectedSkill.color === 'rpg-mana' ? 'bg-rpg-mana' : 'bg-rpg-crimson'}`} />
                          {ac}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

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
