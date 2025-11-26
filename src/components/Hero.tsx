export default function Hero() {
  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center text-center bg-cover bg-center'
      style={{
        backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/6c1cc78c-b365-43a5-8692-5048b8c1bec2/hero-background-pcpmoqg-1764178546354.webp')`,
      }}>
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white'>
          Streamline Your Workflow with <span className='text-purple-400'>KaziFlow</span>
        </h1>
        <p className='mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-2xl'>
          The ultimate SaaS solution to boost your team's productivity and collaboration. Focus on what matters, we'll handle the rest.
        </p>
        <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
          <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
            <a
              href='#pricing'
              className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 sm:px-8'>
              Get started
            </a>
            <a
              href='#features'
              className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-400 bg-white/10 backdrop-blur-sm hover:bg-white/20 sm:px-8'>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
