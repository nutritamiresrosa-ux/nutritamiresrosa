/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Baby,
  Sparkles,
  Apple,
  Brain,
  Activity,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sun,
  Moon,
  Menu,
  X,
  MessageCircle,
  GraduationCap,
  MapPinCheck,
  Globe,
  Clock,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Search,
} from "lucide-react";
import {
  specializations,
  steps,
  instagramPosts,
  Specialization,
  faqCategories,
  faqItems,
} from "./data";

export default function App() {
const [darkMode, setDarkMode] = useState<boolean>(false);


  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>("https://i.ibb.co/MDJJXFyh/eu-nutri-materno-cortada.jpg");

  // FAQ States
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("todos");
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>("");

  // Form states for the WhatsApp Contact Generator
  const [clientName, setClientName] = useState<string>("");
  const [category, setCategory] = useState<string>("Gestante");
  const [childInfo, setChildInfo] = useState<string>("");
  const [messageText, setMessageText] = useState<string>("");

  // Modal for Online Consulting
  const [consultoriaOpen, setConsultoriaOpen] = useState<boolean>(false);

 useEffect(() => {
  const root = window.document.documentElement;
  root.classList.remove("dark");
  localStorage.setItem("theme", "light");
}, []);


  // Handle WhatsApp message formatting & redirection
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5551933802676";
    const greeting = `Olá, Nutri Tamires! Me chamo ${clientName || "visitante do site"}.`;
    const interest = `Gostaria de agendar ou saber mais sobre atendimento para: *${category}*.`;
    const details = childInfo ? `\nInformações adicionais (idade/nome do bebê): ${childInfo}` : "";
    const customMsg = messageText ? `\n\nMensagem: ${messageText}` : "";
    
    const fullText = `${greeting}\n${interest}${details}${customMsg}`;
    const encodedText = encodeURIComponent(fullText);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    // Redirect without target="_blank"
    window.location.href = whatsappUrl;
  };

  // Helper function to render Lucide icons dynamically
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Heart":
        return <Heart className={className} />;
      case "Baby":
        return <Baby className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Apple":
        return <Apple className={className} />;
      case "Brain":
        return <Brain className={className} />;
      case "Activity":
        return <Activity className={className} />;
      default:
        return <Heart className={className} />;
    }
  };

  const whatsappBaseUrl = "https://wa.me/5551933802676";
  const whatsappConsultoriaUrl = `${whatsappBaseUrl}?text=Ol%C3%A1%20Tamires!%20Vi%20sobre%20a%20Consultoria%20Online%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es.`;

  return (
    <div className="min-h-screen bg-[#FCF8F5] dark:bg-[#120B0A] text-stone-800 dark:text-stone-100 transition-colors duration-300 font-sans selection:bg-pink-200 dark:selection:bg-rose-950/50">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FCF8F5]/85 dark:bg-[#120B0A]/85 border-b border-pink-100/30 dark:border-rose-950/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-pink-50">
              Tamires Rosa
            </span>
            <span className="text-xs tracking-widest uppercase font-medium text-pink-600 dark:text-pink-400 -mt-1">
              Nutrição Materno-Infantil
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#para-quem" className="text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Para quem é
            </a>
            <a href="#sobre-mim" className="text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Sobre mim
            </a>
            <a href="#como-funciona" className="text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Como funciona
            </a>
            <a href="#instagram" className="text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Conteúdo
            </a>
            <a href="#faq" className="text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Dúvidas (FAQ)
            </a>
            <a href="#contato" className="text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Contato
            </a>
            
            <span className="text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 rounded-full border border-stone-200/50 dark:border-stone-800">
              CRN2 20431D
            </span>
          </nav>

          {/* Header Action Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 hover:bg-pink-100/50 dark:hover:bg-rose-950/30 transition-all cursor-pointer"
              aria-label="Alternar tema"
              id="theme-toggle-desktop"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-stone-600" />}
            </button>

            {/* WhatsApp CTA Button 1 */}
            <a
              href={whatsappBaseUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              id="whatsapp-btn-header"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu & Theme controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 transition-all cursor-pointer"
              aria-label="Alternar tema"
              id="theme-toggle-mobile"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-stone-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 transition-all cursor-pointer"
              aria-label="Menu principal"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-pink-100/30 dark:border-rose-950/20 bg-[#FCF8F5] dark:bg-[#120B0A] px-4 py-6 space-y-4"
            >
              <nav className="flex flex-col space-y-4 font-medium text-stone-600 dark:text-stone-300">
                <a
                  href="#para-quem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Para quem é
                </a>
                <a
                  href="#sobre-mim"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Sobre mim
                </a>
                <a
                  href="#como-funciona"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Como funciona
                </a>
                <a
                  href="#instagram"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Conteúdo
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Dúvidas (FAQ)
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Contato
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-200/50 dark:border-stone-800/50 flex flex-col gap-3">
                <span className="text-xs text-center text-stone-500 dark:text-stone-400">
                  Nutricionista Materno-Infantil • CRN2 20431D
                </span>
                
                {/* WhatsApp CTA Button 2 */}
                <a
                  href={whatsappBaseUrl}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm font-semibold transition-all cursor-pointer"
                  id="whatsapp-btn-mobile-nav"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 md:py-24 overflow-hidden">
        {/* Soft background ambient blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-200/20 dark:bg-rose-950/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-100/20 dark:bg-amber-950/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Left */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 dark:bg-rose-950/20 border border-pink-100/50 dark:border-rose-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold tracking-wide uppercase"
              >
                <Heart size={12} className="fill-current text-pink-500" />
                Nutricionista materno-infantil
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-stone-900 dark:text-stone-50"
              >
                Nutrição com afeto: <span className="text-pink-600 dark:text-pink-400">do desejo de ser mãe</span> ao prato do seu filho
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Atendimento online e presencial em Porto Alegre e Charqueadas/RS. Escuta ativa, acolhimento e plano individualizado em todas as fases da maternidade.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                {/* WhatsApp CTA Button 3 */}
                <a
                  href={whatsappBaseUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  id="whatsapp-btn-hero"
                >
                  <MessageCircle size={16} />
                  Agendar Consulta
                </a>

                {/* Consultoria Online Button */}
                <button
                  onClick={() => setConsultoriaOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-50 hover:bg-pink-100 dark:bg-rose-950/20 dark:hover:bg-rose-950/30 text-pink-700 dark:text-pink-300 border border-pink-200/50 dark:border-rose-900/30 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer"
                  id="consultoria-btn-hero"
                >
                  <Sparkles size={16} className="text-pink-500" />
                  Consultoria Online
                </button>
                
                <a
                  href="#para-quem"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer"
                >
                  Ver Especialidades
                </a>
              </motion.div>
            </div>

            {/* Bento Highlight Card Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-white dark:bg-[#1E1412] rounded-3xl p-6 sm:p-8 shadow-xl shadow-pink-100/20 dark:shadow-stone-950/50 border border-pink-100/20 dark:border-rose-950/20 space-y-6 relative overflow-hidden">
                {/* Subtle graphic accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                      Atendimento Ativo
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full border border-amber-100 dark:border-amber-900/30">
                    CRN2 20431D
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 leading-snug">
                    Acolhimento Integral
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    Nossas consultas são desenhadas para respeitar a dinâmica de cada família, unindo carinho, respeito e embasamento científico.
                  </p>
                </div>

                {/* Bento layout inner grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-pink-50/50 dark:bg-rose-950/10 rounded-2xl border border-pink-100/10 dark:border-rose-900/10">
                    <MapPin className="text-pink-600 dark:text-pink-400 mb-1" size={18} />
                    <h4 className="text-xs font-bold text-stone-800 dark:text-stone-200">Presencial</h4>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">Porto Alegre & Charqueadas</p>
                  </div>
                  
                  <div className="p-3 bg-amber-50/40 dark:bg-amber-950/10 rounded-2xl border border-amber-100/10 dark:border-amber-900/10">
                    <Globe className="text-amber-600 dark:text-amber-400 mb-1" size={18} />
                    <h4 className="text-xs font-bold text-stone-800 dark:text-stone-200">Online</h4>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">Famílias de todo o mundo</p>
                  </div>
                </div>


              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION: PARA QUEM É (BENTO GRID - 6 CARDS) */}
      <section id="para-quem" className="py-20 bg-stone-50/50 dark:bg-[#1E1412]/20 border-t border-b border-pink-100/20 dark:border-rose-950/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Apoio em todas as fases da jornada materno-infantil
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              Cada etapa tem seus próprios desafios e encantos. Encontre o acompanhamento personalizado perfeito para a fase em que você e seu filho se encontram hoje.
            </p>
          </div>

          {/* Bento Grid Misto */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec: Specialization, index: number) => {
              const isSelected = activeSpecialty === spec.id;
              
              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setActiveSpecialty(isSelected ? null : spec.id)}
                  className={`bg-white dark:bg-[#1E1412] rounded-3xl p-6 sm:p-8 border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected 
                      ? "ring-2 ring-pink-500/50 dark:ring-pink-400/50 scale-[1.01]" 
                      : "border-stone-200/60 dark:border-stone-800/60"
                  }`}
                  id={`spec-card-${spec.id}`}
                >
                  <div className="space-y-4">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${spec.colorClass} border`}>
                        {renderIcon(spec.iconName, "text-stone-800 dark:text-stone-100 w-6 h-6")}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 px-2.5 py-1 rounded-full">
                        {spec.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {spec.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      {spec.description}
                    </p>
                  </div>

                  {/* Interactive Expand indicators */}
                  <div className="pt-6 flex items-center justify-between text-xs font-semibold text-pink-600 dark:text-pink-400">
                    <span>Acompanhamento especializado</span>
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Section Bottom CTA - WhatsApp CTA Button 4 */}
          <div className="mt-12 text-center">
            <a
              href={whatsappBaseUrl}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-50 dark:bg-rose-950/20 hover:bg-pink-100 dark:hover:bg-rose-950/30 text-pink-700 dark:text-pink-300 font-bold rounded-full text-sm border border-pink-200/50 dark:border-rose-900/30 transition-all cursor-pointer"
              id="whatsapp-btn-specialties"
            >
              <MessageCircle size={16} className="fill-current text-pink-500" />
              Quero agendar meu atendimento personalizado
            </a>
          </div>

        </div>
      </section>

      {/* SECTION: SOBRE MIM */}
      <section id="sobre-mim" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with beautiful frame */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                
                {/* Decorative background vectors/blobs */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-200/30 dark:bg-rose-950/15 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100/30 dark:bg-amber-950/10 rounded-full blur-xl pointer-events-none" />
                
                {/* Border frames styled with bento shadows */}
                <div className="relative rounded-3xl p-3 bg-white dark:bg-[#1E1412] shadow-xl border border-stone-200/30 dark:border-stone-800/30">
                  <img
                    src={profileImage}
                    onError={() => setProfileImage("https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800")}
                    alt="Tamires Rosa - Nutricionista Materno-Infantil"
                    className="w-full h-[400px] object-cover rounded-2xl filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Embedded Floating credentials badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-[#120B0A]/90 backdrop-blur-md p-4 rounded-2xl border border-pink-100/25 dark:border-rose-950/25 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-stone-900 dark:text-stone-50 uppercase tracking-wider">Tamires Rosa</h4>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400">Nutricionista Especialista • CRN2 20431D</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Bio & Badges */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 dark:bg-rose-950/20 border border-pink-100/50 dark:border-rose-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold tracking-wide uppercase">
                <GraduationCap size={12} />
                Conheça a Nutri
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Olá! Sou a Tamires Rosa
              </h2>

              <div className="space-y-4 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  Sou nutricionista graduada e apaixonada pela saúde na infância e gestação. Minha missão é dar a você as ferramentas práticas e o acolhimento necessário para trilhar uma maternidade muito mais leve, nutritiva e prazerosa.
                </p>
                <p>
                  Acredito em uma nutrição baseada no respeito, livre de terrorismos alimentares ou cobranças irreais. Trabalho de forma humanizada, analisando o comportamento e o ambiente familiar, de modo que cada pequena vitória seja celebrada e incorporada à rotina para sempre.
                </p>
              </div>

              {/* Specialization list (Badges) */}
              <div className="pt-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                  Especializações e Certificações
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-stone-950/30 rounded-2xl border border-stone-200/20 dark:border-stone-850/20">
                    <CheckCircle2 className="text-pink-600 dark:text-pink-400 shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                      Pós-graduada em Nutrição Materno-Infantil
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-stone-950/30 rounded-2xl border border-stone-200/20 dark:border-stone-850/20">
                    <CheckCircle2 className="text-pink-600 dark:text-pink-400 shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                      Capacitação em Nutrição e Suplementação no Autismo e TDAH
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-stone-950/30 rounded-2xl border border-stone-200/20 dark:border-stone-850/20">
                    <CheckCircle2 className="text-pink-600 dark:text-pink-400 shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                      Pós-graduada em Nutrição no Autismo
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-stone-950/30 rounded-2xl border border-stone-200/20 dark:border-stone-850/20">
                    <CheckCircle2 className="text-pink-600 dark:text-pink-400 shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
                      Suporte à Amamentação e Aleitamento
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button 5 */}
              <div className="pt-4">
                <a
                  href={whatsappBaseUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
                  id="whatsapp-btn-about"
                >
                  <MessageCircle size={16} />
                  Agende sua avaliação com a Tamires
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMO FUNCIONA (3 PASSO TIMELINE) */}
      <section id="como-funciona" className="py-20 bg-stone-50 dark:bg-[#1E1412]/20 border-t border-b border-pink-100/20 dark:border-rose-950/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs tracking-widest uppercase font-bold text-pink-600 dark:text-pink-400">
              Método Prático & Leve
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Sua jornada de cuidado em 3 etapas
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              Um caminho simples, transparente e sem estresse, desde o primeiro contato até o plano alimentar ser incorporado no dia a dia da família.
            </p>
          </div>

          {/* 3 Step bento-style chain */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* Background line for connection on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-pink-100 dark:bg-rose-950/30 -translate-y-1/2 z-0" />

            {steps.map((step, index: number) => {
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white dark:bg-[#1E1412] rounded-3xl p-6 sm:p-8 border border-stone-200/50 dark:border-stone-800/50 shadow-sm relative z-10 flex flex-col justify-between h-full hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    {/* Number bubble */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-4xl font-extrabold text-pink-200 dark:text-rose-950">
                        {step.number}
                      </span>
                      <span className="p-2 rounded-full bg-pink-50 dark:bg-rose-950/20 text-pink-600 dark:text-pink-400">
                        <CheckCircle2 size={16} />
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-50">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                  
                  {index === 2 && (
                    /* WhatsApp CTA Button 6 */
                    <div className="pt-6">
                      <a
                        href={whatsappBaseUrl}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-xs font-semibold transition-all cursor-pointer"
                        id="whatsapp-btn-steps"
                      >
                        <MessageCircle size={14} />
                        Iniciar meu Acompanhamento
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: INSTAGRAM FEED SIMULATION */}
      <section id="instagram" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-pink-600 dark:text-pink-400">
              <Instagram size={16} />
              <span className="text-xs font-bold tracking-widest uppercase font-sans">@nutri.tamiresrosa</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Conteúdo educativo e gratuito
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              Fique por dentro de mitos, verdades, dicas rápidas e receitas práticas compartilhadas diariamente no perfil do Instagram.
            </p>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instagramPosts.map((post) => {
              return (
                <motion.a
                  key={post.id}
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-[#1E1412] rounded-3xl border border-stone-200/40 dark:border-stone-800/40 shadow-sm overflow-hidden flex flex-col h-full group cursor-pointer"
                >
                  {/* Photo area with referer safety */}
                  <div className="relative aspect-square overflow-hidden bg-stone-100">
                    <img
                      src={post.imageUrl}
                      alt="Aesthetic pediatric nutrition post representation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-pink-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                      <div className="flex items-center gap-2">
                        <Heart className="fill-current text-rose-500" size={20} />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="fill-current" size={20} />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed font-sans">
                      {post.caption}
                    </p>
                    
                    <div className="pt-2 border-t border-stone-100 dark:border-stone-900 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
                      <span className="group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors font-medium">Ver no Instagram</span>
                      <ExternalLink size={14} className="group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social CTA link */}
          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/nutri.tamiresrosa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-800 font-semibold rounded-full text-sm transition-all"
            >
              <Instagram size={16} className="text-pink-600 dark:text-pink-400" />
              Seguir @nutri.tamiresrosa
            </a>
          </div>

        </div>
      </section>

      {/* SECTION: FAQ (PERGUNTAS FREQUENTES) */}
      <section id="faq" className="py-20 bg-white dark:bg-[#120B0A] relative overflow-hidden border-t border-b border-pink-100/10 dark:border-rose-950/15">
        {/* Soft decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/10 dark:bg-rose-950/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 dark:bg-rose-950/20 border border-pink-100/50 dark:border-rose-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold uppercase tracking-wide">
              <HelpCircle size={12} />
              Respostas para as suas dúvidas
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Perguntas Frequentes
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              Encontre esclarecimentos rápidos sobre consultas presenciais e online, formas de pagamento, especialidades e o método de acolhimento da Nutri Tamires Rosa.
            </p>
          </div>

          {/* Search bar & Category filters */}
          <div className="space-y-6 mb-10">
            {/* Live Search Input */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-stone-400 dark:text-stone-500" size={18} />
              </div>
              <input
                type="text"
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                placeholder="Busque por palavras-chave (ex: online, PIX, introdução)..."
                className="w-full pl-11 pr-4 py-2.5 bg-stone-50 dark:bg-[#1E1412] border border-stone-200/60 dark:border-stone-800 rounded-xl text-xs sm:text-sm text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all shadow-inner"
              />
              {faqSearchQuery && (
                <button
                  onClick={() => setFaqSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-stone-400 hover:text-pink-600 dark:hover:text-pink-400"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button
                onClick={() => {
                  setActiveFaqCategory("todos");
                  setExpandedFaqId(null);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFaqCategory === "todos"
                    ? "bg-pink-600 text-white shadow-sm"
                    : "bg-stone-50 dark:bg-[#1E1412] text-stone-600 dark:text-stone-300 hover:bg-pink-50 dark:hover:bg-rose-950/20 border border-stone-200/50 dark:border-stone-800/40"
                }`}
              >
                Todos os Assuntos
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveFaqCategory(category.id);
                    setExpandedFaqId(null);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeFaqCategory === category.id
                      ? "bg-pink-600 text-white shadow-sm"
                      : "bg-stone-50 dark:bg-[#1E1412] text-stone-600 dark:text-stone-300 hover:bg-pink-50 dark:hover:bg-rose-950/20 border border-stone-200/50 dark:border-stone-800/40"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {(() => {
              const filteredFaqs = faqItems.filter((item) => {
                const matchesCategory = activeFaqCategory === "todos" || item.category === activeFaqCategory;
                const matchesSearch = faqSearchQuery.trim() === "" ||
                  item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                  item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
              });

              if (filteredFaqs.length > 0) {
                return filteredFaqs.map((faq) => {
                  const isOpen = expandedFaqId === faq.id;
                  
                  return (
                    <div
                      key={faq.id}
                      className={`bg-stone-50 dark:bg-[#1E1412] rounded-3xl p-5 sm:p-6 border transition-all duration-300 shadow-sm ${
                        isOpen
                          ? "border-pink-200 dark:border-pink-900/40 bg-pink-50/10 dark:bg-rose-950/5 ring-1 ring-pink-100 dark:ring-rose-950/10"
                          : "border-stone-200/50 dark:border-stone-800/50 hover:border-pink-250 dark:hover:border-rose-900/30"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                        className="w-full flex items-start justify-between text-left gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50 hover:text-pink-600 dark:hover:text-pink-400 transition-colors pr-2">
                          {faq.question}
                        </span>
                        <span className={`p-1.5 rounded-full bg-white dark:bg-stone-900 text-stone-500 dark:text-stone-400 transition-transform duration-300 shrink-0 border border-stone-150 dark:border-stone-800/50 ${
                          isOpen ? "rotate-180 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-950" : ""
                        }`}>
                          <ChevronDown size={16} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pb-1 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans border-t border-pink-100/10 dark:border-rose-950/20 mt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                });
              } else {
                return (
                  <div className="text-center py-12 px-4 bg-stone-50 dark:bg-[#1E1412] rounded-3xl border border-stone-200/50 dark:border-stone-800/50 space-y-4">
                    <HelpCircle className="mx-auto text-stone-400 dark:text-stone-600" size={40} />
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">Nenhuma dúvida encontrada</h4>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                        Não encontramos resultados para "{faqSearchQuery}". Tente usar palavras menos específicas ou limpe o filtro.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setFaqSearchQuery("");
                        setActiveFaqCategory("todos");
                      }}
                      className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full text-xs transition-all cursor-pointer"
                    >
                      Ver Todas as Dúvidas
                    </button>
                  </div>
                );
              }
            })()}
          </div>

          {/* Bottom Call to Action Card */}
          <div className="mt-12 bg-gradient-to-br from-pink-500/10 to-rose-500/10 dark:from-pink-950/20 dark:to-rose-950/25 border border-pink-100/40 dark:border-rose-950/30 rounded-3xl p-6 sm:p-8 text-center space-y-4 max-w-3xl mx-auto shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50">
              Ainda ficou com alguma dúvida sobre as consultas?
            </h3>
            <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Estou totalmente à disposição para conversar de forma individualizada e esclarecer como funciona o acompanhamento nutricional da sua família.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/5551933802676?text=${encodeURIComponent("Olá, Nutri Tamires! Estava lendo as dúvidas frequentes no site e gostaria de esclarecer uma dúvida sobre o seu acompanhamento.")}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full text-sm transition-all shadow-md cursor-pointer"
                id="whatsapp-btn-faq-cta"
              >
                <MessageCircle size={16} />
                Tirar Dúvida no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: CONTATO & LOCALIZAÇÃO */}
      <section id="contato" className="py-20 bg-stone-50 dark:bg-[#1E1412]/20 border-t border-b border-pink-100/20 dark:border-rose-950/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white dark:bg-[#1E1412] rounded-3xl overflow-hidden shadow-xl border border-stone-200/50 dark:border-stone-800/50">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Location Details */}
              <div className="lg:col-span-5 bg-pink-50/30 dark:bg-rose-950/10 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 dark:bg-rose-950/20 border border-pink-100/50 dark:border-rose-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold tracking-wide uppercase">
                    <MapPin size={12} />
                    Locais de Atendimento
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50">
                    Onde me encontrar
                  </h3>

                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    Ofereço atendimento presencial e acolhedor em duas cidades do Rio Grande do Sul, além de consultas online completas para qualquer lugar do mundo.
                  </p>
                </div>

                {/* Cities list */}
                <div className="space-y-6">
                  {/* Porto Alegre */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0 mt-1">
                      <MapPinCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-50">Porto Alegre / RS</h4>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                        Espaço CDI – Rua Pereira franco, 65. Bairro sao joao. Atendimento presencial climatizado e adaptado para acolher bebês e crianças.
                      </p>
                    </div>
                  </div>

                  {/* Charqueadas */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0 mt-1">
                      <MapPinCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-50">Charqueadas / RS</h4>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                        Atendimento presencial com horários agendados, em ambiente acolhedor e centralizado.
                      </p>
                    </div>
                  </div>

                  {/* Atendimento Online */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0 mt-1">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-50">Atendimento Online</h4>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                        Consultas online completas com duração média de 1h a 1h30 para famílias de todo o mundo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini contact tokens */}
                <div className="pt-4 border-t border-stone-200/50 dark:border-stone-800/50 space-y-2 text-xs text-stone-500 dark:text-stone-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Mail size={12} />
                    <span>nutri.tamiresrosa@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram size={12} />
                    <span>@nutri.tamiresrosa</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive WhatsApp Form Generator */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50">
                    Mande uma mensagem
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-sans">
                    Preencha os dados abaixo para gerar um convite personalizado e abrir o WhatsApp imediatamente com sua mensagem formatada.
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="clientName" className="text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Seu Nome *
                    </label>
                    <input
                      id="clientName"
                      type="text"
                      required
                      placeholder="Ex: Maria Eduarda"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-stone-800 dark:text-stone-100"
                    />
                  </div>

                  {/* Category select */}
                  <div className="space-y-1">
                    <label htmlFor="category" className="text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Tipo de Atendimento
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-stone-800 dark:text-stone-200"
                    >
                      <option value="Tentante">Quero engravidar (Tentante)</option>
                      <option value="Gestante">Acompanhamento de Gestação</option>
                      <option value="Pós-parto / Amamentação">Suporte no Pós-parto / Amamentação</option>
                      <option value="Introdução Alimentar">Introdução Alimentar do Bebê</option>
                      <option value="TEA / TDAH Seletividade">Seletividade Alimentar em TEA / TDAH</option>
                      <option value="Saúde Infantil Geral">Saúde Infantil / Consulta Pediátrica</option>
                    </select>
                  </div>

                  {/* Child age info */}
                  <div className="space-y-1">
                    <label htmlFor="childInfo" className="text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Nome e idade do bebê/criança (Opcional)
                    </label>
                    <input
                      id="childInfo"
                      type="text"
                      placeholder="Ex: Arthur, 6 meses / Estou grávida de 12 semanas"
                      value={childInfo}
                      onChange={(e) => setChildInfo(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-stone-800 dark:text-stone-100"
                    />
                  </div>

                  {/* Custom message text */}
                  <div className="space-y-1">
                    <label htmlFor="messageText" className="text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Escreva sua mensagem ou dúvida (Opcional)
                    </label>
                    <textarea
                      id="messageText"
                      rows={3}
                      placeholder="Ex: Gostaria de saber os valores e datas disponíveis para atendimento em Porto Alegre."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 text-stone-800 dark:text-stone-100"
                    />
                  </div>

                  {/* WhatsApp CTA Button 7 (Form submit) */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer mt-2"
                    id="whatsapp-btn-form"
                  >
                    <MessageCircle size={16} />
                    Enviar Mensagem via WhatsApp
                  </button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                Tamires Rosa
              </span>
              <p className="text-xs leading-relaxed max-w-sm font-sans">
                Acolhimento clínico humanizado focado na saúde e desenvolvimento da infância, gestação e preparação pré-concepcional da família.
              </p>
              <div className="pt-2">
                <span className="text-xs px-3 py-1 bg-stone-900 border border-stone-800 text-stone-300 rounded-full inline-block font-mono">
                  CRN2 20431D
                </span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 font-sans">Navegação</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#para-quem" className="hover:text-pink-400 transition-colors">Para quem é</a></li>
                <li><a href="#sobre-mim" className="hover:text-pink-400 transition-colors">Sobre mim</a></li>
                <li><a href="#como-funciona" className="hover:text-pink-400 transition-colors">Como funciona</a></li>
                <li><a href="#instagram" className="hover:text-pink-400 transition-colors">Conteúdo educativo</a></li>
                <li><a href="#faq" className="hover:text-pink-400 transition-colors">Dúvidas Frequentes (FAQ)</a></li>
                <li><a href="#contato" className="hover:text-pink-400 transition-colors">Contato e Locais</a></li>
              </ul>
            </div>

            {/* Socials / Direct Contacts Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 font-sans">Contatos Oficiais</h4>
              
              <ul className="space-y-3 text-xs">
                {/* WhatsApp CTA Button 8 */}
                <li>
                  <a href={whatsappBaseUrl} className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors" id="whatsapp-btn-footer">
                    <MessageCircle size={14} className="text-pink-500" />
                    <span>WhatsApp: (51) 93380-2676</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:nutri.tamiresrosa@gmail.com" className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                    <Mail size={14} className="text-pink-500" />
                    <span>nutri.tamiresrosa@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/nutri.tamiresrosa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                    <Instagram size={14} className="text-pink-500" />
                    <span>Instagram: @nutri.tamiresrosa</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]">
            <p>
              © {new Date().getFullYear()} Tamires Rosa Nutrição Materno-Infantil. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 text-stone-500 font-sans">
              Desenvolvido de forma ética e amigável. Porto Alegre • Charqueadas / RS
            </p>
          </div>
        </div>
      </footer>

      {/* CONSULTORIA ONLINE MODAL */}
      <AnimatePresence>
        {consultoriaOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConsultoriaOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#FCF8F5] dark:bg-[#1E1412] rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200/50 dark:border-stone-850/80 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setConsultoriaOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 pr-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-pink-50 dark:bg-rose-950/20 text-pink-700 dark:text-pink-300 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles size={10} className="fill-current text-pink-500 animate-pulse" />
                    Novo Formato Prático
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50">
                    Consultoria Online
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-sans">
                    Criada especialmente para quem tem a rotina corrida, mas deseja o acompanhamento e a segurança de uma nutrição materno-infantil de excelência.
                  </p>
                </div>

                {/* Steps list */}
                <div className="space-y-4 pt-2">
                  
                  {/* Step 1 */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-xl shrink-0 mt-0.5">
                      <Clock size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">1. Questionário Prévio</h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                        Envio um questionário abrangente para você preencher no seu ritmo, analisando hábitos, rotinas e preferências alimentares.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-xl shrink-0 mt-0.5">
                      <Globe size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">2. Consulta de Alinhamento</h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                        Se houver necessidade de aprofundar pontos específicos, fazemos uma consulta online focada, de forma rápida e direcionada.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-xl shrink-0 mt-0.5">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">3. Plano Prático & Acompanhamento</h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                        Você recebe o planejamento alimentar adaptado à sua realidade e tem meu suporte contínuo via WhatsApp para orientar os próximos passos.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-stone-200/50 dark:border-stone-800/60 flex flex-col gap-2">
                  <a
                    href={whatsappConsultoriaUrl}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                    id="whatsapp-btn-modal-consulting"
                  >
                    <MessageCircle size={15} />
                    Saber sobre a Consultoria Online
                  </a>
                  
                  <button
                    onClick={() => setConsultoriaOpen(false)}
                    className="w-full text-center py-2 text-[10px] text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors cursor-pointer font-sans"
                  >
                    Voltar para o site
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
