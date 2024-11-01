import React from 'react';
import PageHeader from '../components/PageHeader';
import { DollarSign, TrendingUp, CreditCard, FileText } from 'lucide-react';

const Finance = () => {
  const stats = [
    { label: 'Revenus du mois', value: '12,450€', trend: '+15%' },
    { label: 'En attente', value: '3,200€', trend: '5 factures' },
    { label: 'Moyenne par séance', value: '450€', trend: '+5%' }
  ];

  const transactions = [
    { id: 1, client: 'Marie Dubois', type: 'Mariage', date: '15 Mars', amount: '850€', status: 'Payé' },
    { id: 2, client: 'Jean Martin', type: 'Portrait', date: '17 Mars', amount: '250€', status: 'En attente' },
    { id: 3, client: 'Sophie Laurent', type: 'Événement', date: '20 Mars', amount: '600€', status: 'Payé' }
  ];

  return (
    <div className="p-8">
      <PageHeader title="Finances">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors mr-2">
          Exporter
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Nouvelle Facture
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-6 w-6 text-indigo-600" />
              <span className="text-sm text-green-600">{stat.trend}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.label}</h3>
            <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Transactions récentes</h2>
          <div className="space-y-4">
            {transactions.map(transaction => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white rounded-lg">
                    <CreditCard className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{transaction.client}</h3>
                    <p className="text-sm text-gray-600">{transaction.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">{transaction.amount}</p>
                  <span className={`text-sm ${
                    transaction.status === 'Payé' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;