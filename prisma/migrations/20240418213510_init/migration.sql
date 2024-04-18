/*
  Warnings:

  - You are about to drop the `Timezone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Timezone" DROP CONSTRAINT "Timezone_countryId_fkey";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "timezones" TEXT[];

-- DropTable
DROP TABLE "Timezone";
