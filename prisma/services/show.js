import prisma from '@/prisma/index';

export const getAllShows = async () => {
  await prisma.show.findMany()
};

export const createShow = async () => {
  await prisma.show.create({
    data: {
      showDateStartTime: new Date('2024-08-30T07:00:00'),
      showDateEndTime: new Date('2024-08-30T11:00:00'),
      gigVenue: "Momma's",
      cityState: "Jackson, MS",
      venueUrl: "www.google.com",
      bpRole: "Solo",
      personnel: "No one"
    },
  });
};