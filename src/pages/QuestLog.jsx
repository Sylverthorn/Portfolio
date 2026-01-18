import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Shield, Code, Network, Calendar, Award, ExternalLink, Filter, X, Image as ImageIcon } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Infrastructure Réseau Sécurisée - SAE 5.01",
    category: "network",
    status: "completed",
    difficulty: "expert",
    date: "2025",
    description: "Déploiement complet d'une infrastructure réseau d'entreprise multi-sites avec segmentation VLAN, routage dynamique OSPF et interconnexion VPN site-to-site.",
    longDescription: "Ce projet majeur consistait à concevoir et déployer une infrastructure réseau complète pour une entreprise fictive avec trois sites distants. L'architecture devait garantir la haute disponibilité, la sécurité des données et l'optimisation des flux réseau. Le projet incluait la configuration de routeurs Cisco, la mise en place de VLANs pour la segmentation, et l'établissement de tunnels VPN sécurisés entre les sites.",
    achievements: [
      "Architecture LAN/WAN 3 sites avec 200+ utilisateurs",
      "Configuration Cisco (Routeurs 2911, Switches Catalyst 3560)",
      "Mise en place de tunnels VPN IPsec",
      "Supervision avec Nagios et monitoring SNMP"
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800"
    ],
    techs: ["Cisco IOS", "OSPF", "VPN IPsec", "VLAN", "Nagios", "GNS3"],
    icon: Network,
    xpGained: "+850 XP"
  },
  {
    id: 2,
    title: "Système de Détection d'Intrusion - SAE 6.02",
    category: "cyber",
    status: "completed",
    difficulty: "expert",
    date: "2025",
    description: "Conception et déploiement d'une solution IDS/IPS avec corrélation d'événements pour la surveillance d'un réseau d'entreprise. Intégration SIEM et réponse aux incidents.",
    longDescription: "Projet de cybersécurité avancé visant à mettre en place un système complet de détection et prévention d'intrusions. Le système devait non seulement détecter les menaces en temps réel mais aussi corréler les événements pour identifier des attaques complexes. L'intégration avec un SIEM permettait une vue centralisée de la sécurité du réseau.",
    achievements: [
      "Déploiement Suricata en mode IPS",
      "Configuration de règles personnalisées",
      "Intégration ELK Stack pour la centralisation des logs",
      "Analyse forensique post-incident"
    ],
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    ],
    techs: ["Suricata", "ELK Stack", "Wireshark", "Snort", "SIEM", "Python"],
    icon: Shield,
    xpGained: "+1200 XP"
  },
  {
    id: 3,
    title: "Automatisation DevOps - Stage 2024",
    category: "dev",
    status: "completed",
    difficulty: "advanced",
    date: "2024",
    description: "Développement d'une chaîne CI/CD pour automatiser le déploiement d'infrastructures réseau avec Ansible et GitLab. Scripts Python pour la gestion de configurations.",
    longDescription: "Stage de 10 semaines axé sur l'automatisation des déploiements réseau. Développement d'une pipeline complète permettant de déployer et configurer automatiquement des équipements réseau à partir de templates Git. Réduction du temps de déploiement de 80% et élimination des erreurs manuelles.",
    achievements: [
      "Pipeline GitLab CI/CD complet",
      "Playbooks Ansible pour 50+ équipements",
      "Scripts Python de monitoring automatique",
      "Conteneurisation avec Docker"
    ],
    images: [
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    techs: ["Ansible", "GitLab CI", "Python", "Docker", "Bash", "Git"],
    icon: Code,
    xpGained: "+950 XP"
  },
  {
    id: 4,
    title: "Serveurs Web Haute Disponibilité - SAE 4.01",
    category: "network",
    status: "completed",
    difficulty: "advanced",
    date: "2024",
    description: "Mise en place d'une architecture web redondante avec load balancing, clustering de bases de données et plan de reprise d'activité. Garantie de disponibilité 99.9%.",
    longDescription: "Projet d'infrastructure critique visant à assurer une disponibilité maximale des services web. Architecture redondée sur plusieurs datacenters avec basculement automatique en cas de panne. Mise en place de mécanismes de réplication de données et de tests réguliers du PRA.",
    achievements: [
      "Configuration HAProxy pour load balancing",
      "Cluster MySQL en réplication master-slave",
      "Monitoring Prometheus + Grafana",
      "Documentation PRA complète"
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    techs: ["HAProxy", "Nginx", "MySQL", "Linux", "Prometheus", "Grafana"],
    icon: Server,
    xpGained: "+780 XP"
  },
  {
    id: 5,
    title: "Audit de Sécurité - SAE 6.01",
    category: "cyber",
    status: "completed",
    difficulty: "advanced",
    date: "2025",
    description: "Réalisation d'un audit de sécurité complet d'une infrastructure IT : tests d'intrusion, analyse de vulnérabilités, durcissement système et recommandations conformité ANSSI.",
    longDescription: "Audit de sécurité exhaustif d'une infrastructure réelle avec autorisation. Méthodologie professionnelle incluant reconnaissance passive, tests d'intrusion externes et internes, exploitation de vulnérabilités, et élévation de privilèges. Rapport détaillé avec classification des risques et plan de remédiation priorisé.",
    achievements: [
      "Pentest réseau avec Kali Linux",
      "Scan de vulnérabilités (Nessus, OpenVAS)",
      "Hardening serveurs selon ANSSI",
      "Rapport d'audit détaillé avec plan d'action"
    ],
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800"
    ],
    techs: ["Kali Linux", "Metasploit", "Nessus", "Nmap", "Burp Suite", "ANSSI"],
    icon: Shield,
    xpGained: "+1100 XP"
  },
  {
    id: 6,
    title: "Dashboard Supervision Réseau - Projet Personnel",
    category: "dev",
    status: "in-progress",
    difficulty: "intermediate",
    date: "2026",
    description: "Application web React pour la visualisation temps réel de métriques réseau. Interface moderne avec graphiques interactifs et alertes automatiques.",
    longDescription: "Projet personnel en cours de développement visant à créer un dashboard moderne pour la supervision réseau. L'application collecte des métriques en temps réel via SNMP et les affiche dans une interface intuitive. Système d'alertes configurable avec notifications push et email.",
    achievements: [
      "Frontend React + Tailwind CSS",
      "API REST Python/Flask",
      "Intégration WebSocket pour temps réel",
      "Système d'alertes par email"
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
    ],
    techs: ["React", "Python", "Flask", "Chart.js", "WebSocket", "SQLite"],
    icon: Code,
    xpGained: "+600 XP"
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Tous les projets', color: 'rpg-gold', icon: Award },
  { id: 'network', label: 'Réseaux', color: 'rpg-mana', icon: Network },
  { id: 'cyber', label: 'Cybersécurité', color: 'rpg-crimson', icon: Shield },
  { id: 'dev', label: 'Développement', color: 'rpg-gold', icon: Code }
];

const DIFFICULTY_COLORS = {
  expert: { bg: 'bg-rpg-crimson/10', border: 'border-rpg-crimson', text: 'text-rpg-crimson', label: 'EXPERT' },
  advanced: { bg: 'bg-purple-500/10', border: 'border-purple-500', text: 'text-purple-400', label: 'AVANCÉ' },
  intermediate: { bg: 'bg-rpg-mana/10', border: 'border-rpg-mana', text: 'text-rpg-mana', label: 'INTERMÉDIAIRE' }
};

const ProjectCard = ({ project, index, onCardClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;
  const difficulty = DIFFICULTY_COLORS[project.difficulty];

  const categoryColor = CATEGORIES.find(c => c.id === project.category)?.color || 'rpg-gold';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onCardClick(project)}
      className="rpg-card bg-rpg-slate/80 backdrop-blur-sm border-rpg-gold/30 hover:border-rpg-gold/60 transition-all duration-300 group relative overflow-hidden cursor-pointer"
    >
      {/* Status Indicator */}
      <div className="absolute top-4 right-4 z-10">
        {project.status === 'completed' ? (
          <div className="bg-green-500/20 border border-green-500 px-3 py-1 text-xs font-mono text-green-400 uppercase">
            ✓ Complété
          </div>
        ) : (
          <div className="bg-yellow-500/20 border border-yellow-500 px-3 py-1 text-xs font-mono text-yellow-400 uppercase animate-pulse">
            ⚡ En cours
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${categoryColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-lg bg-${categoryColor}/10 border border-${categoryColor}/30 shrink-0`}>
            <Icon size={24} className={`text-${categoryColor}`} strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-display text-white leading-tight mb-2 pr-24">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-rpg-muted">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {project.date}
              </span>
              <span className={`px-2 py-0.5 ${difficulty.bg} border ${difficulty.border} ${difficulty.text} text-xs font-mono uppercase`}>
                {difficulty.label}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-rpg-text text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Expand/Collapse Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="text-rpg-gold text-sm font-mono uppercase tracking-wider hover:text-white transition-colors mb-4 flex items-center gap-2"
        >
          {isExpanded ? '▼' : '▶'} {isExpanded ? 'Masquer détails' : 'Voir détails'}
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 pt-4 mb-4">
                <h4 className="text-rpg-gold font-display text-xs uppercase tracking-wider mb-2">Réalisations</h4>
                <ul className="space-y-1.5">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-rpg-text">
                      <span className={`mt-1.5 w-1 h-1 rounded-full bg-${categoryColor} shrink-0`} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-black/40 border border-rpg-gold/20 text-rpg-gold font-mono text-xs hover:border-rpg-gold/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* XP Badge */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm font-mono text-rpg-gold">
            <Award size={16} />
            {project.xpGained}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const QuestLog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const totalXP = PROJECTS_DATA.reduce((acc, p) => {
    const xp = parseInt(p.xpGained.match(/\d+/)[0]);
    return acc + xp;
  }, 0);

  const completedCount = PROJECTS_DATA.filter(p => p.status === 'completed').length;

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-20 pb-20 px-4 min-h-screen relative overflow-hidden">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(255,215,0,0.03)_50%)] bg-[length:100%_4px] animate-scanline pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl text-rpg-gold font-display tracking-[0.3em] drop-shadow-neon-gold mb-2">
            JOURNAL DES QUÊTES
          </h2>
          <p className="text-rpg-muted font-mono text-sm">MISSION_LOGS_DATABASE_ACCESS</p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="rpg-card bg-rpg-slate/60 border-rpg-gold/30 p-4 text-center">
            <div className="text-3xl font-display text-rpg-gold mb-1">{PROJECTS_DATA.length}</div>
            <div className="text-xs font-mono text-rpg-muted uppercase tracking-wider">Total Missions</div>
          </div>
          <div className="rpg-card bg-rpg-slate/60 border-green-500/30 p-4 text-center">
            <div className="text-3xl font-display text-green-400 mb-1">{completedCount}</div>
            <div className="text-xs font-mono text-rpg-muted uppercase tracking-wider">Complétées</div>
          </div>
          <div className="rpg-card bg-rpg-slate/60 border-rpg-mana/30 p-4 text-center">
            <div className="text-3xl font-display text-rpg-mana mb-1">{totalXP.toLocaleString()}</div>
            <div className="text-xs font-mono text-rpg-muted uppercase tracking-wider">XP Total Gagné</div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${
                  isActive
                    ? `bg-${cat.color}/20 border-${cat.color} text-${cat.color} shadow-[0_0_15px_rgba(255,215,0,0.3)]`
                    : 'bg-black/40 border-white/20 text-rpg-muted hover:border-white/40'
                }`}
              >
                <Icon size={16} />
                <span className="font-mono text-sm uppercase tracking-wider">{cat.label}</span>
                <span className="text-xs opacity-60">
                  ({cat.id === 'all' ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.category === cat.id).length})
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onCardClick={handleCardClick} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-rpg-muted font-mono">Aucun projet trouvé dans cette catégorie</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto"
            >
              <div className="rpg-card bg-rpg-slate/98 border-rpg-gold w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto relative my-auto scrollbar-thin scrollbar-thumb-rpg-gold/50 scrollbar-track-black/20">
                {/* Close Button - Sticky */}
                <div className="sticky top-0 right-0 z-20 flex justify-end p-4 bg-gradient-to-b from-rpg-slate via-rpg-slate to-transparent pointer-events-none">
                  <button
                    onClick={closeModal}
                    className="p-2 bg-black/80 border border-rpg-gold/30 hover:border-rpg-gold text-rpg-gold hover:text-white transition-colors pointer-events-auto backdrop-blur-sm"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="px-8 pb-8 -mt-4">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 rounded-lg bg-${CATEGORIES.find(c => c.id === selectedProject.category)?.color}/10 border-2 border-${CATEGORIES.find(c => c.id === selectedProject.category)?.color}/30 shrink-0`}>
                      <selectedProject.icon size={48} className={`text-${CATEGORIES.find(c => c.id === selectedProject.category)?.color}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {selectedProject.status === 'completed' ? (
                          <span className="bg-green-500/20 border border-green-500 px-3 py-1 text-xs font-mono text-green-400 uppercase">
                            ✓ Complété
                          </span>
                        ) : (
                          <span className="bg-yellow-500/20 border border-yellow-500 px-3 py-1 text-xs font-mono text-yellow-400 uppercase animate-pulse">
                            ⚡ En cours
                          </span>
                        )}
                        <span className={`px-3 py-1 ${DIFFICULTY_COLORS[selectedProject.difficulty].bg} border ${DIFFICULTY_COLORS[selectedProject.difficulty].border} ${DIFFICULTY_COLORS[selectedProject.difficulty].text} text-xs font-mono uppercase`}>
                          {DIFFICULTY_COLORS[selectedProject.difficulty].label}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display text-white leading-tight mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-2 text-rpg-muted">
                        <Calendar size={16} />
                        <span className="font-mono text-sm">{selectedProject.date}</span>
                        <span className="mx-2">•</span>
                        <Award size={16} className="text-rpg-gold" />
                        <span className="font-mono text-sm text-rpg-gold">{selectedProject.xpGained}</span>
                      </div>
                    </div>
                  </div>

                  {/* Images Gallery */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.images.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="relative aspect-video rounded-lg overflow-hidden border-2 border-rpg-gold/30 group hover:border-rpg-gold/60 transition-all duration-300"
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} - Image ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Long Description */}
                  <div className="mb-6">
                    <h3 className="text-rpg-gold font-display text-lg uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-rpg-gold" />
                      Description Détaillée
                    </h3>
                    <p className="text-rpg-text leading-relaxed text-base">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-rpg-gold font-display text-lg uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-rpg-gold" />
                      Réalisations Clés
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 text-rpg-text bg-black/30 p-3 border border-rpg-gold/20 rounded"
                        >
                          <span className={`mt-1.5 w-2 h-2 rounded-full bg-${CATEGORIES.find(c => c.id === selectedProject.category)?.color} shrink-0`} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-rpg-gold font-display text-lg uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-rpg-gold" />
                      Stack Technique
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techs.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05, type: 'spring' }}
                          className="px-4 py-2 bg-black/60 border-2 border-rpg-gold/30 text-rpg-gold font-mono text-sm hover:border-rpg-gold hover:bg-rpg-gold/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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

export default QuestLog;
