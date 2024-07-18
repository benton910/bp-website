import Link from 'next/link';
import Image from 'next/image';
import instaImg from '../../public/images/PROMOcopy/SOCIAL/IMG_3642_LE_auto_x2.png';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col md:mx-auto md:w-5/6">
        <footer className="flex flex-col items-center justify-center py-5 space-x-0 space-y-3 border-b md:flex-row md:space-y-0 md:space-x-3">
          <a href="https://www.instagram.com/bentonparkermusic" target="_blank" className="px-5 py-2 text-xl rounded hover:underline">
            <Image
              src={instaImg}
              alt="Picture of the main text logo"
              width={50}
              height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
          </a>
          <a className="px-5 py-2 text-xl rounded hover:underline">Facebook</a>
          <a className="px-5 py-2 text-xl rounded hover:underline">Youtube</a>
          <a className="px-5 py-2 text-xl rounded hover:underline">Venmo</a>
          <a className="px-5 py-2 text-xl rounded hover:underline">CashApp</a>
        </footer>
        <p className="py-5 text-center text-gray-400">
          &copy; Nextacular. All rights reserved {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
