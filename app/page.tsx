'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import NeoCardFloatingBadge from './components/NeoCardFloatingBadge';

import { 
  Wine, Sun, Music, Camera, Heart, Star, Check, X, 
  PartyPopper, MapPin, Clock, Sparkles, Crown, Martini, Calendar
} from 'lucide-react';

// --- DATA EVJF ---
const DATA = {
  brideName: "LÉA",
  eventName: "EVJF The Final Fling",
  date: "15-17 Mai 2026",
  location: "Villa Paradiso, Ibiza",
  hashtag: "#LeaSquad26",
  heroImage: "https://images.unsplash.com/photo-1564221710304-0b3a58bbce2f?q=80&w=1920&auto=format&fit=crop", // Girls having fun pool
  bridePhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", // Portrait cool girl sunglasses
  quiz: [
    { q: "Son cocktail préféré ?", options: ["Mojito", "Spritz", "Tequila PAF"], answer: 1 },
    { q: "Où a eu lieu la demande ?", options: ["À Venise", "Dans leur salon", "Au sommet de la Tour Eiffel"], answer: 1 },
    { q: "Sa phobie improbable ?", options: ["Les pieds", "Les pigeons", "Le coton"], answer: 2 },
    { q: "Son crush célébrité inavoué ?", options: ["Timothée Chalamet", "Ryan Gosling", "Pierre Niney"], answer: 0 },
  ],
  schedule: [
      { day: "Vendredi", time: "18h00", title: "Welcome B*tches", icon: <Martini />, desc: "Check-in à la villa & Apéro Sunset au bord de la piscine." },
      { day: "Samedi", time: "11h00", title: "Boat Party", icon: <Sun />, desc: "Catamaran privé, musique à fond et baignade." },
      { day: "Samedi", time: "21h00", title: "Neon Night", icon: <Music />, desc: "Dîner spectacle puis direction le club. Dress code: Fluo !" },
      { day: "Dimanche", time: "13h00", title: "Brunch Detox", icon: <Wine />, desc: "On soigne le mal de crâne avant le départ." },
  ]
};

export default function EvjfPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isRsvpOpen, setRsvpOpen] = useState(false);

  // --- LOGIN LOGIC ---
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (passwordInput.toUpperCase() === 'SQUADGOALS') {
      setIsAuthenticated(true);
    }
  };

  // Confetti Paillettes au chargement
  useEffect(() => {
    if (isAuthenticated) {
        const end = Date.now() + 2000;
        const colors = ['#ec4899', '#a855f7', '#fcd34d', '#ffffff'];
        (function frame() {
        confetti({
            particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, colors: colors,
            shapes: ['star', 'circle'], scalar: 1.5
        });
        confetti({
            particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, colors: colors,
            shapes: ['star', 'circle'], scalar: 1.5
        });
        if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }
  }, [isAuthenticated]);

  // --- LOGIN SCREEN (NEON MODE) ---
  if (!isAuthenticated) {
    return (
        <div className="h-screen w-full bg-[#120223] flex flex-col items-center justify-center p-6 relative overflow-hidden">
             {/* NEON BACKGROUND */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_70%)] animate-pulse-slow"></div>
             <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/30 rounded-full blur-[100px]"></div>
             <NeoCardFloatingBadge theme="light" />

             <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring" }}
                className="z-10 w-full max-w-sm bg-black/40 backdrop-blur-xl border-2 border-pink-500/50 p-8 rounded-[2rem] shadow-[0_0_50px_rgba(236,72,153,0.4)] text-center"
             >
                 <div className="mb-8">
                    <div className="inline-block p-4 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full mb-4 shadow-lg animate-bounce">
                        <Crown className="text-white w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
                        {DATA.brideName}'S<br/>EVJF
                    </h1>
                    <p className="text-pink-300 font-bold uppercase tracking-widest text-sm">Zone VIP Only</p>
                 </div>

                 <form onSubmit={handleLogin} className="space-y-6">
                    <input 
                        type="password" 
                        placeholder="SECRET PASS" 
                        className="w-full bg-white/10 border-2 border-pink-500/30 p-4 rounded-xl text-center text-xl font-bold tracking-widest text-white outline-none focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all uppercase placeholder:text-pink-500/50 font-mono"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                    <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl uppercase tracking-wider text-lg shadow-lg transform active:scale-95 transition-all relative overflow-hidden group">
                        <span className="relative z-10 flex items-center justify-center gap-2">LET'S PARTY <PartyPopper /></span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                 </form>
                 <p className="text-center text-pink-500/70 text-sm mt-8 font-mono">Code: SQUADGOALS</p>
             </motion.div>
        </div>
    )
  }

  // --- MAIN SITE (PARTY MODE) ---
  return (
    <div className="bg-[#0a0118] text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden leading-relaxed">
      <Navbar />
      <HeroSection />
      <VibeSection />
      <QuizSection />
      <ScheduleSection />
      <NeoCardFloatingBadge theme="light" />
      <DressCodeSection />
      
      {/* RSVP Fixed Button */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.9 }}
          onClick={() => setRsvpOpen(true)}
          className="pointer-events-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-full font-black uppercase tracking-wider shadow-[0_0_30px_rgba(236,72,153,0.5)] flex items-center justify-center gap-3 border-4 border-white/20 hover:border-white transition-all text-sm animate-pulse-slow"
        >
           I'M IN, B*TCHES! <Heart fill="currentColor" size={18} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isRsvpOpen && <RsvpModal onClose={() => setRsvpOpen(false)} />}
      </AnimatePresence>

      <footer className="py-24 text-center bg-black/50 border-t border-pink-500/20 mt-12 pb-32">
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 uppercase tracking-tighter select-none mb-4">{DATA.hashtag}</h2>
        <p className="text-pink-300/50 text-xs uppercase">What happens in Ibiza...</p>
      </footer>
    </div>
  );
}

