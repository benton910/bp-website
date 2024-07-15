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
        title="NextJS SaaS Boilerplate"
        description="A boilerplate for your NextJS SaaS projects."
      />
      <AboutContent />
      <Features />
      <Footer />
    </LandingLayout>
  );
};

export default About;
