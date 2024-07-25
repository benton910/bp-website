import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
    Features,
    AboutContent
} from '@/sections/index';

const About = () => {
    return (
        <LandingLayout>
            <Meta
                title="BCP Music | Media"
                description="Hear Benton Parker!"
            />
            <AboutContent />
            <Features />
        </LandingLayout>
    );
};

export default About;
