-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alpha2Code" TEXT NOT NULL,
    "alpha3Code" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "subregion" TEXT NOT NULL,
    "area" INTEGER,
    "gdp" DOUBLE PRECISION,
    "flag" TEXT NOT NULL,
    "topLevelDomain" TEXT[],
    "callingCodes" TEXT[],
    "borders" TEXT[],

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timezone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gmtOffset" DOUBLE PRECISION NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "Timezone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageDetail" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT NOT NULL,
    "iso639_1" TEXT NOT NULL,
    "iso639_2" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "LanguageDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Government" (
    "id" SERIAL NOT NULL,
    "system" TEXT NOT NULL,
    "headOfState" TEXT NOT NULL,
    "rulingParty" TEXT NOT NULL,
    "electionSystem" TEXT NOT NULL,
    "electionCycle" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "Government_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LanguageDetail_languageId_key" ON "LanguageDetail"("languageId");

-- CreateIndex
CREATE UNIQUE INDEX "Government_countryId_key" ON "Government"("countryId");

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Currency" ADD CONSTRAINT "Currency_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timezone" ADD CONSTRAINT "Timezone_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageDetail" ADD CONSTRAINT "LanguageDetail_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Government" ADD CONSTRAINT "Government_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
