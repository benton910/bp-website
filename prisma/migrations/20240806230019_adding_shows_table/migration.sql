-- CreateTable
CREATE TABLE "shows" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "showDateStartTime" TIMESTAMP(3) NOT NULL,
    "showDateEndTime" TIMESTAMP(3) NOT NULL,
    "gigVenue" TEXT NOT NULL,
    "cityState" TEXT NOT NULL,
    "personnel" TEXT,
    "bpRole" TEXT,
    "venueUrl" TEXT,

    CONSTRAINT "shows_pkey" PRIMARY KEY ("id")
);
