import { useEffect, useState, useRef } from 'react';
import { Users, Zap, BarChart } from 'lucide-react';
import useOnScreen from '../hooks/useOnScreen';

const AnimatedStatistic = ({ finalValue, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = finalValue;
      if (start === end) return;

      const duration = 2000; // 2 seconds
      const incrementTime = (duration / end) * (1 / (end / 100));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, finalValue]);

  return (
    <div ref={ref} className='text-center'>
      <p className='text-5xl font-bold text-purple-400'>{count.toLocaleString()}+</p>
      <p className='text-lg text-gray-400 mt-2'>{label}</p>
    </div>
  );
};

const features = [
  {
    icon: <Users className='h-12 w-12 text-purple-400' />,
    title: 'Collaborative Workspace',
    description: 'Enhance teamwork with shared spaces, real-time editing, and seamless communication channels.',
  },
  {
    icon: <Zap className='h-12 w-12 text-purple-400' />,
    title: 'Automated Workflows',
    description: 'Save time and reduce errors by automating repetitive tasks and processes with our intuitive workflow builder.',
  },
  {
    icon: <BarChart className='h-12 w-12 text-purple-400' />,
    title: 'Insightful Analytics',
    description: 'Gain valuable insights into your team\'s performance with our advanced analytics and reporting tools.',
  },
];

export default function Features() {
  return (
    <section id='features' className='py-20 sm:py-32 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Everything You Need to Succeed
          </h2>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-400'>
            KaziFlow provides a comprehensive suite of tools to empower your team.
          </p>
        </div>
        <div className='mt-20 grid md:grid-cols-3 gap-12'>
          {features.map((feature, index) => (
            <div key={index} className='text-center'>
              <div className='flex items-center justify-center h-24 w-24 rounded-full bg-gray-800/60 backdrop-blur-sm mx-auto'>
                {feature.icon}
              </div>
              <h3 className='mt-6 text-xl font-semibold text-white'>{feature.title}</h3>
              <p className='mt-2 text-base text-gray-400'>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className='mt-24 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <AnimatedStatistic finalValue={15000} label='Active Users' />
          <AnimatedStatistic finalValue={250} label='Integrations' />
          <AnimatedStatistic finalValue={99} label='Uptime %' />
        </div>
      </div>
    </section>
  );
}
