import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Facebook, Twitter, Instagram, Mail, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Ticket className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">Billettlyst</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your premier destination for discovering and booking tickets to the hottest events worldwide.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/category/music" className="text-gray-400 hover:text-white transition-colors">Music</Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-400 hover:text-white transition-colors">Sports</Link>
              </li>
              <li>
                <Link to="/category/theater" className="text-gray-400 hover:text-white transition-colors">Theater & Shows</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">My Account</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>support@billettlyst.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <PhoneCall size={16} className="mr-2" />
                <span>+47 123 456 789</span>
              </li>
              <li className="text-gray-400 mt-4">
                <p>Billettlyst AS</p>
                <p>Karl Johans gate 1</p>
                <p>0154 Oslo, Norway</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Billettlyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;