
import React, { useState, useEffect } from 'react';
import { 
  Megaphone, 
  Calendar, 
  Users, 
  TrendingUp, 
  Layout, 
  MessageSquare, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Globe, 
  Share2, 
  Smartphone,
  MapPin,
  Mail,
  Phone,
  Car,
  Bed,
  GraduationCap,
  Scissors,
  User,
  Leaf,
  Wind,
  Pizza,
  Coffee,
  Glasses,
  Ear,
  Zap,
  Anchor,
  ShieldCheck
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/5547992029757?text=Olá!%20Quero%20falar%20com%20a%20Ellevation%20sobre%20marketing%20e%20eventos.";

// --- Components ---

const SectionBadge = ({ children, light = false }: { children: React.ReactNode, light?: boolean }) => (
  <div className={`inline-flex items-center px-4 py-1.5 rounded-full border mb-6 transition-all duration-300 ${
    light 
    ? 'bg-purple-500/10 border-purple-400/30 text-purple-300' 
    : 'bg-purple-50 border-purple-100 text-purple-700 shadow-sm'
  }`}>
    <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em]">
      {children}
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Marketing', href: '#marketing' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Cases', href: '#cases' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center mr-16">
              <a 
                href="#home" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsOpen(false); 
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); 
                }} 
                className={`text-2xl font-black tracking-tighter transition-colors ${scrolled || isOpen ? 'text-purple-700' : 'text-white'}`}
              >
                ELLEVATION
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-black transition-all duration-300 transform hover:-translate-y-1 hover:bg-purple-600/10 ${scrolled ? 'text-slate-700' : 'text-white'}`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pl-4">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-200 transform hover:-translate-y-1 active:scale-95"
                >
                  Falar agora
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 transition-all duration-300 rounded-xl ${scrolled || isOpen ? 'text-purple-700 bg-purple-50' : 'text-white bg-white/10'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-28 pb-12 px-6 overflow-y-auto space-y-4">
          {menuItems.map((item, index) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`shiny-effect block w-full text-center bg-purple-50 text-purple-700 py-5 rounded-2xl font-black text-xl border border-purple-100 shadow-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {item.name}
            </a>
          ))}
          
          <div className="mt-auto pt-8">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-full bg-yellow-400 text-slate-900 py-6 rounded-2xl font-black text-lg shadow-xl transition-all transform duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section id="home" className="relative h-[95vh] md:h-screen flex items-center overflow-hidden bg-slate-900">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" 
        alt="Background" 
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-purple-900/40 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 animate-fade-in tracking-tighter">
          Elevamos sua marca <span className="text-yellow-400">sem promessas vazias</span> e com resultados.
        </h1>
        <p className="text-lg md:text-xl lg:text-3xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl">
          Conectamos <span className="text-yellow-400 font-black">estratégia</span>, <span className="text-yellow-400 font-black">criatividade</span> e execução para transformar o seu marketing com <span className="text-yellow-400 font-black">excelência</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-10 py-4 rounded-full font-black text-base uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-yellow-400/20"
          >
            Falar no WhatsApp
            <ChevronRight className="ml-2" size={20} />
          </a>
          <a 
            href="#marketing"
            onClick={(e) => { e.preventDefault(); document.querySelector('#marketing')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all"
          >
            Nossas Soluções
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Clients = () => {
  const brands = [
    { name: "Fisker", icon: <Car size={24} /> },
    { name: "Ortobom", icon: <Bed size={24} /> },
    { name: "Educação Adventista", icon: <GraduationCap size={24} /> },
    { name: "Mundo dos Fios", icon: <Scissors size={24} /> },
    { name: "Elton Soares", icon: <User size={24} /> },
    { name: "Agropecuária São Roque", icon: <Leaf size={24} /> },
    { name: "RR Climatização", icon: <Wind size={24} /> },
    { name: "Pede Pizza Express", icon: <Pizza size={24} /> },
    { name: "Cuca & Prosa", icon: <Coffee size={24} /> },
    { name: "Ametista Ótica", icon: <Glasses size={24} /> },
    { name: "Audio Klinik", icon: <Ear size={24} /> },
    { name: "RG Omega", icon: <Zap size={24} /> },
    { name: "CN America", icon: <Anchor size={24} /> },
  ];

  return (
    <section id="clientes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Confiança e Credibilidade</SectionBadge>
        <h3 className="text-slate-900 font-black text-2xl md:text-4xl mb-16 tracking-tight max-w-2xl mx-auto">
          Marcas que fazem parte do nosso portfólio de sucesso
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:border-purple-200 hover:-translate-y-2 grayscale hover:grayscale-0"
            >
              <div className="text-slate-300 group-hover:text-purple-600 transition-colors mb-4">
                {brand.icon}
              </div>
              <div className="text-slate-400 font-black text-[10px] md:text-xs text-center uppercase tracking-widest group-hover:text-purple-700 transition-colors">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-50 rounded-full -z-10 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
            alt="Trajetória Ellevation" 
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square transform transition-all duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
        
        <div className="order-1 lg:order-2">
          <SectionBadge>Nossa História Real</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            Nascemos para entregar a <span className="text-purple-600">Verdade</span>.
          </h2>
          <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
            <p>
              A Ellevation nasceu da profunda insatisfação com as empresas de marketing tradicionais. Vimos um mercado saturado de promessas vazias que falham em entregar o principal: <strong>a verdade para o cliente e resultados reais.</strong>
            </p>
            <p>
              Consolidamos princípios inegociáveis. Atuamos com gestão estratégica de redes sociais desde 2019, focando em transparência absoluta e performance escalável.
            </p>
          </div>
          
          <ul className="mt-10 space-y-4">
            {[
              "Princípios éticos inegociáveis",
              "Gestão digital estratégica ativa",
              "Foco absoluto em conversão real"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-slate-800 font-bold text-sm uppercase tracking-tight group cursor-default">
                <CheckCircle2 className="text-yellow-500 mr-3 shrink-0 transform group-hover:scale-110 transition-transform" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const MarketingServices = () => {
  const services = [
    { icon: <TrendingUp size={32} />, title: "Marketing Estratégico", desc: "Planejamento completo focado em metas de negócio e posicionamento de mercado." },
    { icon: <Smartphone size={32} />, title: "Social Media", desc: "Conteúdo relevante e gestão de comunidade para aumentar o engajamento e desejo pela marca." },
    { icon: <Megaphone size={32} />, title: "Tráfego Pago", desc: "Campanhas otimizadas no Ads para atrair clientes prontos para comprar." },
    { icon: <Layout size={32} />, title: "Performance Web", desc: "Landing Pages focadas em UX e alta conversão para transformar visitantes em leads." },
    { icon: <Award size={32} />, title: "Posicionamento", desc: "Criação de identidade visual e verbal que diferencia sua empresa." },
    { icon: <Users size={32} />, title: "Consultoria Ativa", desc: "Acompanhamento estratégico para destravar o crescimento da sua empresa." },
  ];

  return (
    <section id="marketing" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge light>Marketing Solutions</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Impulsione seu Crescimento</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Estratégias digitais agressivas e honestas para dominar seu mercado.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventServices = () => {
  const items = [
    { title: "Corporativos", desc: "Convenções, workshops e treinamentos empresariais de alto nível." },
    { title: "Esportivos", desc: "Logística e organização completa para experiências esportivas." },
    { title: "Cerimonial", desc: "Gestão profissional de convidados e protocolos oficiais." },
    { title: "Ativações", desc: "Experiências memoráveis para conectar o público ao DNA da marca." },
    { title: "Promocionais", desc: "Degustações e promoções táticas em pontos de venda (PDV)." },
    { title: "Staff", desc: "Fornecimento de promotores e pessoal operacional treinado." },
  ];

  return (
    <section id="eventos" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <SectionBadge>Live Experiences</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">Excelência em cada <span className="text-purple-600">detalhe</span> do seu evento.</h2>
            
            <div className="inline-flex items-center bg-yellow-400 text-slate-900 px-5 py-4 rounded-3xl mb-10 shadow-xl transform hover:scale-105 transition-transform cursor-default">
               <ShieldCheck className="text-slate-900 mr-3" size={32} />
               <div className="text-left">
                  <div className="text-2xl font-black">19 ANOS</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em]">autoridade em eventos</div>
               </div>
            </div>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Quase duas décadas de expertise operacional, transformando espaços em experiências de marca inesquecíveis.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 font-black uppercase tracking-widest text-sm hover:text-purple-800 transition-all py-3 border-b-2 border-purple-100 hover:border-purple-600 transform hover:translate-x-1"
            >
              Consultar disponibilidade <ChevronRight className="ml-2" size={18} />
            </a>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all group hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Calendar className="text-purple-600 group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const cases = [
    { 
      title: "Lançamento Digital - Tech Solutions", 
      cat: "Marketing", 
      impact: "+250% em conversão", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Convenção Anual de Vendas", 
      cat: "Eventos", 
      impact: "500 convidados / 100% satisfação", 
      img: "https://images.unsplash.com/photo-1540575861501-7ad0582371f4?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Rebranding Nacional - EcoFood", 
      cat: "Branding", 
      impact: "Novo posicionamento de mercado", 
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  return (
    <section id="cases" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge light>Nosso Impacto</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Cases e Resultados</h2>
          <p className="text-slate-400 max-w-sm mx-auto font-medium italic">Projetos reais entregues com foco total em ROI.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] shadow-xl bg-slate-800 h-[450px]">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">{project.cat}</span>
                <h3 className="text-2xl font-black text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-purple-400 font-bold text-sm">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => (
  <section className="py-24 bg-purple-700 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">Pronto para elevar o patamar da sua marca?</h2>
      <p className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto font-medium">
        Não espere a concorrência agir. Entre em contato agora e receba um diagnóstico personalizado.
      </p>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-yellow-400 text-slate-900 px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-yellow-400/20"
      >
        <MessageSquare className="mr-3" size={24} /> Conversar Agora
      </a>
    </div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-50 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900 rounded-full blur-[120px] opacity-50 translate-y-1/2"></div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionBadge>Fale Conosco</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Vamos conversar?</h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">
            Estamos prontos para ouvir seus desafios e propor soluções de impacto.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center group cursor-default">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mr-4 transform group-hover:rotate-12 transition-transform">
                <MapPin size={24} />
              </div>
              <span className="text-slate-700 font-bold">Santa Catarina, Brasil</span>
            </div>
            <div className="flex items-center group cursor-default">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mr-4 transform group-hover:rotate-12 transition-transform">
                <Mail size={24} />
              </div>
              <span className="text-slate-700 font-bold">contato@ellevation.com.br</span>
            </div>
            <div className="flex items-center group cursor-default">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mr-4 transform group-hover:rotate-12 transition-transform">
                <Phone size={24} />
              </div>
              <span className="text-slate-700 font-bold">+55 47 99202-9757</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-inner">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Nome Completo</label>
                <input type="text" placeholder="Seu nome" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all font-medium" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Qual o seu interesse?</label>
              <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all font-bold appearance-none bg-white">
                <option>Marketing / Performance</option>
                <option>Eventos Corporativos</option>
                <option>Staff e Promotores</option>
                <option>Outros</option>
              </select>
            </div>
            <button className="w-full bg-purple-700 text-white font-black py-5 rounded-2xl uppercase tracking-widest hover:bg-purple-800 transition-all shadow-xl shadow-purple-200 active:scale-[0.98]">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <span className="text-3xl font-black mb-8 block tracking-tighter text-yellow-400">ELLEVATION</span>
          <p className="text-slate-400 leading-relaxed font-medium mb-8">
            Liderando o crescimento através da união entre marketing estratégico e eventos memoráveis.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-purple-600 transition-all border border-white/10"><Share2 size={20} /></a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-purple-600 transition-all border border-white/10"><Globe size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-white underline decoration-yellow-400 underline-offset-8">Marketing</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><a href="#marketing" onClick={(e) => { e.preventDefault(); document.querySelector('#marketing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Gestão de Ads</a></li>
            <li><a href="#marketing" onClick={(e) => { e.preventDefault(); document.querySelector('#marketing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Social Media</a></li>
            <li><a href="#marketing" onClick={(e) => { e.preventDefault(); document.querySelector('#marketing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Landing Pages</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-white underline decoration-yellow-400 underline-offset-8">Eventos</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><a href="#eventos" onClick={(e) => { e.preventDefault(); document.querySelector('#eventos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Corporativos</a></li>
            <li><a href="#eventos" onClick={(e) => { e.preventDefault(); document.querySelector('#eventos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Staff / Promotores</a></li>
            <li><a href="#eventos" onClick={(e) => { e.preventDefault(); document.querySelector('#eventos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Ativações</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-white underline decoration-yellow-400 underline-offset-8">Fale Conosco</h4>
          <p className="text-slate-400 mb-6 text-sm font-medium italic">Inscreva-se para novidades.</p>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
            <input type="email" placeholder="E-mail" className="bg-transparent px-4 py-3 outline-none w-full text-sm font-medium" />
            <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-500 transition-colors">OK</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-12 text-center text-xs font-bold uppercase tracking-widest text-slate-600">
        <p>&copy; {new Date().getFullYear()} Ellevation - Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group active:scale-95"
    aria-label="Falar no WhatsApp"
  >
    <svg 
      viewBox="0 0 24 24" 
      width="32" 
      height="32" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="group-hover:rotate-12 transition-transform"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="relative antialiased text-slate-900 bg-white selection:bg-purple-600 selection:text-white">
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <MarketingServices />
      <EventServices />
      <Cases />
      <CTAFinal />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
