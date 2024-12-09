import React from 'react';
import { ShoppingCart, Phone, User } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onLogoClick?: () => void;
}

export function Header({ onLogoClick }: HeaderProps = {}) {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo onClick={onLogoClick} />
        <div className="flex items-center gap-6">
          <button className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">
            E-KART
          </button>
          <a href="tel:+910000000000" className="flex items-center gap-2 text-gray-600">
            <Phone size={20} />
            <span>+91 00000000000</span>
          </a>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}