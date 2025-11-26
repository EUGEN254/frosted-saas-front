import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-gray-700' : 'bg-transparent'}`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <a href='#' className='text-2xl font-bold text-white'>
            KaziFlow
          </a>
          <nav className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className='text-gray-300 hover:text-white transition-colors duration-300'>
                {link.label}
              </a>
            ))}
          </nav>
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-black/80 backdrop-blur-lg pb-4'>
          <nav className='flex flex-col items-center space-y-4'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className='text-gray-300 hover:text-white transition-colors duration-300 text-lg'>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
