import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Footer, Navbar } from '../sections';

const LandingLayout = ({ children }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <div>
      <Navbar />
      <main className="relative flex flex-col text-gray-800">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
