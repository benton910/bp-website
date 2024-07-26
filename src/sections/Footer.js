import Image from 'next/image';
import instaIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_3642_LE_auto_x2.png';
import fbIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_5378_LE_auto_x2.png';
import youtubeIcon from '../../public/images/PROMOcopy/SOCIAL/Youtube_logo_LE_auto_x2.png';
import venmoIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_8140_LE_auto_x2.png';
import cashappIcon from '../../public/images/PROMOcopy/SOCIAL/IMG_4102_LE_auto_x2.png';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col md:mx-auto md:w-5/6">
        <footer className="flex flex-col items-center justify-center py-5 space-x-0 space-y-3 border-b md:flex-row md:space-y-0 md:space-x-3">
          <a href="https://www.instagram.com/bentonparkermusic" target="_blank" className="px-5 py-2 text-xl rounded hover:underline">
            <Image
              src={instaIcon}
              alt="Instagram icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.facebook.com/benton.parker.92/" target="_blank" className="px-5 py-2 text-xl rounded hover:underline">
            <Image
              src={fbIcon}
              alt="Facebook icon"
              width={92}
              height={92}
            />
          </a>
          <a href="https://www.youtube.com/@bentonparkermusic/videos" target="_blank" className="px-5 py-2 text-xl rounded hover:underline">
            <Image
              src={youtubeIcon}
              alt="Youtube icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://account.venmo.com/u/bentonparkermusic" target="_blank" className="px-5 py-2 text-xl rounded hover:underline">
            <Image
              src={venmoIcon}
              alt="Venmo icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://cash.app/$bentonparkermusic" target="_blank" className="px-5 py-2 text-xl rounded hover:underline">
            <Image
              src={cashappIcon}
              alt="CashApp icon"
              width={50}
              height={50}
            />
          </a>
        </footer>
        <p className="py-5 text-center text-gray-400">
          &copy; Nextacular. All rights reserved {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
