import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Carousel,
  Features,
  Guides,
  Hero,
  Pricing,
  Testimonial,
} from '@/sections/index';
import Image from 'next/image';
import soloShot1 from '../../public/images/PROMOcopy/HIGHRESSOLO.jpg';
import soloShot2 from '../../public/images/PROMOcopy/HIGHRESSOLO2.jpg'
import highResPoster from '../../public/images/PROMOcopy/HANKFISH/Poster18x28_HIGHRES.jpg'
import catfishImg from '../../public/images/PROMOcopy/HANKFISH/cutoutfish1_HIGHRES.png';


// Should be 3 images: 1 of me singing, 1 of me playing guitar, 1 of me playing bass
const images = [
  { src: soloShot1, alt: "Solo BP Image 1" },
  { src: soloShot2, alt: "Solo BP Image 2" },
  { src: highResPoster, alt: "High Res Poster" }
]

const Home = () => {
  return (
    <>
      <div className="h-5/6 w-5/6 top-10 left-12 absolute z-0 opacity-20 align-center">
        <Image
          src={catfishImg}
          alt="Picture of catfish"
          className='object-cover'
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <LandingLayout>
        <Meta
          title="BCP Music"
          description="Benton Parker's Music Page"
        />
        <Carousel images={images} />
        <Hero />
        {/* <Features />
        <Pricing />
        <Guides />
        <Testimonial />
        <CallToAction /> */}
      </LandingLayout>
    </>
  );
};

export default Home;
