import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '49',
    features: [
      '5 Projects',
      'Basic Analytics',
      '24/7 Support',
      '10 GB Storage',
    ],
    cta: 'Choose Starter',
    popular: false,
  },
  {
    name: 'Pro',
    price: '99',
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Priority Support',
      '100 GB Storage',
      'Team Collaboration',
    ],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Dedicated Infrastructure',
      'Custom Integrations',
      '24/7/365 Support',
      'Unlimited Storage',
      'SLA & Security Reviews',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id='pricing' className='py-20 sm:py-32 bg-gray-900/70 backdrop-blur-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Flexible Pricing for Teams of All Sizes
          </h2>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-400'>
            Choose the plan that's right for you. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className='mt-20 grid md:grid-cols-3 gap-8'>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${tier.popular ? 'border-purple-500' : 'border-gray-700'}`}>
              {tier.popular && (
                <div className='absolute top-0 -translate-y-1/2 bg-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-full'>
                  Most Popular
                </div>
              )}
              <h3 className='text-2xl font-semibold text-white'>{tier.name}</h3>
              <p className='mt-4'>
                <span className='text-4xl font-extrabold text-white'>
                  {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                </span>
                {typeof tier.price === 'number' && <span className='text-base font-medium text-gray-400'>/mo</span>}
              </p>
              <ul className='mt-8 space-y-4'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex items-start'>
                    <Check className='h-6 w-6 text-green-500 mr-2 flex-shrink-0' />
                    <span className='text-gray-300'>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href='#'
                className={`mt-auto block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${tier.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white/10 text-purple-400 hover:bg-white/20'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
