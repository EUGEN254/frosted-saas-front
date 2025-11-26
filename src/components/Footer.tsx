import { useState } from 'react';
import { toast } from 'sonner';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      toast.success('Thanks for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <footer className='bg-gray-900 border-t border-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold text-white'>KaziFlow</h3>
            <p className='mt-2 text-gray-400'>Productivity, Amplified.</p>
          </div>
          <div className='md:col-span-2'>
            <h3 className='text-lg font-semibold text-white'>Subscribe to our newsletter</h3>
            <p className='mt-2 text-gray-400'>Get the latest news, updates, and tips.</p>
            <form onSubmit={handleNewsletterSubmit} className='mt-4 flex gap-2'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
              <button
                type='submit'
                className='py-2 px-4 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-500'>
          <p>&copy; {new Date().getFullYear()} KaziFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
