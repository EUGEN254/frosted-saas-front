import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Message sent! We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      toast.error('Please fill out all required fields correctly.');
    }
  };

  return (
    <section id='contact' className='py-20 sm:py-32 bg-gray-900/70 backdrop-blur-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Get in Touch
          </h2>
          <p className='mt-4 text-lg text-gray-400'>
            Have questions or want to learn more? Drop us a line.
          </p>
        </div>
        <div className='mt-12 max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Name'
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your Email'
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor='message' className='sr-only'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Your Message'
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.message ? 'border-red-500' : 'border-gray-700'} text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}></textarea>
              {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-3 px-6 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
