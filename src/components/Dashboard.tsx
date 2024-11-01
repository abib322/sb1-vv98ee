import React from 'react';
import { Camera, Users, DollarSign, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Camera, label: 'Séances ce mois', value: '24' },
    { icon: Users, label: 'Clients actifs', value: '156' },
    { icon: DollarSign, label: 'Revenus (€)', value: '12,450' },
    { icon: Calendar, label: 'Réservations', value: '18' }
  ];

  const upcomingShoots = [
    { client: 'Marie Dubois', type: 'Mariage', date: '15 Mars', time: '14:00' },
    { client: 'Jean Martin', type: 'Portrait', date: '17 Mars', time: '10:30' },
    { client: 'Sophie Laurent', type: 'Événement', date: '20 Mars', time: '16:00' }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de Bord</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Nouvelle Séance
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Prochaines Séances</h2>
          <div className="space-y-4">
            {upcomingShoots.map((shoot, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">{shoot.client}</h3>
                  <p className="text-sm text-gray-600">{shoot.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">{shoot.date}</p>
                  <p className="text-sm text-gray-600">{shoot.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Galerie Récente</h2>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/400x400?photography&sig=${index}`}
                  alt="Recent work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;