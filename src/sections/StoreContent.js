import { useState } from 'react';
import { useSession } from 'next-auth/react';

const StoreContent = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-5/6">
        <div className="flex flex-col items-center justify-center pt-10 mx-auto z-10">
          <h1 className="text-6xl font-extrabold text-center">
            <span className="block uppercase tracking-widest font-bold text-blue-600">MERCHANDISE</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
