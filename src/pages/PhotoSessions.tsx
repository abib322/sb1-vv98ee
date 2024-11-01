import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, Clock, MapPin, Edit, Trash2 } from 'lucide-react';

const PhotoSessions = () => {
  const sessions = [
    {
      id: 1,
      client: 'Marie Dubois',
      type: 'Mariage',
      date: '15 Mars 2024',
      time: '14:00',
      location: 'Jardin des Tuileries',
      status: 'Confirmé',
      price: '850€'
    },
    {
      id: 2,
      client: 'Jean Martin',
      type: 'Portrait',
      date: '17 Mars 2024',
      time: '10:30',
      location: 'Studio Central',
      status: 'En attente',
      price: '250€'
    }
  ];

  return (
    <div className="p-8">
      <PageHeader title="Séances Photo">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Nouvelle Séance
        </button>
      </PageHeader>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 gap-4 p-6">
          {sessions.map((session) => (
            <div key={session.id} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{session.client}</h3>
                  <p className="text-sm text-gray-600">{session.type}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    session.status === 'Confirmé' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {session.status}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{session.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{session.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{session.location}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="font-semibold text-gray-800">{session.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSessions;