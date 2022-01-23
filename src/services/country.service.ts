import api from './api';

export type CountryType = {
    name: {
      common: string;
      nativeName: {
        common: string;
      }
    };
    population: number;
    capital: string;
    region: string;
    subregion: string;
    cca3: string;
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      }
    };
    languages: {
      [key: string]: string;
    };
    borders: string[];
    topLevelDomain: string[];
    flags:{
        svg: string;
    }
}

export const getContries = async (): Promise<CountryType[]> => {
    const { data } = await api.get<CountryType[]>('all');

    return data;
}

export const getCountriesByName = async (name: string): Promise<CountryType[]> => {
    const { data } = await api.get<CountryType[]>(`name/${name}`);

    return data;
}

export const getcountriesByRegion = async (region: string): Promise<CountryType[]> => {
    const { data } = await api.get<CountryType[]>(`region/${region}`);

    return data;
}

export const getCountryByCode = async(code: string): Promise<CountryType | null> => {
    const { data } = await api.get<CountryType[]>(`alpha/${code}`);

    return data.length ? data[0] : null;
}

export const getCountriesByCode = async(codes: string[]): Promise<CountryType[]> => {
    const { data } = await api.get<CountryType[]>(`alpha?codes=${codes.join(',')}`);

    return data;
}
