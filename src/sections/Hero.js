import { useState } from 'react';
import { useSession } from 'next-auth/react';

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-5/6">
        {/* <div className="h-full absolute top-0 left-0 z-0 opacity-20">
          <Image
            src={catfishImg}
            alt="Picture of catfish"
            className='object-cover'
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          />
        </div> */}
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5 z-10">
          <h1 className="text-5xl font-extrabold text-center">
            <span className="block text-blue-600/90">Americana Soul</span>
            <span className="block text-blue-50">from Memphis, TN</span>
          </h1>
          <p className="mt-5 text-center text-gray-100">
            Singer, Songwriter, Guitar, and Bass
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5 z-10">
          <a href="/media" className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:outline">
            Watch Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
