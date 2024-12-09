import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-600">
              Fresh vegetables delivered to your doorstep
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Need Help?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Plan 349</li>
              <li>Plan 399</li>
              <li>Plan 599</li>
              <li>Plan 799</li>
              <li>Plan 999</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Others</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Shipping & Delivery</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Find Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              XYZ Complex, Visakhapatnam, AP - 530013
            </p>
            <div className="flex gap-4">
              <Facebook className="text-gray-600 hover:text-green-600 cursor-pointer" />
              <Instagram className="text-gray-600 hover:text-green-600 cursor-pointer" />
              <Twitter className="text-gray-600 hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Sam Fresh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}