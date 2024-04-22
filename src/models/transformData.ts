import { Country, Currency, Government, GDP } from './types';

export function getCountryData(country: any): Country {
  return {
    name: country.name,
    alpha2Code: country.alpha2Code,
    alpha3Code: country.alpha3Code,
    capital: country.capital,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    area: country.area ?? null,
    flag: country.flag,
    callingCodes: country.callingCodes,
    timezones: country.timezones,
    borders: country.borders,
  };
}

export function getGovernmentData(countries: any[], governments: Government[]): any[] {
  return countries.map((country, index) => ({
    system: governments[index].system,
    headOfState: governments[index].headOfState,
    rulingParty: governments[index].rulingParty,
    electionCycle: governments[index].electionCycle,
    electionSystem: governments[index].electionSystem,
    highestCourt: governments[index].highestCourt,
    judicialIndependence: governments[index].judicialIndependence,
    freedomOfExpression: governments[index].freedomOfExpression,
    equalityBeforeLaw: governments[index].equalityBeforeLaw,
    countryId: country.id,
  }));
}

export function getCurrencyData(countries: any[], currencies: Currency[]): any[] {
  return countries.map((country, index) => ({
    code: currencies[index].code,
    name: currencies[index].name,
    symbol: currencies[index].symbol,
    exchangeRate: currencies[index].exchangeRate,
    isCrypto: currencies[index].isCrypto,
    centralBank: currencies[index].centralBank,
    isFiat: currencies[index].isFiat,
    notes: currencies[index].notes,
    countryId: country.id,
  }));
}

export function getGDPData(countries: any[], gdp: GDP[]): any[] {
  return countries.map((country, index) => ({
    total: gdp[index].total,
    perCapita: gdp[index].perCapita,
    growthRate: gdp[index].growthRate,
    currency:gdp[index].currency,
    agriculture: gdp[index].agriculture,
    industry: gdp[index].industry,
    services: gdp[index].services,
    exports: gdp[index].exports,
    imports: gdp[index].imports,
    externalDebt: gdp[index].externalDebt,
    governmentSpending: gdp[index].governmentSpending,
    grossInvestment: gdp[index].grossInvestment,
    fixedInvestment: gdp[index].fixedInvestment,
    inventoryInvestment: gdp[index].inventoryInvestment,
    unemploymentRate: gdp[index].unemploymentRate,
    inflationRate: gdp[index].inflationRate,
    countryId: country.id,
  }));
}