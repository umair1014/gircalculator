import React from 'react';
import { Stethoscope } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Stethoscope className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">GIR Calculator</h1>
              <p className="text-blue-100">Glucose Infusion Rate Calculator</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#calculator" className="hover:text-blue-200 transition">Calculator</a>
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#faq" className="hover:text-blue-200 transition">FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
}