import React from 'react';

const QuestLog = () => {
  return (
    <div className="pt-24 pb-32 px-4 container mx-auto text-center">
      <h2 className="text-4xl text-rpg-gold font-display mb-8">Journal de Quêtes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Placeholder Cards */}
         {[1, 2, 3].map((i) => (
            <div key={i} className="rpg-card p-6 h-64 flex flex-col items-center justify-center">
                <h3 className="text-xl text-rpg-gold mb-2">Quête #{i}</h3>
                <p className="text-rpg-muted">Détails de la mission...</p>
            </div>
         ))}
      </div>
    </div>
  );
};

export default QuestLog;
