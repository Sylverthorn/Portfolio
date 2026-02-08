import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Shield, Code, Network, Calendar, Award, ExternalLink, Filter, X, Image as ImageIcon } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Stage Administration Système & Réseau - COSTRAL",
    category: "network",
    status: "completed",
    difficulty: "expert",
    date: "2025",
    semester: "Stage",
    description: "Cartographie complète du réseau informatique d'entreprise avec identification des équipements, correction des incohérences, mise en place d'une supervision temps réel et gestion à distance des infrastructures.",
    longDescription: "Stage de 8 semaines (17 février - 12 avril 2025) chez COSTRAL visant à cartographier et optimiser l'ensemble du réseau informatique de l'entreprise. Méthodologie professionnelle incluant l'observation de la topologie physique, l'analyse des tables ARP/MAC, et la vérification documentaire. Mise en place d'outils de supervision en temps réel avec alertes automatiques et centralisation des documentations pour améliorer la réactivité et la gestion du réseau.",
    achievements: [
      "Création du schéma synoptique complet du réseau (routeurs, switchs, serveurs)",
      "Correction et normalisation du plan des prises réseau de l'entreprise",
      "Établissement de la nomenclature complète des ports de switch",
      "Déploiement d'une carte dynamique du réseau avec mise à jour automatique",
      "Centralisation de toutes les documentations réseau en plateforme unique",
      "Configuration de la gestion à distance via SSH, Web et RDP"
    ],
    images: [
      "/costral-building.jpg"
    ],
    techs: ["SSH", "RDP", "SNMP", "Switches", "Supervision", "Documentation", "Topologie", "ARP/MAC", "Alerting"],
    icon: Network,
    xpGained: "+900 XP"
  },
  {
    id: 2,
    title: "Qu'est-ce qu'un bon mot de passe ? - SAE 1",
    category: "cyber",
    status: "completed",
    difficulty: "intermediate",
    date: "2024",
    semester: "S1",
    description: "Projet de sensibilisation à l'hygiène informatique et à la cybersécurité : définir les bonnes pratiques autour des mots de passe et présenter des outils comme KeePass.",
    longDescription: "Travail en groupe (Khalid Sabane, Alan Akgun) sur la définition d'un bon mot de passe, les vulnérabilités associées et l'utilisation quotidienne de coffres-forts de mots de passe (KeePass). Répartition des recherches, rédaction d'un rapport, réalisation d'une présentation orale et production d'une vidéo pédagogique.",
    achievements: [
      "Rapport de projet disponible (PDF)",
      "Présentation PowerPoint réalisée",
      "Vidéo de présentation publiée sur YouTube",
      "Atelier de sensibilisation et démonstration de KeePass"
    ],
    images: [
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/b019be93-48c0-44a5-998e-3970346b0db1/09859547-0f7b-4867-a4ae-c70352c4b315/notion_SAE_1.01_(1).pdf",
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/b019be93-48c0-44a5-998e-3970346b0db1/b4d672d8-e5b1-4d13-be49-38ecce63d7f1/Sae_hygiene_cyber_scurit.pptx"
    ],
    video: "https://youtu.be/93Dj7MuwbiQ",
    techs: ["Sensibilisation", "KeePass", "Sécurité", "Phishing", "Bonnes pratiques"],
    icon: Shield,
    xpGained: "+300 XP"
  },
  {
    id: 3,
    title: "S'initier aux réseaux informatiques - SAE 1.02",
    category: "network",
    status: "completed",
    difficulty: "intermediate",
    date: "2024",
    semester: "S1",
    description: "Configuration complète d'un réseau d'entreprise en expansion (Rudy and Theodor Company) : préparation, configuration, tests et validation des équipements et services réseau selon cahier des charges.",
    longDescription: "Mission de technicien réseaux et télécoms pour déployer l'infrastructure réseau d'une succursale. Utilisation d'EVE-NG pour virtualiser et simuler les équipements Cisco, configuration de VLANs, mise en place de services DHCP sous Linux, routage inter-VLAN et capture/analyse de trames avec Wireshark. Respect strict des spécifications du cahier des charges.",
    achievements: [
      "Configuration de switches et routeurs Cisco dans EVE-NG",
      "Structuration d'un réseau d'entreprise avec VLANs (Utilisateurs, Direction, Serveur)",
      "Déploiement et configuration d'un serveur DHCP sous Linux",
      "Configuration du routage inter-VLAN",
      "Capture et analyse de trames 802.1Q avec Wireshark",
      "Migration du service DHCP du switch vers le serveur Linux",
      "Plan d'adressage IP complet et documentation technique"
    ],
    images: [
      "/sae102-topology.png",
      "/sae102-vlans.png"
    ],
    documents: [
      {
        name: "Prise de notes SAE 1.02",
        url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/b019be93-48c0-44a5-998e-3970346b0db1/c1f041f8-72b6-4181-a048-53d044006382/SAE_INITIER_AU_RESEAU_67675aa593db475695f30a025d923cee.pdf"
      }
    ],
    techs: ["EVE-NG", "Cisco IOS", "VLAN", "DHCP", "Linux", "Routage inter-VLAN", "Wireshark", "802.1Q", "Trunk"],
    icon: Network,
    xpGained: "+450 XP"
  },
  {
    id: 4,
    title: "Découvrir un dispositif de transmission - SAE 1.03",
    category: "network",
    status: "completed",
    difficulty: "intermediate",
    date: "2024",
    semester: "S1",
    description: "Étude complète des dispositifs de transmission physiques (câbles RJ45, fibre optique) et ondulaires (WiFi). Mesures de puissance, analyse de performance et simulation de réseaux.",
    longDescription: "Exploration des technologies de transmission en réseau : installation de réseaux câblés et sans fil, mesures de puissance des signaux, analyse de la couverture WiFi avec heatmaps, comparaison des normes 802.11g (2,4 GHz) et 802.11a (5 GHz). Utilisation de Packet Tracer pour la simulation et la validation des configurations avant déploiement réel.",
    achievements: [
      "Installation et configuration de réseaux câblés (RJ45, fibre optique)",
      "Déploiement et optimisation de réseaux WiFi",
      "Mesures de puissance du signal à différentes distances et à travers différents matériaux",
      "Création de heatmaps pour visualiser la couverture WiFi",
      "Comparaison des normes WiFi 802.11g (2,4 GHz) et 802.11a (5 GHz)",
      "Simulation de réseaux avec Packet Tracer",
      "Analyse des interférences et optimisation de la couverture"
    ],
    images: [
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    ],
    techs: ["RJ45", "Fibre optique", "WiFi", "802.11g", "802.11a", "Packet Tracer", "Heatmap", "Analyse de signal", "RSSI"],
    icon: Network,
    xpGained: "+400 XP"
  },
  {
    id: 5,
    title: "Se présenter sur internet - SAE 1.04",
    category: "dev",
    status: "completed",
    difficulty: "intermediate",
    date: "2024",
    semester: "S1",
    description: "Création d'un site web de présentation personnelle et d'un centre d'intérêt avec traduction anglaise. Réflexion sur l'identité numérique et les traces sur internet.",
    longDescription: "Développement d'un site web complet en HTML/CSS hébergé sur GitHub Pages. Construction d'une page de descriptif personnel présentant compétences, parcours académique et objectifs professionnels. Création d'une page dédiée à un centre d'intérêt avec système de traduction français/anglais intégré. Utilisation de VSCode et déploiement via GitHub Pages.",
    achievements: [
      "Réflexion approfondie sur l'identité numérique et les traces internet",
      "Développement d'une page de présentation personnelle complète",
      "Création d'une page de centre d'intérêt avec traduction bilingue (FR/EN)",
      "Déploiement du site sur GitHub Pages",
      "Versionnement du code avec GitHub",
      "Design responsive et interface utilisateur intuitive"
    ],
    images: [
      "/sae104-screenshot.png"
    ],
    links: [
      {
        name: "Site de présentation personnelle",
        url: "https://sylverthorn.github.io/SAE-14-KORICHI-YANIS-RT121/"
      },
      {
        name: "Page centre d'intérêt",
        url: "https://sylverthorn.github.io/SAE-14-KORICHI-YANIS-RT121/index2.html"
      },
      {
        name: "Code source GitHub",
        url: "https://github.com/Sylverthorn/SAE-14-KORICHI-YANIS-RT121"
      }
    ],
    techs: ["HTML", "CSS", "GitHub", "GitHub Pages", "VSCode", "Responsive Design", "Bilingual"],
    icon: Code,
    xpGained: "+350 XP"
  },
  {
    id: 6,
    title: "Traiter des données - SAE 1.05",
    category: "cyber",
    status: "completed",
    difficulty: "intermediate",
    date: "2024",
    semester: "S1",
    description: "Projets de sécurité réseau et analyse de données : développement d'un script de découverte automatique d'hôtes et simulation d'attaque Man-in-the-Middle à but éducatif.",
    longDescription: "Deux projets complémentaires en cybersécurité réseau réalisés en collaboration avec Léonard Sero. Projet 1 : script Python/Scapy pour détecter tous les hôtes dans un réseau IP via méthodes actives (ICMP) et passives (ARP). Projet 2 : étude des vulnérabilités de communications réseau par interception et manipulation de données (attaque MITM) dans un cadre éducatif pour comprendre la détection et la prévention.",
    achievements: [
      "Développement d'un script de découverte automatique des hôtes réseau",
      "Implémentation de méthodes de détection active (ICMP) et passive (ARP)",
      "Création d'un script d'attaque Man-in-the-Middle éducatif",
      "Maîtrise du module Scapy Python pour manipulation de paquets",
      "Capture et analyse de trames avec Wireshark",
      "Étude approfondie des couches Transport, Réseau et Liaison (modèle OSI)",
      "Renforcement des compétences en programmation et sécurité réseau"
    ],
    images: [
      "/sae105-screenshot.png"
    ],
    techs: ["Python", "Scapy", "Wireshark", "ICMP", "ARP", "MITM", "Packet Sniffing", "OSI Model", "Network Security"],
    icon: Shield,
    xpGained: "+500 XP"
  },
  {
    id: 7,
    title: "Construire un réseau informatique pour une petite structure - SAÉ 2.01",
    category: "network",
    status: "completed",
    difficulty: "expert",
    date: "2025",
    semester: "S2",
    description: "Conception, segmentation, sécurisation et interconnexion d'une infrastructure réseau d'entreprise avec services (FTP, Web), NAT, routage RIP et sécurisation par ACL/port-security.",
    longDescription: "Projet pratique complet de construction d'un réseau pour une petite structure : définition d'un plan d'adressage structuré (/30, /29, /25), création de VLANs, routage inter-VLAN sur switch L3, configuration de RIP v2, mise en place de DHCP, NAT/PAT, déploiement de services (Apache, vsftpd, rsync) et sécurisation via ACLs, port-security et DMZ. Tests et simulation réalisés sous GNS3.",
    achievements: [
      "Conception et segmentation du réseau via VLANs (Administration, Développeurs, Admins, PROD)",
      "Plan d'adressage IP structuré et interconnexions point-à-point en /30",
      "Routage inter-VLAN et configuration RIP v2",
      "Déploiement de services : Apache2, vsftpd, rsync et configuration DHCP par VLAN",
      "Configuration NAT/PAT pour accès Internet des VLANs internes",
      "Sécurisation réseau : ACLs, port-security (sticky/restrict), DMZ et configuration STP optimisée",
      "Interconnexion avec une maquette externe via GNS3 (Cloud) et routes statiques"
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    techs: ["VLAN", "RIP v2", "NAT/PAT", "DHCP", "Apache2", "vsftpd", "rsync", "ACL", "port-security", "GNS3", "Linux"],
    icon: Network,
    xpGained: "+650 XP"
  },
  {
    id: 8,
    title: "Mettre en place une solution informatique pour l'entreprise - SAE 2.03",
    category: "dev",
    status: "completed",
    difficulty: "advanced",
    date: "2025",
    semester: "S2",
    description: "Développement d'une interface web Django de gestion des absences scolaires avec base de données MySQL, hébergement sur VMs Linux/Windows et génération de documents PDF.",
    longDescription: "Conception et déploiement d'une solution complète de gestion des absences pour une école : développement d'un site web Django permettant la consultation, l'insertion et la manipulation de données (élèves, professeurs, cours, absences). Base de données MySQL hébergée sur VM Windows, site Django hébergé sur VM Linux avec Apache2. Implémentation du CRUD complet, import/export de fichiers d'absences, validation et justification, génération de listes PDF par étudiant.",
    achievements: [
      "Développement complet d'une application web Django avec architecture MVC",
      "Conception et implémentation d'une base de données MySQL (groupes, étudiants, professeurs, cours, absences)",
      "Configuration de VMs : MySQL sur Windows Server et Django sur Linux avec Apache2",
      "Implémentation du CRUD pour toutes les entités (Create, Read, Update, Delete)",
      "Système d'import d'absences via fichiers structurés avec documentation utilisateur",
      "Génération automatique de listes d'absences et de PDF récapitulatifs par étudiant",
      "Gestion collaborative avec GitHub, planification Gantt et LiveShare VSCode"
    ],
    images: [
      "/sae203-screenshot1.png",
      "/sae203-screenshot2.png"
    ],
    links: [
      {
        name: "Repository GitHub",
        url: "https://github.com/Link67000/SAE_WEBdynamique.git"
      }
    ],
    techs: ["Django", "Python", "MySQL", "Apache2", "Linux", "HTML", "CSS", "PDF Generation", "CRUD", "VM"],
    icon: Code,
    xpGained: "+700 XP"
  },
  {
    id: 9,
    title: "SAE Intégrative - SAE 2.04",
    category: "network",
    status: "completed",
    difficulty: "advanced",
    date: "2025",
    semester: "S2",
    description: "Projet pluridisciplinaire combinant réseau VLAN/NAT, téléphonie IP (Linphone/SIP) et développement web Django avec communication MQTT pour créer une infrastructure complète d'entreprise.",
    longDescription: "SAE Intégrative combinant compétences en réseau, téléphonie IP et développement web pour concevoir une infrastructure complète et fonctionnelle. Vision globale des systèmes de communication modernes en entreprise réalisée en autonomie : création d'un réseau d'entreprise segmenté avec VLANs, routeur NAT pour accès Internet, configuration de téléphones SIP via Linphone pour communications VoIP inter-réseaux, et développement d'une application web Django affichant en temps réel des données IoT récupérées via MQTT. Projet illustrant l'interconnexion entre différents domaines de l'informatique dans des environnements professionnels intégrés.",
    achievements: [
      "Création et segmentation de réseau avec VLAN pour isoler les services",
      "Configuration de routeur avec NAT et routage inter-VLAN pour accès Internet",
      "Mise en place d'une infrastructure de téléphonie IP avec Linphone (SIP/VoIP)",
      "Configuration de communications SIP intra-réseau et inter-réseaux",
      "Développement d'une application web Python/Django avec interface temps réel",
      "Intégration de capteurs IoT via protocole MQTT pour visualisation dynamique",
      "Collaboration et versioning sur GitHub avec travail en équipe"
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800"
    ],
    links: [
      {
        name: "Repository GitHub",
        url: "https://github.com/Sylverthorn/SAE-INTEGRATIVE-WEB"
      }
    ],
    techs: ["VLAN", "NAT", "Linphone", "SIP", "VoIP", "Django", "Python", "MQTT", "IoT", "GitHub", "Routing"],
    icon: Network,
    xpGained: "+750 XP"
  },
  {
    id: 10,
    title: "Développer des applications communicantes - SAE 3.02",
    category: "dev",
    status: "completed",
    difficulty: "advanced",
    date: "2024",
    semester: "S3",
    description: "Conception d'une architecture Client/Serveur multi-serveurs avec load balancing pour l'exécution distribuée de programmes. Système avec serveur maître, serveurs secondaires, interfaces PyQt et support multi-langages (Java, Python, C, C++).",
    longDescription: "Architecture Client/Serveur avancée permettant l'exécution de programmes soumis par des clients via un système de répartition de charge. Le serveur maître gère les connexions clients et distribue les tâches aux serveurs secondaires selon leur disponibilité CPU et capacité. Communication par sockets, interfaces graphiques PyQt pour client et serveur, gestion de file d'attente avec timeout 3min, support de 4 langages de programmation. Possibilité de lancer les serveurs secondaires via multi-processing local ou manuellement sur machines distantes. Système de load balancing intelligent vérifiant la disponibilité des serveurs avant attribution des tâches. Projet de 60h incluant conception UML, développement, tests et documentation complète.",
    achievements: [
      "Architecture Client/Serveur multi-serveurs avec serveur maître et serveurs secondaires",
      "Implémentation de load balancing intelligent pour répartition optimale des tâches",
      "Développement d'interfaces graphiques PyQt pour client et serveur avec logs en temps réel",
      "Communication réseau via sockets entre tous les composants du système",
      "Support de 4 langages de programmation (Java, Python, C, C++) pour exécution de code",
      "Gestion de file d'attente avec vérification CPU et limite de tâches par serveur",
      "Système de multi-processing via subprocess pour lancement automatique des serveurs secondaires",
      "Timeout de 3min par script pour éviter les boucles infinies et blocages",
      "Conception UML complète et documentation technique détaillée"
    ],
    images: [
      "/sae302-screenshot1.png",
      "/sae302-screenshot2.png"
    ],
    links: [
      {
        name: "Repository GitHub",
        url: "https://github.com/Sylverthorn/GIT-R309-SAE302"
      }
    ],
    techs: ["Python", "PyQt", "Sockets", "Load Balancing", "Multi-processing", "Client/Serveur", "Java", "C", "C++", "Subprocess", "Threading", "UML"],
    icon: Code,
    xpGained: "+800 XP"
  },
  {
    id: 11,
    title: "SAÉ 3.Cyber.03 | Concevoir un réseau informatique sécurisé multi-sites",
    category: "network",
    status: "completed",
    difficulty: "expert",
    date: "2025",
    semester: "S3",
    description: "Conception et déploiement d'une architecture réseau d'entreprise multi-sites avec MPLS-VPN, haute disponibilité et services critiques. Projet réaliste pour UC Exchange et ABC Conseil.",
    longDescription: "Projet réaliste simulant l'infrastructure réseau de deux entreprises e-commerce (UC Exchange et ABC Conseil) réparties sur plusieurs sites. Gestion complète de l'administration LAN avec création d'un plan d'adressage structuré, mise en place de VLANs et routage inter-VLAN. Configuration du protocole VRRP pour la haute disponibilité et implémentation du protocole MSTP pour tolérance aux pannes. Déploiement de services réseau : DNS (Windows Server 2019 + secondaire Linux) avec zones sécurisées DNSSEC, serveur Web Apache (site public + intranet), serveur Mail SMTP/IMAP, Active Directory pour gestion centralisée. Infrastructure MPLS-VPN répartie sur trois AS avec RIP (AS 10/20), OSPF (AS 30), BGP/MP-BGP avec Route Reflector, VRF spécifiques par client et NAT statique pour exposition Web vers Internet.",
    achievements: [
      "Création d'un plan d'adressage structuré pour plusieurs sites",
      "Mise en place de VLANs et routage inter-VLAN avec architecture hiérarchique",
      "Configuration du protocole VRRP pour la haute disponibilité des passerelles",
      "Implémentation du protocole MSTP pour tolérance aux pannes sans boucle réseau",
      "Déploiement de serveurs DNS (Windows Server 2019 + secondaire Linux) avec DNSSEC",
      "Installation et configuration de serveurs Web Apache (site public + intranet)",
      "Configuration de serveurs Mail SMTP et IMAP avec tests TELNET",
      "Mise en place d'Active Directory pour gestion centralisée des utilisateurs",
      "Configuration d'une infrastructure MPLS-VPN sur trois AS avec RIP, OSPF et BGP",
      "Implémentation de MP-BGP avec Route Reflector pour échange VPNv4",
      "Configuration de VRF spécifiques pour ABC_Conseil et UC_Exchange",
      "Traduction d'adresses NAT et PAT pour accès Internet et exposition publique",
      "Sécurisation complète avec règles de pare-feu et isolation des flux"
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    techs: ["VLAN", "VRRP", "MSTP", "MPLS-VPN", "BGP", "OSPF", "RIP", "DNS", "DNSSEC", "Apache", "Active Directory", "NAT/PAT", "VRF", "Route-Reflector", "Windows Server"],
    icon: Network,
    xpGained: "+900 XP"
  },
  {
    id: 12,
    title: "SAÉ 3.Cyber.04 | Découvrir le pentesting",
    category: "cyber",
    status: "completed",
    difficulty: "advanced",
    date: "2025",
    semester: "S3",
    description: "Découverte du pentesting via la plateforme Root Me avec résolution de défis pratiques sur les vulnérabilités web, système, réseau et cryptographie. Apprentissage actif des techniques d'exploitation de failles.",
    longDescription: "SAÉ orientée cybersécurité offensive visant à découvrir le pentesting à travers la plateforme Root Me. Réalisation d'un maximum de défis pour comprendre les différentes vulnérabilités affectant systèmes, sites web et applications. Apprentissage actif en manipulant directement les failles pour mieux les reconnaître et les corriger. Exploration de plusieurs catégories : Web (Client & Server), Cryptanalyse, Réseau, Système & Exploitation, et Forensic. Utilisation d'outils professionnels comme Burp Suite pour interception HTTP, Wireshark pour analyse réseau, nmap pour reconnaissance. Développement de scripts Python et Bash pour automatisation d'attaques. Approche pédagogique permettant de se mettre dans la peau d'un attaquant pour mieux comprendre les bonnes pratiques de sécurité à appliquer.",
    achievements: [
      "Compréhension des concepts fondamentaux du pentesting et méthodologie d'audit",
      "Résolution de défis Root Me : Web Client/Server, Cryptanalyse, Réseau, Système, Forensic",
      "Maîtrise de Burp Suite pour interception et modification de requêtes HTTP",
      "Utilisation de Wireshark pour analyse réseau et capture de paquets",
      "Reconnaissance réseau avec nmap et identification de services vulnérables",
      "Identification et exploitation de failles SQL Injection (SQLi)",
      "Exploitation de vulnérabilités XSS (Cross-Site Scripting)",
      "Maîtrise des attaques par Command Injection sur systèmes Unix/Linux",
      "Exploitation de Buffer Overflow et corruption mémoire",
      "Développement de scripts Python et Bash pour automatisation d'attaques",
      "Approfondissement de Linux et ligne de commande en contexte sécurité offensive",
      "Renforcement de la culture sécurité et esprit critique face aux systèmes"
    ],
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800"
    ],
    links: [
      {
        name: "Plateforme Root Me",
        url: "https://www.root-me.org/"
      }
    ],
    techs: ["Root Me", "Burp Suite", "Wireshark", "nmap", "Python", "Bash", "Linux", "SQL Injection", "XSS", "Command Injection", "Buffer Overflow", "Cryptanalysis", "Forensic", "Pentest"],
    icon: Shield,
    xpGained: "+700 XP"
  },
  {
    id: 13,
    title: "SAÉ 4.Cyber.01 | Sécuriser un système d'information",
    category: "cyber",
    status: "completed",
    difficulty: "expert",
    date: "2025",
    semester: "S4",
    description: "Conception et déploiement d'un système d'information d'entreprise sécurisé avec services critiques : annuaire LDAP, serveur NFS, messagerie chiffrée, VPN nomade et infrastructure IGC complète.",
    longDescription: "Projet de conception d'un système d'information sécurisé pour une entreprise, intégrant des services critiques comme un annuaire LDAP, un serveur de fichiers NFS, une messagerie sécurisée et un accès VPN pour les postes nomades. Architecture complète incluant pare-feu iptables pour filtrage des flux, serveur LDAP (LDAPS) pour authentification centralisée, serveur NFS pour partage sécurisé, serveurs Postfix (SMTP) et Dovecot (IMAP) pour messagerie, serveur DNS interne BIND9, serveur VPN OpenVPN avec accès distant chiffré, et infrastructure de gestion de certificats (IGC) pour authentifier les postes et chiffrer les services. Chaque composant configuré avec un souci de sécurité : trafic limité, authentification forte, utilisation de TLS et segmentation réseau. Virtualisation complète sous VirtualBox, présentation technique et démonstration fonctionnelle pour validation du projet.",
    achievements: [
      "Création d'une architecture réseau d'entreprise complète et sécurisée",
      "Déploiement et configuration de serveur LDAPS avec base initialisée par fichiers LDIF",
      "Mise en place d'un serveur NFS avec authentification LDAP et montage client contrôlé",
      "Configuration de serveurs Postfix (SMTP) et Dovecot (IMAP) avec authentification LDAP",
      "Sécurisation de la messagerie avec TLS et tests via client mail",
      "Déploiement de serveur DNS interne avec BIND9",
      "Configuration de serveur OpenVPN avec certificats client/serveur et filtrage dédié",
      "Mise en place d'une Infrastructure de Gestion de Certificats (IGC) complète",
      "Génération et déploiement de certificats racine, serveur et client pour tous les services",
      "Configuration de pare-feu iptables pour filtrage et segmentation réseau",
      "Sécurisation de serveur Web Apache/Nginx avec TLS et load balancer",
      "Virtualisation complète de l'infrastructure sous VirtualBox",
      "Documentation technique détaillée et présentation fonctionnelle du système"
    ],
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    ],
    techs: ["LDAP", "LDAPS", "NFS", "Postfix", "Dovecot", "OpenVPN", "DNS", "BIND9", "iptables", "TLS", "IGC", "Certificats", "Apache", "Nginx", "Load Balancer", "VirtualBox", "Linux"],
    icon: Shield,
    xpGained: "+850 XP"
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Tous les projets', color: 'rpg-gold', icon: Award },
  { id: 'network', label: 'Réseaux', color: 'rpg-mana', icon: Network },
  { id: 'cyber', label: 'Cybersécurité', color: 'rpg-crimson', icon: Shield },
  { id: 'dev', label: 'Développement', color: 'rpg-gold', icon: Code }
];

