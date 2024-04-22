/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `LanguageDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Currency" DROP CONSTRAINT "Currency_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Government" DROP CONSTRAINT "Government_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_countryId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageDetail" DROP CONSTRAINT "LanguageDetail_languageId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "LanguageDetail_name_key" ON "LanguageDetail"("name");

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Currency" ADD CONSTRAINT "Currency_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageDetail" ADD CONSTRAINT "LanguageDetail_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Government" ADD CONSTRAINT "Government_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
