import React from 'react';
import { Clock, Truck, Leaf, Heart, Recycle, Timer } from 'lucide-react';

const features = [
  { icon: Clock, title: 'Delivery from 5am Daily' },
  { icon: Truck, title: 'Doorstep Delivery (Free)' },
  { icon: Leaf, title: '100% Fresh and packed' },
  { icon: Heart, title: 'Live Healthy' },
  { icon: Recycle, title: 'Ethical Sourcing' },
  { icon: Timer, title: 'Timely Delivery' },
];

export function Features() {
  return (
    <section className="bg-green-600 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          The Sam Fresh Experience
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((Feature) => (
            <div key={Feature.title} className="flex flex-col items-center">
              <Feature.icon className="text-white mb-4" size={40} />
              <p className="text-white text-center font-medium">{Feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}