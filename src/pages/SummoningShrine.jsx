import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader, Github, Linkedin, FileText } from 'lucide-react';

const SummoningShrine = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [terminalLines, setTerminalLines] = useState([
    { text: '> SYSTÈME DE COMMUNICATION INITIALISÉ...', type: 'success', delay: 0 },
    { text: '> Connexion au serveur établie [OK]', type: 'info', delay: 0.2 },
    { text: '> Chiffrement E2E activé [SECURE]', type: 'success', delay: 0.4 },
    { text: '> En attente de transmission...', type: 'info', delay: 0.6 }
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulation d'envoi (remplacer par vraie API)
    setTerminalLines(prev => [...prev, 
      { text: '> Transmission en cours...', type: 'info', delay: 0 }
    ]);

    setTimeout(() => {
      setFormStatus('success');
      setTerminalLines(prev => [...prev,
        { text: `> PAQUET REÇU: ${formData.name}`, type: 'success', delay: 0 },
        { text: `> EMAIL: ${formData.email}`, type: 'success', delay: 0.1 },
        { text: '> Message envoyé avec succès [200 OK]', type: 'success', delay: 0.2 },
        { text: '> Réponse estimée: 24-48h', type: 'info', delay: 0.3 }
      ]);
      
      // Reset form
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Direct',
      value: 'yanis.korichi@example.com',
      color: 'rpg-gold',
      link: 'mailto:yanis.korichi@example.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Sylverthorn',
      color: 'rpg-mana',
      link: 'https://github.com/Sylverthorn'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Yanis Korichi',
      color: 'rpg-mana',
      link: 'https://www.linkedin.com/in/yanis-korichi/'
    },
    {
      icon: FileText,
      label: 'CV / Portfolio',
      value: 'Télécharger PDF',
      color: 'rpg-crimson',
      link: '/CV_Korichi_Yanis.pdf'
    }
  ];

  return (
    <div className="pt-20 pb-20 px-4 min-h-screen relative overflow-hidden">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(255,215,0,0.03)_50%)] bg-[length:100%_4px] animate-scanline pointer-events-none" />

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rpg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rpg-mana/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal size={40} className="text-rpg-gold" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl text-rpg-gold font-display tracking-[0.3em] drop-shadow-neon-gold">
              TERMINAL DE CONTACT
            </h2>
          </div>
          <p className="text-rpg-muted font-mono text-sm">SECURE_COMMUNICATION_CHANNEL_v2.1</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rpg-card bg-rpg-slate/80 backdrop-blur-sm border-rpg-gold/30 p-8 relative overflow-hidden group hover:border-rpg-gold/60 transition-all duration-300">
              
              {/* Card Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rpg-gold to-transparent opacity-50" />
              
              <h3 className="text-2xl font-display text-white mb-6 flex items-center gap-3">
                <Send size={24} className="text-rpg-gold" />
                Formulaire de Transmission
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Input */}
                <div>
                  <label className="block text-rpg-gold font-mono text-xs uppercase tracking-wider mb-2">
                    <User size={14} className="inline mr-2" />
                    Identifiant Utilisateur
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                    className="w-full bg-black/60 border border-rpg-gold/30 text-white px-4 py-3 font-mono text-sm focus:border-rpg-gold focus:outline-none focus:ring-1 focus:ring-rpg-gold transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-rpg-gold font-mono text-xs uppercase tracking-wider mb-2">
                    <Mail size={14} className="inline mr-2" />
                    Canal de Réponse
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@domaine.com"
                    required
                    className="w-full bg-black/60 border border-rpg-gold/30 text-white px-4 py-3 font-mono text-sm focus:border-rpg-gold focus:outline-none focus:ring-1 focus:ring-rpg-gold transition-all duration-300"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-rpg-gold font-mono text-xs uppercase tracking-wider mb-2">
                    <Terminal size={14} className="inline mr-2" />
                    Objet de la Requête
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet du message"
                    required
                    className="w-full bg-black/60 border border-rpg-gold/30 text-white px-4 py-3 font-mono text-sm focus:border-rpg-gold focus:outline-none focus:ring-1 focus:ring-rpg-gold transition-all duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-rpg-gold font-mono text-xs uppercase tracking-wider mb-2">
                    <MessageSquare size={14} className="inline mr-2" />
                    Données du Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message détaillé..."
                    rows={6}
                    required
                    className="w-full bg-black/60 border border-rpg-gold/30 text-white px-4 py-3 font-mono text-sm focus:border-rpg-gold focus:outline-none focus:ring-1 focus:ring-rpg-gold transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                  className={`w-full rpg-btn py-4 flex items-center justify-center gap-3 relative overflow-hidden ${
                    formStatus === 'sending' ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' && <Loader size={20} className="animate-spin" />}
                  {formStatus === 'success' && <CheckCircle size={20} />}
                  {formStatus === 'idle' && <Send size={20} />}
                  
                  <span className="font-display tracking-[0.2em]">
                    {formStatus === 'sending' && 'TRANSMISSION EN COURS...'}
                    {formStatus === 'success' && 'MESSAGE TRANSMIS'}
                    {formStatus === 'idle' && 'TRANSMETTRE LE MESSAGE'}
                  </span>
                </motion.button>

              </form>

            </div>
          </motion.div>

          {/* Right Column: Terminal Output + Contact Methods */}
          <div className="space-y-8">
            
            {/* Terminal Output */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rpg-card bg-black/90 backdrop-blur-sm border-rpg-mana/30 p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rpg-mana to-transparent opacity-50" />
              
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-rpg-mana/30">
                <Terminal size={20} className="text-rpg-mana" />
                <h3 className="font-display text-rpg-mana text-lg tracking-wider">CONSOLE_OUTPUT</h3>
              </div>

              <div className="font-mono text-sm space-y-2 min-h-[300px]">
                <AnimatePresence>
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: line.delay }}
                      className={`${
                        line.type === 'success' ? 'text-green-400' :
                        line.type === 'error' ? 'text-red-400' :
                        'text-rpg-mana'
                      }`}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-rpg-gold"
                >
                  ▊
                </motion.span>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rpg-card bg-rpg-slate/80 backdrop-blur-sm border-rpg-gold/30 p-6"
            >
              <h3 className="text-xl font-display text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rpg-gold animate-pulse" />
                Canaux Alternatifs
              </h3>

              <div className="space-y-3">
                {contactMethods.map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={i}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-4 p-3 bg-black/40 border border-${method.color}/30 hover:border-${method.color} transition-all duration-300 group`}
                    >
                      <div className={`p-2 bg-${method.color}/10 border border-${method.color}/30 group-hover:bg-${method.color}/20 transition-all duration-300`}>
                        <Icon size={20} className={`text-${method.color}`} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-mono text-rpg-muted uppercase tracking-wider">{method.label}</div>
                        <div className={`text-sm font-mono text-${method.color} truncate`}>{method.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SummoningShrine;
