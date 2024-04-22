/*
  Warnings:

  - You are about to drop the column `gdp` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `topLevelDomain` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LanguageDetail` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[countryId]` on the table `Currency` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_countryId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageDetail" DROP CONSTRAINT "LanguageDetail_languageId_fkey";

-- DropIndex
DROP INDEX "Currency_name_key";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "gdp",
DROP COLUMN "topLevelDomain";

-- AlterTable
ALTER TABLE "Currency" ADD COLUMN     "centralBank" TEXT,
ADD COLUMN     "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
ADD COLUMN     "isCrypto" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isFiat" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "Government" ADD COLUMN     "equalityBeforeLaw" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "freedomOfExpression" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "highestCourt" TEXT NOT NULL DEFAULT 'Supreme Court',
ADD COLUMN     "judicialIndependence" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "LanguageDetail";

-- CreateTable
CREATE TABLE "GDP" (
    "id" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "perCapita" DOUBLE PRECISION NOT NULL,
    "growthRate" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "agriculture" DOUBLE PRECISION NOT NULL,
    "industry" DOUBLE PRECISION NOT NULL,
    "services" DOUBLE PRECISION NOT NULL,
    "exports" JSONB NOT NULL,
    "imports" JSONB NOT NULL,
    "externalDebt" DOUBLE PRECISION NOT NULL,
    "governmentSpending" JSONB NOT NULL,
    "grossInvestment" DOUBLE PRECISION NOT NULL,
    "fixedInvestment" DOUBLE PRECISION NOT NULL,
    "inventoryInvestment" DOUBLE PRECISION NOT NULL,
    "unemploymentRate" DOUBLE PRECISION NOT NULL,
    "inflationRate" DOUBLE PRECISION NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "GDP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GDP_countryId_key" ON "GDP"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_countryId_key" ON "Currency"("countryId");

-- AddForeignKey
ALTER TABLE "GDP" ADD CONSTRAINT "GDP_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
