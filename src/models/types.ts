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
    callingCodes: string[];
    timezones: string[];
    borders: string[];
  }
  
interface Currency {
  code: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  isCrypto: boolean; 
  centralBank?: string;
  isFiat: boolean;
  notes?: string
}

interface Government {
  system: string;
  headOfState: string;
  rulingParty: string;
  electionSystem: string;
  electionCycle: number;
  highestCourt: string;
  judicialIndependence: boolean
  freedomOfExpression: boolean;
  equalityBeforeLaw: boolean
}
interface GDP {
  total: number;
  perCapita: number;
  growthRate: number;
  currency: string;
  agriculture: number;
  industry: number;
  services: number;
  exports: {
    goods: number;
    services: number;
  };
  imports: {
    goods: number;
    services: number;
  };
  externalDebt: number;
  governmentSpending: {
    education: number;
    healthcare: number;
  };
  grossInvestment: number;
  fixedInvestment: number;
  inventoryInvestment: number;
  unemploymentRate: number;
  inflationRate: number;
  countryId: number;
}
  
export {
    Country,
    Currency,
    Government,
    GDP
}