const SEMESTERS = [
  { id: 'all', label: 'Tous' },
  { id: 'S1', label: 'S1' },
  { id: 'S2', label: 'S2' },
  { id: 'S3', label: 'S3' },
  { id: 'S4', label: 'S4' },
  { id: 'S5', label: 'S5' },
  { id: 'S6', label: 'S6' },
  { id: 'Stage', label: 'Stage' },
  { id: 'Perso', label: 'Perso' }
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

              {/* Links Section */}
              {project.links && project.links.length > 0 && (
                <div className="border-t border-white/10 pt-4 mb-4">
                  <h4 className="text-rpg-gold font-display text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ExternalLink size={14} /> Liens
                  </h4>
                  <div className="space-y-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-rpg-mana hover:text-rpg-gold transition-colors group"
                      >
                        <ExternalLink size={14} className="shrink-0" />
                        <span className="underline">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
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
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const semesterMatch = selectedSemester === 'all' || project.semester === selectedSemester;
    return categoryMatch && semesterMatch;
  });

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
          className="flex flex-wrap gap-3 justify-center mb-4"
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

        {/* Semester Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          <div className="flex items-center gap-2 mr-2 text-rpg-muted font-mono text-xs uppercase">
            <Calendar size={14} />
            Semestre:
          </div>
          {SEMESTERS.map((sem) => {
            const isActive = selectedSemester === sem.id;
            const count = sem.id === 'all' 
              ? PROJECTS_DATA.length 
              : PROJECTS_DATA.filter(p => p.semester === sem.id).length;
            
            return (
              <motion.button
                key={sem.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSemester(sem.id)}
                className={`px-3 py-1.5 border transition-all duration-300 font-mono text-xs uppercase tracking-wider ${
                  isActive
                    ? 'bg-rpg-gold/20 border-rpg-gold text-rpg-gold shadow-[0_0_10px_rgba(255,215,0,0.2)]'
                    : 'bg-black/40 border-white/20 text-rpg-muted hover:border-white/40'
                }`}
              >
                {sem.label}
                {count > 0 && (
                  <span className="ml-1.5 opacity-60">({count})</span>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedSemester}`}
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
                  <div className="mb-6">
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

                  {/* Links Section */}
                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div>
                      <h3 className="text-rpg-gold font-display text-lg uppercase tracking-wider mb-3 flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-rpg-gold" />
                        <ExternalLink size={18} />
                        Liens & Ressources
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.links.map((link, i) => (
                          <motion.a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="flex items-center gap-3 p-4 bg-black/40 border-2 border-rpg-mana/30 text-rpg-mana hover:border-rpg-mana hover:bg-rpg-mana/10 transition-all duration-300 group"
                          >
                            <ExternalLink size={20} className="shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="font-mono text-sm group-hover:text-rpg-gold transition-colors">{link.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
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
