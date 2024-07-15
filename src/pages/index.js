import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Features,
  Guides,
  Hero,
  Pricing,
  Testimonial,
} from '@/sections/index';

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title="BCP Music"
        description="Benton Parker's Music Page"
      />
      <Hero />
      <Features />
      <Pricing />
      <Guides />
      <Testimonial />
      <CallToAction />
    </LandingLayout>
  );
};

export default Home;
