import React from 'react';
import PageHeader from '../components/PageHeader';
import { Camera, Clock } from 'lucide-react';

const Calendar = () => {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const events = [
    { id: 1, date: 15, title: 'Mariage Dubois', time: '14:00', type: 'Mariage' },
    { id: 2, date: 17, title: 'Portrait Martin', time: '10:30', type: 'Portrait' },
    { id: 3, date: 20, title: 'Événement Laurent', time: '16:00', type: 'Événement' }
  ];

  return (
    <div className="p-8">
      <PageHeader title="Calendrier">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Ajouter un événement
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm
                  ${events.some(e => e.date === i + 1) ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Événements du mois</h2>
          <div className="space-y-4">
            {events.map(event => (
              <div key={event.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="font-medium text-gray-800">{event.title}</span>
                  </div>
                  <span className="text-sm text-gray-600">{event.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;