import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  Features,
  MediaContent
} from '@/sections/index';
import Image from 'next/image';

import catfishImg from '../../public/images/PROMOcopy/HANKFISH/cutoutfish1_HIGHRES.png';

const Media = () => {
  return (
    <>
      <div className="h-5/6 w-5/6 top-10 left-12 absolute z-0 opacity-20 align-center">
        <Image
          src={catfishImg}
          alt="Picture of catfish"
          className='object-cover'
        />
      </div>
      <LandingLayout>
        <Meta
          title="BCP Music | Media"
          description="Hear Benton Parker!"
        />
        <MediaContent />
        <Features />
      </LandingLayout>
    </>
  );
};

export default Media;
