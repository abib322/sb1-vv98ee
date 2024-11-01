import React from 'react';
import PageHeader from '../components/PageHeader';
import { Download, Share2, Heart } from 'lucide-react';

const Gallery = () => {
  const photos = [
    { id: 1, type: 'Mariage', client: 'Dubois', date: '15 Mars 2024', likes: 24 },
    { id: 2, type: 'Portrait', client: 'Martin', date: '17 Mars 2024', likes: 15 },
    { id: 3, type: 'Événement', client: 'Laurent', date: '20 Mars 2024', likes: 32 },
    { id: 4, type: 'Mariage', client: 'Bernard', date: '22 Mars 2024', likes: 28 }
  ];

  return (
    <div className="p-8">
      <PageHeader title="Galerie">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Ajouter des photos
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(photo => (
          <div key={photo.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="aspect-square relative group">
              <img
                src={`https://source.unsplash.com/random/800x800?photography&sig=${photo.id}`}
                alt={`${photo.type} - ${photo.client}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                  <Download className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                  <Share2 className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-red-500" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-800">{photo.type}</h3>
                  <p className="text-sm text-gray-600">Client: {photo.client}</p>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm text-gray-600">{photo.likes}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{photo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;