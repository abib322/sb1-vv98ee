import React from 'react';
import PageHeader from '../components/PageHeader';
import { User, Lock, Bell, Palette, Globe, CreditCard } from 'lucide-react';

const Settings = () => {
  const sections = [
    {
      icon: User,
      title: 'Profil',
      description: 'Gérez vos informations personnelles et professionnelles'
    },
    {
      icon: Lock,
      title: 'Sécurité',
      description: 'Mettez à jour vos paramètres de sécurité et de connexion'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configurez vos préférences de notifications'
    },
    {
      icon: Palette,
      title: 'Apparence',
      description: 'Personnalisez l\'apparence de votre interface'
    },
    {
      icon: Globe,
      title: 'Langue',
      description: 'Choisissez votre langue préférée'
    },
    {
      icon: CreditCard,
      title: 'Facturation',
      description: 'Gérez vos méthodes de paiement et factures'
    }
  ];

  return (
    <div className="p-8">
      <PageHeader title="Paramètres">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Sauvegarder
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <section.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-sm text-gray-600">{section.description}</p>
                <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-700">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;