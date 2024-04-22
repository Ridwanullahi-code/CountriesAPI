import { db } from '../src/models/db.server';
import { Country, Currency, Government, GDP } from '../src/models/types';
import {
  getCountryData,
  getCurrencyData,
  getGovernmentData,
  getGDPData
} from '../src/models/transformData';

function getCountries(): Array<Country> {
  return [
    {
      name: 'United States',
      alpha2Code: 'US',
      alpha3Code: 'USA',
      capital: 'Washington, D.C.',
      population: 331449281,
      region: 'Americas',
      area: 9372610,
      subregion: 'Northern America',
      flag: 'https://restcountries.com/data/usa.svg',
      callingCodes: ['1'],
      timezones: ['UTC-05:00', 'UTC-06:00', 'UTC-07:00', 'UTC-08:00'],
      borders: ['CAN', 'MEX'],
    },
    {
      name: 'United Kingdom',
      alpha2Code: 'GB',
      alpha3Code: 'GBR',
      capital: 'London',
      population: 68207116,
      region: 'Europe',
      subregion: 'Northern Europe',
      area: 242900,
      flag: 'https://restcountries.com/data/gbr.svg',
      callingCodes: ['44'],
      timezones: [' '],
      borders: ['IRL'],
    },
  ];
}

function getGovernments(): Array<Government> {
  return [
    {
      "system": "Parliamentary Democracy",
      "headOfState": "Prime Minister",
      "rulingParty": "Liberal Party",
      "electionSystem": "Proportional Representation",
      "electionCycle": 4,
      "highestCourt": "Supreme Court",
      "judicialIndependence": true,
      "freedomOfExpression": true,
      "equalityBeforeLaw": true,
    },
    {
      "system": "Presidential Republic",
      "headOfState": "President",
      "rulingParty": "Democratic Party",
      "electionSystem": "Two-Round System",
      "electionCycle": 5,
      "highestCourt": "Supreme Court",
      "judicialIndependence": true,
      "freedomOfExpression": true,
      "equalityBeforeLaw": true,
    }
  ];
}

function getCurrencies(): Array<Currency> {
  return [
    {
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "exchangeRate": 1.0,
      "isCrypto": false,
      "centralBank": "Federal Reserve System",
      "isFiat": true,
      "notes": "The United States dollar is the official currency of the United States and its territories.",
    },
    {
      "code": "GBP",
      "name": "British Pound Sterling",
      "symbol": "£",  
      "exchangeRate": 1.37,
      "isCrypto": false,
      "centralBank": "Bank of England",
      "isFiat": true,
      "notes": "The British pound sterling is the official currency of the United Kingdom and its crown dependencies.",
    }
  ];
}

function getGDP(): Array<GDP> {
  return [
    {
      "total": 21427700, 
      "perCapita": 64587,
      "growthRate": 2.3,
      "currency": "USD",
      "agriculture": 1.0,
      "industry": 20.0,
      "services": 79.0,
      "exports": {
        "goods": 1525,
        "services": 870
      },
      "imports": {
        "goods": 2400,
        "services": 590
      },
      "externalDebt": 22600000,
      "governmentSpending": {
        "education": 6.5,
        "healthcare": 8.8
      },
      "grossInvestment": 18.4,
      "fixedInvestment": 15.7,
      "inventoryInvestment": 2.7,
      "unemploymentRate": 3.5, 
      "inflationRate": 1.8, 
      "countryId": 1
    },
    {
      "total": 2825052,
      "perCapita": 41347,
      "growthRate": 1.8,
      "currency": "GBP",
      "agriculture": 0.6,
      "industry": 19.8,
      "services": 79.6,
      "exports": {
        "goods": 459,
        "services": 397
      },
      "imports": {
        "goods": 545, 
        "services": 374 
      },
      "externalDebt": 226000,
      "governmentSpending": {
        "education": 6.9,
        "healthcare": 9.6 
      },
      "grossInvestment": 18.9, 
      "fixedInvestment": 16.2, 
      "inventoryInvestment": 2.7,
      "unemploymentRate": 4.0,
      "inflationRate": 2.0, 
      "countryId": 2
    }
  ]
  
}
async function seed() {
  try {
    // Create country records
    await Promise.all(
      getCountries().map(country => {
        return db.country.create({
          data: getCountryData(country)
        });
      })
    );
    console.log('Country records created successfully.');

    // Fetch countries
    const countries = await db.country.findMany();
    // Fetch currencies
    const currencies = getCurrencies();
    // Fetch governments
    const governments = getGovernments();
    // Fetch GDP data
    const gdp = getGDP();

    // Create currency records
    const currencyData = getCurrencyData(countries, currencies);
    await db.currency.createMany({
      data: currencyData,
      skipDuplicates: true,
    });
    console.log('Currency records created successfully.');

    // Create government records
    const governmentData = getGovernmentData(countries, governments);
    await db.government.createMany({
      data: governmentData,
      skipDuplicates: true,
    });
    console.log('Government records created successfully.');

    // Create GDP records
    const gdpData = getGDPData(countries, gdp);
    await db.gDP.createMany({
      data: gdpData,
      skipDuplicates: true,
    });
    console.log('GDP records created successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect from the database
    await db.$disconnect();
  }
}

// Call the seed function
seed().catch(error => {
  console.error('Error during seeding:', error);
  process.exit(1);
});