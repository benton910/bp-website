import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  Features,
  ScheduleContent
} from '@/sections/index';
import Image from 'next/image';
import catfishImg from '../../public/images/PROMOcopy/HANKFISH/cutoutfish1_HIGHRES.png';
import { getAllShows } from '@/prisma/services/show';
import prisma from '@/prisma/index';


//ORGANIZE ALL SHOWS BY DATE
export async function getServerSideProps() {
  // Fetch data from external API
  const allShows = await prisma.show.findMany();
  const showsProp = allShows.map((x) => JSON.stringify(x));
  // Pass data to the page via props
  return { props: { showsProp } }
};

const Schedule = ({ showsProp }) => {
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
          title="BCP Music | Schedule"
          description="See Benton Parker's Schedule!"
        />
        <ScheduleContent allShows={showsProp} />
      </LandingLayout>
    </>
  );
};

export default Schedule;
