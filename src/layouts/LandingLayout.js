import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Footer, Hero } from '../sections';

const LandingLayout = ({ children }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <div>
      <main className="relative flex flex-col text-gray-800">{children}</main>
    </div>
  );
};

export default LandingLayout;
