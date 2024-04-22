interface Country {
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    capital: string;
    population: number;
    region: string;
    subregion: string;
    area?: number | null;
    flag: string;
    timezones: string;
    borders: string;
    currencies: string;
    government: string;
    gdp: string;
    language: string;
    officialLanguage: string;
    climate: string;
    terrain: string;
    populationDensity: number;
    governmentType: string;
    officialCurrency: string;
    nationalAnimal: string;
    nationalSport: string;

  
  }
  
export {
    Country,
}