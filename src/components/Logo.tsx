import React from 'react';
import { Sprout } from 'lucide-react';

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps = {}) {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <Sprout className="text-green-600" size={32} />
      <span className="text-xl font-bold text-green-600">Sam Fresh</span>
    </button>
  );
}