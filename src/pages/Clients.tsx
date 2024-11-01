import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Camera } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      phone: '+33 6 12 34 56 78',
      address: 'Paris, France',
      sessions: 3,
      lastSession: '15 Mars 2024'
    },
    {
      id: 2,
      name: 'Jean Martin',
      email: 'jean.martin@email.com',
      phone: '+33 6 98 76 54 32',
      address: 'Lyon, France',
      sessions: 1,
      lastSession: '17 Mars 2024'
    }
  ];

  return (
    <div className="p-8">
      <PageHeader title="Clients">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Nouveau Client
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map(client => (
          <div key={client.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                {client.sessions} séance{client.sessions > 1 ? 's' : ''}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">{client.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">{client.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">{client.address}</span>
              </div>
              <div className="flex items-center text-sm">
                <Camera className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">Dernière séance: {client.lastSession}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;