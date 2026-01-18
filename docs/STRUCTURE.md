# Architecture du Projet

Le projet doit suivre strictement cette structure de dossiers :

/src
  /assets          # Images, icônes Pixel Art, sons
  /components
    /ui            # Boutons, Cards, Inputs (composants réutilisables)
    /layout        # Navbar, TerminalWrapper, Footer
    /sections      # Hero, ProjectGrid, SkillCloud
  /data            # Fichiers JSON/JS contenant les textes (SAE, CV)
  /hooks           # Logique réutilisable (ex: useTypewriter)
  /styles          # Index.css (Tailwind directives)
  /utils           # Fonctions de formatage ou calculs techniques