import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Camera, Calendar, Users, DollarSign, Settings, Image } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Camera, label: 'Séances Photo', path: '/seances' },
    { icon: Calendar, label: 'Calendrier', path: '/calendrier' },
    { icon: Users, label: 'Clients', path: '/clients' },
    { icon: Image, label: 'Galerie', path: '/galerie' },
    { icon: DollarSign, label: 'Finances', path: '/finances' },
    { icon: Settings, label: 'Paramètres', path: '/parametres' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div 
        className="flex items-center mb-8 px-2 cursor-pointer" 
        onClick={() => navigate('/')}
      >
        <Camera className="h-8 w-8 text-indigo-600" />
        <span className="ml-2 text-xl font-bold text-gray-800">BibproShooting</span>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center w-full px-2 py-2.5 mb-1 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="ml-3 text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;