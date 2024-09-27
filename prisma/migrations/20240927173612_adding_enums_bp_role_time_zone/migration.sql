/*
  Warnings:

  - The `bpRole` column on the `shows` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "MusicRole" AS ENUM ('SOLO', 'DUO', 'FRONTMAN', 'SIDEMAN', 'OTHER');

-- CreateEnum
CREATE TYPE "TimeZone" AS ENUM ('AST', 'CST', 'CDT', 'EST', 'EDT', 'MST', 'MDT', 'PST', 'PDT', 'HST', 'AKST', 'AKDT', 'UTC');

-- AlterTable
ALTER TABLE "shows" ADD COLUMN     "showDateTimeZone" "TimeZone" NOT NULL DEFAULT 'UTC',
DROP COLUMN "bpRole",
ADD COLUMN     "bpRole" "MusicRole" NOT NULL DEFAULT 'OTHER';