// --- COMPONENTS ---

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-lg border-b border-white/5">
            <div className="text-xl font-black tracking-tighter text-pink-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]">TEAM {DATA.brideName}.</div>
            <div className="text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full shadow-lg">
                {DATA.date}
            </div>
        </nav>
    )
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 10]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
       {/* Background Image & Overlays */}
       <motion.div style={{ y, rotate }} className="absolute inset-0 z-0 scale-110">
          <img src={DATA.heroImage} className="w-full h-full object-cover opacity-70 filter contrast-125" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/60 to-pink-900/30 mix-blend-multiply" />
          {/* Glitter Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/glitter.png')] opacity-30 mix-blend-overlay"></div>
       </motion.div>

       {/* Content */}
       <div className="relative z-10 px-6 mt-auto mb-28">
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.8 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }} 
            transition={{ type: "spring", duration: 1.2 }}
            className="relative"
          >
              <motion.div animate={{ rotate: [0, 5, 0, -5, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -top-16 -left-10 text-yellow-400">
                <Star size={60} fill="currentColor" className="drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]" />
              </motion.div>

              <span className="inline-block px-6 py-2 rounded-full bg-pink-600 border-2 border-pink-400 text-white text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(236,72,153,0.6)] transform -rotate-3">
                ⚠️ Alerte Générale ⚠️
              </span>
              <h1 className="text-7xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-200 to-pink-500 leading-[0.85] tracking-tighter mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative z-10">
                {DATA.brideName}'S<br/>
                LAST RIDE
              </h1>
              
              <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 text-pink-200 font-bold uppercase tracking-wider text-lg bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-pink-500/30 transform rotate-2">
                  <div className="flex items-center gap-2">
                      <MapPin size={20} className="text-pink-500" /> {DATA.location}
                  </div>
                  <div className="hidden md:block w-2 h-2 bg-pink-500 rounded-full" />
                  <div className="flex items-center gap-2">
                      <Calendar size={20} className="text-pink-500" /> {DATA.date}
                  </div>
              </div>
          </motion.div>
       </div>
    </section>
  );
}

function VibeSection() {
    return (
        <section className="py-24 relative overflow-hidden z-10">
            {/* Diagonal background stripes */}
            <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-pink-600/20 to-purple-600/20 -z-10"></div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                    initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                    className="w-full md:w-1/2 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[3rem] rotate-6 blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    <img src={DATA.bridePhoto} className="w-full aspect-square object-cover rounded-[3rem] rotate-3 border-4 border-white/50 relative z-10 shadow-2xl" alt="The Bride" />
                    <div className="absolute -bottom-5 -right-5 bg-yellow-400 text-black font-black uppercase p-4 rounded-full rotate-12 shadow-lg z-20">
                        Future Madame !
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        PRÊTES POUR LE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">CHAOS ?</span>
                    </h2>
                    <p className="text-xl text-pink-200 font-medium leading-relaxed mb-8">
                        Mesdemoiselles, préparez vos valises et vos foies. On embarque la future mariée pour un week-end d'anthologie. 
                        Objectif : Lui offrir des souvenirs (et des dossiers) pour les 50 prochaines années.
                        <br/><br/>
                        <strong className="text-white">Règle N°1 :</strong> Ce qui se passe à l'EVJF, reste à l'EVJF. 🤫
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

// --- LE QUIZ INTERACTIF ---
function QuizSection() {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleAnswer = (index: number) => {
        setSelectedOption(index);
        const correct = index === DATA.quiz[currentQ].answer;
        setIsCorrect(correct);
        if (correct) setScore(score + 1);

        setTimeout(() => {
            if (currentQ < DATA.quiz.length - 1) {
                setCurrentQ(currentQ + 1);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setShowResult(true);
            }
        }, 1500);
    };

    return (
        <section className="py-32 px-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0a0118] to-[#0a0118] -z-10"></div>
             <div className="container mx-auto max-w-2xl text-center relative z-10">
                 <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
                 <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase">Le "Bride Quiz"</h2>
                 <p className="text-pink-300 mb-12 font-bold">Connais-tu vraiment la future mariée ?</p>

                 {!showResult ? (
                     <motion.div 
                        key={currentQ}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border-2 border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                     >
                         <span className="text-sm font-bold text-pink-500 uppercase tracking-widest mb-4 block">Question {currentQ + 1} / {DATA.quiz.length}</span>
                         <h3 className="text-2xl font-bold text-white mb-8">{DATA.quiz[currentQ].q}</h3>
                         <div className="flex flex-col gap-4">
                             {DATA.quiz[currentQ].options.map((option, i) => {
                                 let btnClass = "bg-white/5 hover:bg-white/20 text-white border-white/10";
                                 if (selectedOption !== null) {
                                     if (i === DATA.quiz[currentQ].answer) btnClass = "bg-green-500 text-white border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]";
                                     else if (i === selectedOption) btnClass = "bg-red-500 text-white border-red-400 animate-shake";
                                     else btnClass = "bg-white/5 text-white/50 border-white/5";
                                 }

                                 return (
                                    <button 
                                        key={i}
                                        onClick={() => selectedOption === null && handleAnswer(i)}
                                        className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all border-2 ${btnClass} ${selectedOption === null ? 'active:scale-95' : 'cursor-default'}`}
                                    >
                                        {option}
                                        {selectedOption !== null && i === DATA.quiz[currentQ].answer && <Check className="inline ml-2" />}
                                        {selectedOption !== null && i === selectedOption && i !== DATA.quiz[currentQ].answer && <X className="inline ml-2" />}
                                    </button>
                                 )
                             })}
                         </div>
                     </motion.div>
                 ) : (
                     <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-gradient-to-br from-pink-500 to-purple-600 p-10 rounded-[3rem] shadow-2xl text-center">
                         <h3 className="text-3xl font-black text-white mb-4 uppercase">Résultat !</h3>
                         <div className="text-6xl font-black text-yellow-300 mb-4 drop-shadow-lg">{score} / {DATA.quiz.length}</div>
                         <p className="text-white font-bold text-lg">
                             {score === DATA.quiz.length ? "Wow ! Tu es la BFF ultime ! 🏆" : score > 1 ? "Pas mal, mais peut mieux faire ! 😉" : "Ouhla... tu es sûre d'être invitée ? 😂"}
                         </p>
                     </motion.div>
                 )}
             </div>
        </section>
    )
}

function ScheduleSection() {
    return (
        <section className="py-24 px-6 bg-[#0a0118] relative overflow-hidden">
             <div className="container mx-auto max-w-4xl relative z-10">
                 <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 relative inline-block">
                        Le Plan d'Attaque
                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-0 left-0 h-2 bg-pink-500" />
                     </h2>
                     <p className="text-pink-300 font-bold">Attachez vos ceintures.</p>
                 </div>
                 
                 <div className="space-y-6">
                     {DATA.schedule.map((item, i) => (
                         <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-[2rem] transition-all group"
                         >
                             <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform shrink-0">
                                 {React.cloneElement(item.icon, { size: 30 })}
                             </div>
                             <div className="flex-1">
                                 <div className="flex flex-wrap gap-3 mb-2 text-sm font-bold uppercase tracking-widest">
                                     <span className="text-pink-400">{item.day}</span>
                                     <span className="text-purple-400 flex items-center gap-1"><Clock size={14}/> {item.time}</span>
                                 </div>
                                 <h3 className="text-2xl font-black text-white mb-2 uppercase">{item.title}</h3>
                                 <p className="text-pink-200/80 font-medium">{item.desc}</p>
                             </div>
                         </motion.div>
                     ))}
                 </div>
             </div>
        </section>
    )
}

function DressCodeSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0a0118] to-pink-900/20 text-center relative overflow-hidden border-t-4 border-pink-500">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/glitter.png')] opacity-20 mix-blend-overlay animate-pulse-slow"></div>
            <div className="container mx-auto px-6 relative z-10">
                <Camera className="w-16 h-16 text-pink-500 mx-auto mb-8 animate-bounce" />
                <h2 className="text-4xl font-black uppercase mb-8 text-white">Dress Code & Valise</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto font-bold">
                    <DressItem title="Journée Pool" desc="Maillot de bain sexy, paréo, lunettes de soleil XXL." color="pink" />
                    <DressItem title="Soirée Fluo" desc="Tenue blanche ou fluo. Accessoires qui brillent obligatoires !" color="yellow" />
                    <DressItem title="L'Indispensable" desc="Doliprane, bonne humeur et ta meilleure playlist." color="purple" />
                </div>
            </div>
        </section>
    )
}

function DressItem({ title, desc, color }: any) {
    const colors: any = {
        pink: "from-pink-500 to-rose-500 text-white shadow-pink-500/40",
        yellow: "from-yellow-400 to-orange-500 text-black shadow-yellow-500/40",
        purple: "from-purple-500 to-indigo-500 text-white shadow-purple-500/40",
    }
    return (
        <motion.div whileHover={{ y: -10 }} className={`bg-gradient-to-br ${colors[color]} p-8 rounded-[2.5rem] shadow-xl`}>
            <h3 className="text-2xl font-black uppercase mb-4">{title}</h3>
            <p className="font-medium opacity-90">{desc}</p>
        </motion.div>
    )
}


// --- RSVP MODAL (NEON PARTY STYLE) ---
function RsvpModal({ onClose }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
       <div className="absolute inset-0 bg-[#0a0118]/90 backdrop-blur-xl" onClick={onClose}></div>
       
       <div className="bg-[#120223] w-full max-w-lg rounded-[3rem] p-8 md:p-10 shadow-[0_0_60px_rgba(236,72,153,0.3)] relative pointer-events-auto overflow-hidden border-4 border-pink-500/30">
          {/* Background FX */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.4),transparent_60%)]"></div>
          
          <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"><X size={24} /></button>
          
          <div className="mb-10 text-center relative z-10">
              <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 uppercase drop-shadow-lg italic transform -rotate-2">ARE YOU READY?!</h3>
              <p className="text-pink-200 font-bold mt-2">Confirme ta place dans la Team Bride.</p>
          </div>
          
          <div className="space-y-6 relative z-10">
             <div>
                <input type="text" className="w-full bg-white/5 border-2 border-pink-500/30 p-4 rounded-2xl font-bold text-white outline-none focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all placeholder:text-pink-500/50 text-center text-lg uppercase" placeholder="TON BLAZE (Prénom)" />
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <label className="cursor-pointer group">
                    <input type="radio" name="presence" className="peer sr-only" defaultChecked />
                    <div className="p-6 rounded-2xl border-4 border-white/10 bg-white/5 text-center font-black text-white peer-checked:border-green-500 peer-checked:bg-green-500/20 peer-checked:text-green-400 transition-all group-hover:scale-105">
                        <span className="text-3xl block mb-2">🔥</span>
                        HELL YEAH!
                    </div>
                </label>
                <label className="cursor-pointer group">
                    <input type="radio" name="presence" className="peer sr-only" />
                    <div className="p-6 rounded-2xl border-4 border-white/10 bg-white/5 text-center font-black text-white peer-checked:border-red-500 peer-checked:bg-red-500/20 peer-checked:text-red-400 transition-all group-hover:scale-105">
                         <span className="text-3xl block mb-2">😭</span>
                        JE PEUX PAS...
                    </div>
                </label>
             </div>

             <div>
                <textarea className="w-full bg-white/5 border-2 border-pink-500/30 p-4 rounded-2xl font-medium text-white outline-none focus:border-pink-500 transition-all h-28 resize-none placeholder:text-pink-500/50" placeholder="Ta chanson pour la playlist de la soirée ? (Optionnel)"></textarea>
             </div>
             
             <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black py-5 rounded-2xl uppercase tracking-wider text-xl shadow-[0_0_30px_rgba(236,72,153,0.5)] mt-4 transition-all active:scale-95 animate-pulse-slow relative overflow-hidden group">
                <span className="relative z-10">ENVOYER MA RÉPONSE 🚀</span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </button>
          </div>
       </div>
    </motion.div>
  );
}