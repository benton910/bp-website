import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import logoNameImg from '../../public/images/PROMOcopy/BPLogo.png';

const Navbar = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col items-center px-10 mx-auto space-y-5 md:w-100">
        <div className="h-1/3 w-1/3">
          <Link href="/" className="z-30 m-10">
            <Image
              src={logoNameImg}
              alt="Picture of the main text logo"
              className="object-contain hover:scale-110 duration-200"
            />
          </Link>
        </div>
        <header className="flex items-start justify-between space-x-3">
          <button className="md:hidden absolute right-6 top-0" onClick={toggleMenu}>
            {!showMenu ? (
              <Bars3Icon className="w-8 h-8" />
            ) : (
              <XMarkIcon className="w-8 h-8" />
            )}
          </button>
          <div
            className={[
              'items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3',
              showMenu
                ? 'absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl bg-black/60 md:py-0 left-8 right-8 top-24 space-y-3 md:space-y-0 px-5'
                : 'hidden',
            ].join(' ')}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center text-2xl md:space-y-0 md:space-x-3 md:flex-row">
              <a href="/about" className="px-7 py-2 rounded hover:text-blue-600/80 duration-200">About</a>
              <a href="/schedule" className="px-7 py-2 rounded hover:text-blue-600/80 duration-200">Schedule</a>
              <a href="/media" className="px-7 py-2 rounded hover:text-blue-600/80 duration-200">Media</a>
              <a href="/store" className="px-7 py-2 rounded hover:text-blue-600/80 duration-200">Store</a>
              <a href="/payment" className="px-7 py-2 rounded hover:text-blue-600/80 duration-200">Contact</a>
            </nav>
            {/* <Link
                  href={
                      sessionStatus === 'authenticated' ? '/account' : '/auth/login'
                  }
                  className="w-full px-5 py-2 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
                  >
                  {sessionStatus === 'authenticated' ? 'Go to Dashboard' : 'Login'}
                </Link> */}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
