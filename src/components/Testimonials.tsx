import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'KaziFlow has revolutionized how our team works. The automation features have saved us countless hours, allowing us to focus on strategic initiatives. It\'s a game-changer!',
    name: 'Amina Yusuf',
    title: 'CEO, InnovateKE',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6c1cc78c-b365-43a5-8692-5048b8c1bec2/testimonial-avatar-1-9q2buis-1764178553560.webp',
  },
  {
    quote: 'The best SaaS platform we\'ve ever used. The interface is intuitive, the analytics are powerful, and the support team is incredibly responsive. Highly recommended!',
    name: 'Chidi Okoro',
    title: 'Head of Operations, TechPro NG',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6c1cc78c-b365-43a5-8692-5048b8c1bec2/testimonial-avatar-2-dddtlz3-1764178561557.webp',
  },
  {
    quote: 'From project management to client reporting, KaziFlow handles it all. We\'ve seen a 40% increase in productivity since adopting this amazing tool.',
    name: 'Lerato Mokoena',
    title: 'Marketing Director, DigitalZA',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6c1cc78c-b365-43a5-8692-5048b8c1bec2/testimonial-avatar-3-wk58d2j-1764178570117.webp',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id='testimonials' className='py-20 sm:py-32 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Trusted by Teams Across Africa
          </h2>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-400'>
            See what our happy customers have to say about KaziFlow.
          </p>
        </div>
        <div className='mt-16 relative max-w-3xl mx-auto'>
          <div className='overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 md:p-12'>
            <p className='text-xl text-gray-200'>
              “{testimonials[current].quote}”
            </p>
            <div className='mt-8 flex items-center'>
              <img
                className='h-14 w-14 rounded-full object-cover'
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
              />
              <div className='ml-4'>
                <p className='font-semibold text-white'>{testimonials[current].name}</p>
                <p className='text-gray-400'>{testimonials[current].title}</p>
              </div>
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className='absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors duration-300'>
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className='absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors duration-300'>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
