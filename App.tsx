
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Home as HomeIcon, 
  MessageSquare, 
  UserCircle, 
  Zap,
  Menu,
  Bell,
  Search,
  Layers,
  Factory,
  Calendar as CalendarIcon,
  Mic,
  Globe,
  Star,
  Video
} from 'lucide-react';

import Dashboard from './pages/Dashboard';
import JobSearch from './pages/JobSearch';
import AIJobMatch from './pages/AIJobMatch';
import HousingSearch from './pages/HousingSearch';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import Applications from './pages/Applications';
import ContentFactory from './pages/ContentFactory';
import Calendar from './pages/Calendar';
import VoiceAssistant from './pages/VoiceAssistant';
import SearchEngine from './pages/SearchEngine';
import VisionStudio from './pages/VisionStudio';

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/job-match', icon: Star, label: 'AI Matchmaker' },
    { to: '/vision-studio', icon: Video, label: 'Vision Studio' },
    { to: '/jobs', icon: Briefcase, label: 'Job Search' },
    { to: '/housing', icon: HomeIcon, label: 'Housing' },
    { to: '/search', icon: Globe, label: 'mofa Search' },
    { to: '/calendar', icon: CalendarIcon, label: 'Calendar' },
    { to: '/applications', icon: Layers, label: 'Applications' },
    { to: '/content-factory', icon: Factory, label: 'Content Factory' },
    { to: '/chat', icon: MessageSquare, label: 'AI Assistant' },
    { to: '/voice', icon: Mic, label: 'Voice Sync' },
    { to: '/profile', icon: UserCircle, label: 'Profile' },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0d1117] border-r border-[#30363d] transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#007bff] p-2 rounded-lg shadow-lg shadow-blue-500/20">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black text-white tracking-tight">Licht <span className="licht-yellow">AI</span></span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => { if (window.innerWidth < 1024) toggle(); }}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600/10 text-blue-400 font-bold' 
                  : 'text-slate-400 hover:bg-[#161b22] hover:text-white'}
              `}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-[#30363d]">
          <NavLink to="/applications" className="block licht-gradient rounded-2xl p-4 text-white shadow-xl shadow-blue-500/10 hover:brightness-110 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-black uppercase tracking-widest opacity-90">Auto-Apply</p>
              <Zap className="w-3 h-3 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-xs opacity-75">12 applications today</p>
            <div className="mt-3 w-full bg-white/20 text-center text-[10px] font-black uppercase tracking-widest py-1.5 rounded-lg transition-colors group-hover:bg-white/30">
              Sync Status
            </div>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
  <header className="sticky top-0 z-40 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d] h-16 px-4 lg:px-8 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <button onClick={toggleSidebar} className="lg:hidden p-2 text-slate-400">
        <Menu className="w-6 h-6" />
      </button>
      <div className="hidden md:flex items-center gap-2 bg-[#161b22] px-3 py-1.5 rounded-full border border-[#30363d] focus-within:ring-1 focus-within:ring-blue-500 transition-all">
        <Search className="w-4 h-4 text-slate-500" />
        <input 
          type="text" 
          placeholder="Global Search (Jobs, Housing)..." 
          className="bg-transparent border-none outline-none text-xs w-48 lg:w-64 text-white placeholder:text-slate-500"
        />
      </div>
    </div>
    
    <div className="flex items-center gap-2 md:gap-4">
      <button className="relative p-2 text-slate-400 hover:bg-[#161b22] rounded-full transition-colors">
        <Bell className="w-5 h-5" />
        <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full border border-[#0d1117]"></span>
      </button>
      <div className="h-8 w-px bg-[#30363d] mx-1"></div>
      <div className="flex items-center gap-3 pl-2">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-black text-white">Alex MoPed</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Licht Premium</p>
        </div>
        <img 
          src="https://picsum.photos/seed/moped-user/40/40" 
          alt="Avatar" 
          className="w-9 h-9 rounded-xl border-2 border-[#30363d]"
        />
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0d1117]">
        <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="lg:pl-64 flex flex-col min-h-screen">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          
          <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/job-match" element={<AIJobMatch />} />
              <Route path="/vision-studio" element={<VisionStudio />} />
              <Route path="/jobs" element={<JobSearch />} />
              <Route path="/housing" element={<HousingSearch />} />
              <Route path="/search" element={<SearchEngine />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/content-factory" element={<ContentFactory />} />
              <Route path="/chat" element={<Chatbot />} />
              <Route path="/voice" element={<VoiceAssistant />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
