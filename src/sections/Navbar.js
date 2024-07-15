import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col-reverse px-10 mx-auto space-y-5 md:w-100">
        <header className="flex items-center justify-between space-x-3">
          <Link href="/" className="text-2xl font-bold">
            Benton Parker
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
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
                ? 'absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5'
                : 'hidden',
            ].join(' ')}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
              <a href="/about" className="px-5 py-2 rounded hover:bg-gray-100">About</a>
              <a className="px-5 py-2 rounded hover:bg-gray-100">Schedule</a>
              <a className="px-5 py-2 rounded hover:bg-gray-100">Media</a>
              <a className="px-5 py-2 rounded hover:bg-gray-100">Socials</a>
              {/* <a className="px-5 py-2 rounded hover:bg-gray-100">Store</a> */}
              <a className="px-5 py-2 rounded hover:bg-gray-100">Contact</a>
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
