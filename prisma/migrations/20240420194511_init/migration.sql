/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Currency` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[system]` on the table `Government` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Language` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Currency_name_key" ON "Currency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Government_system_key" ON "Government"("system");

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");
