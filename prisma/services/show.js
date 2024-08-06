import prisma from '@/prisma/index';

export const getShows = async () => await prisma.show.findMany();