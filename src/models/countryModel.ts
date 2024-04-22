import { db } from '../models/db.server';
import { Country } from './types';

async function createCountry(data: Country) {
  try {
    const createdCountry = await db.country.create({
      data: {
          name: data.name,
          alpha2Code: data.alpha2Code,
          alpha3Code: data.alpha3Code,
          capital: data.capital,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          area: data.area ?? null,
          flag: data.flag,
          timezones: data.timezones,
          borders: data.borders,
          currencies: data.currencies,
          government: data.government,
          gdp: data.gdp,
          language: data.language,
          officialCurrency: data.officialCurrency,
          climate: data.climate,
          terrain: data.terrain,
          populationDensity: data.populationDensity,
          governmentType: data.governmentType,
          nationalAnimal: data.nationalAnimal,
          nationalSport: data.nationalSport,
          
      },
    });
    return createdCountry;
  } catch (error) {
    console.error('Error creating country:', error);
    throw new Error('Internal server error');
  }
}

async function getAllCountries(): Promise<Country[]> {
  try {
    const countriesData: Country[] = await db.country.findMany();
    if (!countriesData) {
      throw new Error('Country not found');
    }
    return countriesData;
  } catch (error) {
    console.error('Error retrieving countries:', error);
    throw new Error('Internal server error');
  } finally {
    await db.$disconnect();
  }
}

async function getCountryByCode(countryCode: string): Promise<Country> {
  try {
    const countryData: Country = await db.country.findFirst({
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
    await db.$disconnect();
  }
}

async function deleteCountryByCode(countryCode: string) {
  try {
    await db.country.delete({
      where: {
          alpha2Code: countryCode,
        }
      })
  } catch (error) { 
    console.error(`Error deleting country with ${countryCode} :`, error);
    throw new Error('Internal server error');
  }
}

async function updateCountry(code: string, newData:Partial<Country>) {
  try {
    const updatedCountry = await db.country.update({
      where: {
        alpha2Code: code,
      },
      data: newData,
    });
    return updatedCountry;
  } catch (error) {
    console.error(`Error updating country with code ${code}:`, error);
    throw new Error('Internal server error');
  }
}

export default {
  createCountry,
  getAllCountries,
  getCountryByCode,
  deleteCountryByCode,
  updateCountry,
};