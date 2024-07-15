import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  Features,
  Footer,
  Hero,
  AboutContent
} from '@/sections/index';

const About = () => {
  return (
    <LandingLayout>
      <Meta
        title="BCP Music | About"
        description="Read more about Benton Parker!"
      />
      <AboutContent />
      <Features />
    </LandingLayout>
  );
};

export default About;
