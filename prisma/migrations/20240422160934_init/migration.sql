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
    "language" TEXT,
    "officialLanguage" TEXT,
    "climate" TEXT,
    "terrain" TEXT,
    "populationDensity" DOUBLE PRECISION,
    "governmentType" TEXT,
    "officialCurrency" TEXT,
    "nationalAnimal" TEXT,
    "nationalSport" TEXT,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_alpha2Code_key" ON "Country"("alpha2Code");
