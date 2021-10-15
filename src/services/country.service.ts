import api from './api';

export type CountryType = {
    name: string;
    population: number;
    capital: string;
    region: string;
    subregion: string;
    alpha3Code: string;
    nativeName: string;
    currencies: [{
        code: string;
        name: string;
        symbol: string;
    }];
    languages: [{
        iso639_1: string;
        name: string;
    }];
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
    const { data } = await api.get<CountryType[]>(`continent/${region}`);

    return data;
}

export const getCountryByCode = async(code: string): Promise<CountryType> => {
    const { data } = await api.get<CountryType>(`alpha/${code}`);

    return data;
}

export const getCountriesByCode = async(codes: string[]): Promise<CountryType[]> => {
    const { data } = await api.get<CountryType[]>(`alpha?codes=${codes.join(',')}`);

    return data;
}