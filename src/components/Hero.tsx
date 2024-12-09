import React from 'react';
import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fresh Vegetables Direct to your Doorstep
          </h1>
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="text-green-600" />
              <span className="font-medium">VIZAG</span>
            </div>
          </div>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full w-fit hover:bg-green-700 transition-colors">
            Subscribe Now
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80"
            alt="Fresh vegetables in a basket"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}