import { useState } from 'react';
import { useSession } from 'next-auth/react';
import ScheduleCard from '@/components/ScheduleCard';

//Retrieve ALL schedule entries from the DB, return in an Array
//For each entry in the array, display a ScheduleCard component

const ScheduleContent = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-full">
        <div className="flex flex-col items-center justify-center pt-10 mx-auto z-10">
          <h1 className="text-5xl font-extrabold text-center">
            <span className="block uppercase tracking-widest font-bold text-blue-600">SCHEDULE</span>
          </h1>
        </div>
        <div className="flex items-center justify-center w-full z-10">
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
};

export default ScheduleContent;
