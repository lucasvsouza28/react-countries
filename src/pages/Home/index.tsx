import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Search, Select, Country, Card, Loading } from '../../components'
import { CountryType, getContries, getcountriesByRegion, getCountriesByName } from '../../services/country.service'

export const HomePage = () => {
    const [countries, setCountries] = useState<CountryType[]>([]);
    useEffect(() => {
        const action = async () => {
            const _countries = await getContries();
            setCountries(_countries)
        }

        action();

        return () => {}
    }, []);

    const handleSelect = async(option: any) => {
        const _countries = await getcountriesByRegion(option.label);
        setCountries(_countries);
    }

    const handleSearchChange = async(search: string) => {
        const _country = await getCountriesByName(search);

        if (_country) setCountries([..._country]);
    }

    return (
        <main>
            <div>
                <div className="p-2 sm:p-8 flex flex-col items-stretch gap-4 justify-between sm:flex-row sm:gap-0 sm:items-center">
                    <Card>
                        <Search
                            className=""
                            onChange={handleSearchChange} />
                    </Card>

                    <Select
                        placeholder="Filter by Region"
                        options={[
                        { label: "Africa", value: "Africa" },
                        { label: "Americas", value: "Americas" },
                        { label: "Asia", value: "Asia" },
                        { label: "Europe", value: "Europe" },
                        { label: "Oceania", value: "Oceania" },
                        ]}
                        onChange={handleSelect}
                    />
                </div>

                { countries.length === 0 && <Loading /> }

                { countries.length > 0 && (
                <ul className="p-2 sm:p-8 grid gap-5 grid-cols-1 sm:grid-cols-3 sm:gap-12 lg:grid-cols-4">
                    { countries.map(c =>

                        <Link
                            to={`/${c.cca3}`}
                            key={c.cca3}
                        >
                            <li className="mb-4">
                                <Card>
                                <Country
                                    flag={c.flags.svg}
                                    name={c.name.common}
                                    population={c.population}
                                    region={c.region}
                                    capital={c.capital}
                                />
                                </Card>
                            </li>
                        </Link>

                    ) }
                </ul>
                ) }


            </div>
        </main>
    );
}
