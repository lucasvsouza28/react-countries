import api from './api';

export type CountryType = {
    name: string;
    population: number;
    capital: string;
    region: string;
    alpha3Code: string;
    flags:{
        svg: string;
    }
}

export const getContries = async (): Promise<CountryType[]> => {
    const { data } = await api.get('all');

    return data as CountryType[];
}

export const getCountriesByName = async (name: string): Promise<CountryType[]> => {
    const { data } = await api.get(`name/${name}`);

    return data as CountryType[];
}

export const getcountriesByRegion = async (region: string) => {
    const { data } = await api.get(`continent/${region}`);

    return data;
}

export const getCountryByCode = async(code: string): Promise<CountryType> => {
    const { data } = await api.get(`alpha/${code}`);

    return data as CountryType;
}