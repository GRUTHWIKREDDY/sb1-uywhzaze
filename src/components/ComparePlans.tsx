import React from 'react';
import { Check } from 'lucide-react';

const planDetails = {
  essentialVegetables: [
    { name: 'Onions', plans: ['---', '1 Kg', '1.5 Kg', '2.5 Kg', '3 Kg'] },
    { name: 'Ginger', plans: ['100 gms', '100 gms', '200 gms', '200 gms', '300 gms'] },
    { name: 'Tomatoes', plans: ['1 Kg', '1 Kg', '1.5 Kg', '2.5 Kg', '3 Kg'] },
    { name: 'Potatoes', plans: ['0.5 Kg', '0.5 Kg', '1 Kg', '1.5 Kg', '2 Kg'] },
    { name: 'Curry Leaves', plans: ['50 gms', '50 gms', '100 gms', '200 gms', '300 gms'] },
    { name: 'Green Chillies', plans: ['100 gms', '100 gms', '200 gms', '300 gms', '400 gms'] },
    { name: 'Coriander', plans: ['100 gms', '100 gms', '100 gms', '200 gms', '300 gms'] },
  ],
  otherDetails: [
    { name: 'Other Vegetables', plans: ['7 Varieties', '7 Varieties', '7 Varieties', '7 Varieties', '7 Varieties'] },
    { name: 'Weight', plans: ['350 Gms each', '350 Gms each', '500 Gms each', '750 Gms each', '1000 Gms each'] },
    { name: 'Approx Total Weight', plans: ['4.3 kgs', '5.3 kgs', '8.1 kgs', '12.65 kgs', '16.3 kgs'] },
  ],
};

const planNames = ['Plan 349', 'Plan 399', 'Plan 599', 'Plan 799', 'Plan 999'];
const planColors = ['text-blue-600', 'text-green-600', 'text-yellow-600', 'text-red-600', 'text-cyan-600'];
const buttonColors = ['bg-blue-600', 'bg-green-600', 'bg-yellow-600', 'bg-red-600', 'bg-cyan-600'];

export function ComparePlans() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Buy Vegetables Online - Compare Plan</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Choose the Perfect Plan for Your Family</h2>
        <p className="text-gray-600 mb-12">
          At Sam Fresh, we offer a range of vegetable plans to suit different family sizes and dietary needs. Compare our plans below to find the one that's right for you.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-green-600 text-white p-4 text-left">Essential Vegetables</th>
                {planNames.map((name, index) => (
                  <th key={name} className={`${planColors[index]} bg-gray-50 p-4 text-center font-medium`}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planDetails.essentialVegetables.map((item, index) => (
                <tr key={item.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 font-medium text-gray-700">{item.name}</td>
                  {item.plans.map((plan, planIndex) => (
                    <td key={`${item.name}-${planIndex}`} className="p-4 text-center text-gray-600">
                      {plan}
                    </td>
                  ))}
                </tr>
              ))}
              {planDetails.otherDetails.map((item, index) => (
                <tr key={item.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className={`p-4 font-medium ${index === 0 ? 'bg-green-600 text-white' : 'text-gray-700'}`}>
                    {item.name}
                  </td>
                  {item.plans.map((plan, planIndex) => (
                    <td key={`${item.name}-${planIndex}`} className="p-4 text-center text-gray-600">
                      {plan}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4"></td>
                {planNames.map((_, index) => (
                  <td key={`signup-${index}`} className="p-4 text-center">
                    <button className={`${buttonColors[index]} text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity`}>
                      Sign up
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose 5am Fresh?</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Freshness Guaranteed:</h3>
                <p className="text-gray-600">We source fresh vegetables every morning and deliver them to your doorstep.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Affordable Prices:</h3>
                <p className="text-gray-600">Enjoy high-quality vegetables at competitive prices.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Convenient Delivery:</h3>
                <p className="text-gray-600">Choose a plan that fits your schedule and dietary needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">No Hidden Fees:</h3>
                <p className="text-gray-600">No GST, packing charges, or delivery charges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}