import { PrismaClient } from '@prisma/client';
import { Country, Currency, Government } from './types';

const prisma = new PrismaClient();

async function getAllCountries(): Promise<Country[]> {
  try {
    const countriesData: Country[] = await prisma.country.findMany();
    if (!countriesData) {
      throw new Error('Country not found');
    }
    return countriesData;
  } catch (error) {
    console.error('Error retrieving countries:', error);
    throw new Error('Internal server error');
  } finally {
    await prisma.$disconnect();
  }
}

async function getCountryByCode(countryCode: string): Promise<Country> {
  try {
    const countryData: Country = await prisma.country.findFirst({
      where: { OR: [
        { alpha2Code: countryCode },
        { alpha3Code: countryCode }
      ]},
    });
    if (!countryData) {
      throw new Error('Country not found');
    }
    return countryData;
  } catch (error) {
    console.error('Error retrieving country:', error);
    throw new Error('Internal server error');
  } finally {
    await prisma.$disconnect();
  }
}

async function getCountryByName(countryName: string): Promise<Country> {
  try {
    const countryData: Country = await prisma.country.findFirst({
      where: { name: countryName },
    });

    if (!countryData) {
      throw new Error(`Country with the specified ${countryName} not found`);
    }
    return countryData;
  } catch (error) {
    console.error('Error retrieving country:', error);
    throw new Error('Internal server error');
  } finally {
    await prisma.$disconnect();
  }
}

async function getCurrencyByCountryCode(countryCode: string): Promise<Array<Currency>>{
  try {
    const country = await prisma.country.findFirst({
      where: { alpha2Code: countryCode },
      include: { currencies: true },
    });
    if (!country) {
      throw new Error(
        `Country with the specified alpha2Code of ${countryCode} not found`
      );
    }
    return country.currencies;
  } catch (error) {
    console.error('Error retrieving capital city:', error);
    throw new Error('Internal server error');
  }
}

async function getGovermentByCountryCode(countryCode: string): Promise<Government> {
  try {
    const country = await prisma.country.findFirst({
      where: { alpha2Code: countryCode },
      include: { government: true },
    });
    if (!country) {
      throw new Error(
        `Country with the specified alpha2Code of ${countryCode} not found`
      );
    }
    return country.government
  } catch (error) {
    console.error('Error retrieving Government Data:', error);
    throw new Error('Internal server error');
  }
}

async function getGDPByCountryCode(countryCode: string) {
  try {
    const country = await prisma.country.findFirst({
      where: { alpha2Code: countryCode },
      include: { gdp: true },
    });
    if (!country || !country.gdp) {
      throw new Error(
        `Country's GDP with the specified alpha2Code of ${countryCode} not found`
      );
    }
    return country.gdp;
  } catch (error) {
    console.error('Error retrieving GDP data:', error);
    throw new Error('Internal server error');
  }
}

async function deleteAllCountries() {
  try {
    await prisma.country.deleteMany();
  } catch (error) { 
    console.error('Error deleting countries:', error);
    throw new Error('Internal server error');
  }
}

async function deleteCountryByCode(code: string) {
  try {
    await prisma.country.delete({
      where: {
          alpha2Code: code,
        }
      })
  } catch (error) { 
    console.error(`Error deleting country with ${code} :`, error);
    throw new Error('Internal server error');
  }
}


async function updateCountry(code: string, newData:Country) {
  try {
    const updatedCountry = await prisma.country.update({
      where: {
        alpha2Code: code,
      },
      data: {
        name: newData.name,
      },
    });
    return updatedCountry;
  } catch (error) {
    console.error(`Error updating country with code ${code}:`, error);
    throw new Error('Internal server error');
  }
}

export default {
  getAllCountries,
  getCountryByName,
  getCountryByCode,
  getCurrencyByCountryCode,
  getGovermentByCountryCode,
  getGDPByCountryCode,
};