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
    "flag" TEXT NOT NULL,
    "timezones" TEXT NOT NULL,
    "borders" TEXT NOT NULL,
    "currencies" TEXT NOT NULL,
    "government" TEXT NOT NULL,
    "gdp" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "officialLanguage" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "populationDensity" DOUBLE PRECISION NOT NULL,
    "governmentType" TEXT NOT NULL,
    "officialCurrency" TEXT NOT NULL,
    "nationalAnimal" TEXT NOT NULL,
    "nationalSport" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_alpha2Code_key" ON "Country"("alpha2Code");
