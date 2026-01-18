import React from 'react';

const SummoningShrine = () => {
  return (
    <div className="pt-24 pb-32 px-4 container mx-auto text-center">
      <h2 className="text-4xl text-rpg-gold font-display mb-8">TERMINAL DE CONTACT</h2>
      <div className="rpg-card p-8 max-w-lg mx-auto">
        <p className="text-rpg-text mb-6 font-mono text-sm">Établir une connexion sécurisée avec l'admin.</p>
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="ID Utilisateur" className="rpg-input" />
            <input type="email" placeholder="Canal de Réponse (Email)" className="rpg-input" />
            <textarea placeholder="Données du message..." rows={4} className="rpg-input"></textarea>
            <button className="rpg-btn w-full">TRANSMETTRE</button>
        </form>
      </div>
    </div>
  );
};

export default SummoningShrine;
