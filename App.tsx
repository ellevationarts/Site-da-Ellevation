
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
  ShieldCheck,
  Plus,
  Trash2,
  Lock,
  Utensils,
  Search,
  Map,
  BarChart3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/5547992029757?text=Olá!%20Quero%20falar%20com%20a%20Ellevation%20sobre%20marketing%20e%20eventos.";

// --- Types ---
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

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

const Navbar = ({ onOpenAdmin }: { onOpenAdmin: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Início', href: '#home', icon: <Layout size={20} /> },
    { name: 'Sobre', href: '#sobre', icon: <Users size={20} /> },
    { name: 'Marketing', href: '#marketing', icon: <TrendingUp size={20} /> },
    { name: 'Eventos', href: '#eventos', icon: <Calendar size={20} /> },
    { name: 'Blog', href: '#blog', icon: <MessageSquare size={20} /> },
    { name: 'Cases', href: '#cases', icon: <Award size={20} /> },
    { name: 'Contato', href: '#contato', icon: <Phone size={20} /> },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center mr-8 lg:mr-16">
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
            
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-3 lg:px-4 py-2 rounded-full text-[10px] lg:text-xs uppercase tracking-widest font-black transition-all duration-300 transform hover:-translate-y-1 hover:bg-purple-600/10 ${scrolled ? 'text-slate-700' : 'text-white'}`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pl-4">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-slate-900 px-5 lg:px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-200 transform hover:-translate-y-1 active:scale-95"
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

      <div className={`md:hidden fixed inset-0 z-[110] bg-white transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-slate-100">
            <span className="text-xl font-black text-purple-700 tracking-tighter">ELLEVATION</span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-purple-700 bg-purple-50 rounded-xl"><X size={24} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="grid grid-cols-3 gap-3 mb-8">
              {menuItems.map((item, index) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex flex-col items-center justify-center bg-purple-50 text-purple-700 p-4 rounded-2xl border border-purple-100 shadow-sm transition-all duration-300 transform active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="mb-2 text-purple-600">{item.icon}</div>
                  <span className="font-black text-[10px] uppercase tracking-tighter text-center">{item.name}</span>
                </a>
              ))}
            </div>
            
            <div className="space-y-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full bg-yellow-400 text-slate-900 py-5 rounded-2xl font-black text-base shadow-xl transition-all transform duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                style={{ transitionDelay: '400ms' }}
              >
                FALAR NO WHATSAPP
              </a>
              <button 
                onClick={() => { setIsOpen(false); onOpenAdmin(); }}
                className="w-full flex items-center justify-center text-slate-400 text-[10px] font-bold uppercase tracking-widest gap-2 opacity-70 py-4"
              >
                <Lock size={12} /> Área Restrita
              </button>
            </div>
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
  const [isExpanded, setIsExpanded] = useState(false);
  
  const brands = [
    { name: "ADHONEP", icon: <Globe size={24} />, link: "https://www.adhonep.com.br" },
    { name: "Hemmer", icon: <Utensils size={24} />, link: "https://www.kraftheinz.com/pt-BR/hemmer" },
    { name: "Nestlé", icon: <Coffee size={24} />, link: "https://www.nestle.com.br" },
    { name: "Ortobom", icon: <Bed size={24} />, link: "https://www.ortobom.com.br" },
    { name: "Educação Adventista", icon: <GraduationCap size={24} />, link: "https://blumenau.educacaoadventista.org.br" },
    { name: "Mundo dos Fios", icon: <Scissors size={24} />, link: "https://www.mundodosfios.com.br" },
    { name: "Elton Soares", icon: <User size={24} />, link: "#" },
    { name: "RR Climatização", icon: <Wind size={24} />, link: "#" },
    { name: "Pede Pizza Express", icon: <Pizza size={24} />, link: "#" },
    { name: "Cuca & Prosa", icon: <Coffee size={24} />, link: "#" },
    { name: "Ametista Ótica", icon: <Glasses size={24} />, link: "#" },
    { name: "Audio Klinik", icon: <Ear size={24} />, link: "#" },
    { name: "RG Resistências Elétricas", icon: <Zap size={24} />, link: "https://www.rgresistencias.com.br" },
    { name: "Clube Náutico América", icon: <Anchor size={24} />, link: "https://www.clubenauticoamerica.com.br" },
    { name: "Agropecuária São Roque", icon: <Leaf size={24} />, link: "#" },
  ];

  return (
    <section id="clientes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Confiança e Credibilidade</SectionBadge>
        <h3 className="text-slate-900 font-black text-2xl md:text-4xl mb-16 tracking-tight max-w-2xl mx-auto">
          Marcas que fazem parte do nosso portfólio de sucesso
        </h3>
        {/* Grid com 2 colunas no mobile e 4 colunas no desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500">
          {brands.map((brand, i) => (
            <a 
              key={i} 
              href={brand.link}
              target={brand.link !== "#" ? "_blank" : undefined}
              rel={brand.link !== "#" ? "noopener noreferrer" : undefined}
              className={`group flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:border-purple-200 hover:-translate-y-2 grayscale hover:grayscale-0 ${
                isExpanded ? 'flex' : 
                i < 6 ? 'flex' : 
                i < 8 ? 'hidden md:flex' : 
                'hidden'
              }`}
            >
              <div className="text-slate-300 group-hover:text-purple-600 transition-colors mb-4">
                {brand.icon}
              </div>
              <div className="text-slate-400 font-black text-[10px] md:text-xs text-center uppercase tracking-widest group-hover:text-purple-700 transition-colors">
                {brand.name}
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-purple-700 px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            {isExpanded ? (
              <>Ver Menos <ChevronUp size={16} /></>
            ) : (
              <>Ver Mais Marcas <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

const MarketingServices = () => {
  const services = [
    { icon: <Search size={32} />, title: "Google Empresas & SEO Local", desc: "Configuração profissional de Google Meu Negócio para garantir que sua empresa apareça no topo do Google Maps e buscas locais." },
    { icon: <TrendingUp size={32} />, title: "Marketing Estratégico", desc: "Planejamento 360º focado em metas de faturamento, canais de aquisição e posicionamento de mercado." },
    { icon: <Megaphone size={32} />, title: "Tráfego Pago (Ads)", desc: "Gestão profissional de Google e Meta Ads para atrair clientes qualificados no exato momento da compra." },
    { icon: <Layout size={32} />, title: "Performance Web", desc: "Desenvolvimento de Landing Pages de alta conversão, otimizadas para mobile e velocidade máxima." },
    { icon: <Smartphone size={32} />, title: "Social Media Ativo", desc: "Gestão de conteúdo estratégico focado em autoridade, desejo de marca e relacionamento com o público." },
    { icon: <BarChart3 size={32} />, title: "Dashboard & Dash", desc: "Relatórios de performance transparentes para você acompanhar em tempo real o retorno sobre seu investimento." },
  ];

  return (
    <section id="marketing" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge light>Estratégia & Performance</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Marketing de Alta Performance</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Elevamos o faturamento da sua empresa com inteligência de dados e visibilidade absoluta no Google.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-600/20 transition-all"></div>
              <div className="w-16 h-16 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight relative z-10">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm relative z-10">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge>Conteúdo Estratégico</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Insights da Ellevation</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Fique por dentro das tendências de marketing e bastidores de eventos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-purple-600 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Calendar size={12} className="mr-2" /> {post.date}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-purple-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-purple-700 font-black text-xs uppercase tracking-widest hover:gap-2 transition-all">
                  Ler matéria <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 italic">
              Nenhum post publicado ainda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const cases = [
    { 
      title: "Visibilidade Google Local: +400% de Engajamento", 
      cat: "Google & SEO", 
      impact: "Destaque orgânico no topo da busca local", 
      img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Performance Ads: ROI de 12x em Lançamento", 
      cat: "Tráfego Pago", 
      impact: "Redução de 60% no custo por lead", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Convenção Corporativa: Gestão 360º", 
      cat: "Eventos", 
      impact: "500 convidados / Staff impecável", 
      img: "https://images.unsplash.com/photo-1540575861501-7ad0582371f4?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  return (
    <section id="cases" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge light>Nosso Impacto</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Portfólio de Resultados</h2>
          <p className="text-slate-400 max-w-sm mx-auto font-medium italic">Casos reais onde a Ellevation elevou o patamar competitivo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] shadow-xl bg-slate-800 h-[450px] border border-white/5 hover:border-purple-500/30 transition-colors">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">{project.cat}</span>
                <h3 className="text-2xl font-black text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-purple-400 font-bold text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} /> {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdminPanel = ({ isOpen, onClose, posts, setPosts }: { isOpen: boolean, onClose: () => void, posts: BlogPost[], setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>> }) => {
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', image: '' });

  if (!isOpen) return null;

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.excerpt) return;
    
    const post: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title,
      excerpt: newPost.excerpt,
      date: new Date().toLocaleDateString('pt-BR'),
      image: newPost.image || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800'
    };
    
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('ellevation_posts', JSON.stringify(updatedPosts));
    setNewPost({ title: '', excerpt: '', image: '' });
  };

  const removePost = (id: string) => {
    const updatedPosts = posts.filter(p => p.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('ellevation_posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
        <div className="p-8 border-b flex justify-between items-center bg-purple-50">
          <h2 className="text-2xl font-black text-purple-900 uppercase tracking-tighter flex items-center gap-3">
            <Lock className="text-purple-600" /> Gerenciar Blog
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors"><X /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* New Post Form */}
          <div className="space-y-6">
            <h3 className="font-black text-sm uppercase tracking-widest text-slate-500 border-b pb-2">Novo Post</h3>
            <form onSubmit={handleAddPost} className="space-y-4">
              <input 
                type="text" 
                placeholder="Título do Post" 
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-purple-600 outline-none font-bold"
                value={newPost.title}
                onChange={e => setNewPost({...newPost, title: e.target.value})}
              />
              <textarea 
                placeholder="Resumo do conteúdo..." 
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-purple-600 outline-none font-medium h-32"
                value={newPost.excerpt}
                onChange={e => setNewPost({...newPost, excerpt: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="URL da Imagem (Unsplash, etc)" 
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-purple-600 outline-none text-xs font-mono"
                value={newPost.image}
                onChange={e => setNewPost({...newPost, image: e.target.value})}
              />
              <button className="w-full bg-purple-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-purple-800 transition-all">
                <Plus size={20} /> Publicar no Blog
              </button>
            </form>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            <h3 className="font-black text-sm uppercase tracking-widest text-slate-500 border-b pb-2">Posts Atuais ({posts.length})</h3>
            <div className="space-y-3">
              {posts.map(post => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                  <div className="flex items-center gap-4">
                    <img src={post.image} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-black text-slate-900 text-sm line-clamp-1">{post.title}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{post.date}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removePost(post.id)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Services and Other Sections (Reused) ---

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

const Footer = ({ onOpenAdmin }: { onOpenAdmin: () => void }) => (
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
          <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-white underline decoration-yellow-400 underline-offset-8">Links Rápidos</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><a href="#marketing" onClick={(e) => { e.preventDefault(); document.querySelector('#marketing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Marketing</a></li>
            <li><a href="#eventos" onClick={(e) => { e.preventDefault(); document.querySelector('#eventos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Eventos</a></li>
            <li><a href="#blog" onClick={(e) => { e.preventDefault(); document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Blog</a></li>
            <li><button onClick={onOpenAdmin} className="hover:text-yellow-400 transition-colors flex items-center gap-2"><Lock size={12}/> Admin</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-white underline decoration-yellow-400 underline-offset-8">Atendimento</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><a href="#contato" onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Fale Conosco</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank" className="hover:text-yellow-400 transition-colors">Suporte WhatsApp</a></li>
            <li><a href="#sobre" onClick={(e) => { e.preventDefault(); document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-yellow-400 transition-colors">Nossa História</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-white underline decoration-yellow-400 underline-offset-8">Newsletter</h4>
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
    className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group active:scale-95 animate-whatsapp-pulse"
    aria-label="Falar no WhatsApp"
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="white"
      className="md:w-10 md:h-10 w-8 h-8"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.12-1.605a11.778 11.778 0 005.925 1.603h.005c6.635 0 12.032-5.396 12.035-12.03a11.85 11.85 0 00-3.417-8.467z" />
    </svg>
  </a>
);

// --- Main App ---

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ellevation_posts');
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      // Default posts if none saved
      const defaultPosts: BlogPost[] = [
        {
          id: '1',
          title: 'A Nova Era do Marketing de Experiência',
          excerpt: 'Saiba como as marcas estão usando eventos presenciais para fortalecer o engajamento digital.',
          date: '10/05/2024',
          image: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f4?auto=format&fit=crop&q=80&w=800'
        },
        {
          id: '2',
          title: 'Google Empresas: Sua Vitrine no Topo',
          excerpt: 'Como a configuração profissional do seu perfil no Google pode dobrar suas chamadas e visitas locais.',
          date: '05/05/2024',
          image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800'
        }
      ];
      setPosts(defaultPosts);
      localStorage.setItem('ellevation_posts', JSON.stringify(defaultPosts));
    }
  }, []);

  return (
    <div className="relative antialiased text-slate-900 bg-white selection:bg-purple-600 selection:text-white">
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      <Hero />
      <Clients />
      <About />
      <MarketingServices />
      <EventServices />
      <BlogSection posts={posts} />
      <Cases />
      <CTAFinal />
      <Contact />
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
      <FloatingWhatsApp />
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        posts={posts} 
        setPosts={setPosts} 
      />
    </div>
  );
}
