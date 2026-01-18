# Architecture Technique (SPA React Router)

L'application est une Single Page Application (SPA) construite avec React et Vite.

## Arborescence

```
/src
  /assets
    /sprites       # (Futur) Sprites pixel-art ou SVG animés
    /textures      # Fonds (Grid, Scanlines)
    /sounds        # Bruitages UI (Hover, Click)
  /components
    /ui            # Composants génériques (boutons, inputs)
    /rpg           # Composants spécifiques (SkillNode, CharacterStats)
    /layout        # GameHUD (Barres de vie/mana, Navigation bas), Footer
  /pages           # Les Vues
    Home.jsx           # "HUB" - Écran d'accueil type Terminal
    CharacterSheet.jsx # "PROFIL" - Fiche Opérateur (Stats, Bio)
    SkillTree.jsx      # "SYSTÈME" - Arbre interactif (SVG + Modal)
    QuestLog.jsx       # "PROJETS" - Liste des missions (Cartes)
    SummoningShrine.jsx # "CONTACT" - Terminal de messagerie
  /data            # (Optionnel) Fichiers JSON pour séparer les données
  App.jsx          # Routing (React Router v6+) & AnimatePresence
  main.jsx         # Point d'entrée & CSS Imports
```

## Dépendances Clés
- `react-router-dom` : Navigation sans rechargement.
- `framer-motion` : Animations d'interface (Transitions de page, Modales).
- `lucide-react` : Icônes vectorielles (Style Tech).
- `tailwindcss` : Styling utilitaire avec configuration personnalisée (Theme RPG).
