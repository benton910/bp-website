import { useState } from 'react';
import { useSession } from 'next-auth/react';

const ScheduleContent = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-5/6">
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5 z-10">
          <h1 className="text-5xl font-extrabold text-center">
            <span className="block text-blue-600">Blues and Soul</span>
            <span className="block">from Memphis, TN</span>
          </h1>
          <p className="mt-5 text-center text-gray-600">
            Singer, Songwriter, Guitar, and Bass
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5 z-10">
          <a className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500">
            Watch Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScheduleContent;
