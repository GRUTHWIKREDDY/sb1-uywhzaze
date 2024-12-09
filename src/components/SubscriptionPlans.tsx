import React from 'react';
import { Check } from 'lucide-react';

interface SubscriptionPlansProps {
  onCompare: () => void;
}

const plans = [
  {
    name: 'Plan ₹349',
    price: '349',
    recommended: '2+1',
    vegetables: 14,
    weight: '4.3kg',
  },
  {
    name: 'Plan ₹399',
    price: '399',
    recommended: '2+1',
    vegetables: 14,
    weight: '5.3kg',
  },
  {
    name: 'Plan ₹599',
    price: '599',
    recommended: '2+3',
    vegetables: 14,
    weight: '8.1kg',
  },
  {
    name: 'Plan ₹799',
    price: '799',
    recommended: '4+2',
    vegetables: 14,
    weight: '12.65kg',
  },
  {
    name: 'Plan ₹999',
    price: '999',
    recommended: 'Large',
    vegetables: 14,
    weight: '16.3kg',
  },
];

export function SubscriptionPlans({ onCompare }: SubscriptionPlansProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          SELECT A PLAN, SUITS YOUR FAMILY
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full">
            WEEKLY
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full">
            MONTHLY
          </button>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">{plan.name}</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Recommended for</p>
                <p className="font-medium">{plan.recommended}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">No. of vegetables</p>
                <p className="font-medium">{plan.vegetables}</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-600">Approx Weight</p>
                <p className="font-medium">{plan.weight}</p>
              </div>
              <button className="w-full py-2 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors mb-3">
                View
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button 
            onClick={onCompare}
            className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            Compare Plans
          </button>
        </div>
      </div>
    </section>
  );
}