import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Loading } from '../../components';
import { CountryType, getCountryByCode, getCountriesByCode } from '../../services/country.service';
import * as SC from './styles';

type CountryParamsType = {
    code: string
}

type DataProps = {
    label: string;
    value: string | number;
}

const Data = ({
    label,
    value
}: DataProps) => {
  return (
    <div>
      <span className="font-bold">{label}:</span> {value}
    </div>
  );
}

export const CountryPage = () => {
    const [country, setCountry] = useState<CountryType | null>(null);
    const { code } = useParams<CountryParamsType>();
    const [borderCountries, setBoderCountries] = useState<CountryType[]>([]);
    const history = useHistory();

    const renderBorders = () => {

        if (borderCountries?.length == 0) return null;

        return (
            <SC.BorderCountriesDataContainer>
                <span className="font-bold">Border Countries: </span>
                { borderCountries.map((b) => (
                    <Link key={b.cca3} to={`/${b.cca3}`}>
                        <SC.Border>{b.name.common}</SC.Border>
                    </Link>
                )) }
            </SC.BorderCountriesDataContainer>
        );
    }

    const formatPopulation = (population: number) => {
        const formated = Intl.NumberFormat(navigator.language, {}).format(population);
        return formated;
    }

    useEffect(() => {
        const action = async () => {
            const _country = await getCountryByCode(code);
            setCountry(_country);
        }
        action();
    }, [code]);

    useEffect(() => {
        if ((country?.borders?.length ?? 0) > 0){
            getCountriesByCode(country?.borders || []).then(_countries => {
                setBoderCountries(_countries);
            })
        }
    }, [country])

    return (
        <SC.MainContainer>
            <SC.ButtonContainer>
                <SC.Button onClick={_ => history.goBack()}>
                    Back
                </SC.Button>
            </SC.ButtonContainer>

            <SC.Section>
                { !country && <Loading /> }

                { country && (
                    <>
                        <SC.Flag src={country.flags?.svg} alt={`${country.name?.common}'s flag`} />
                        <SC.CountryInfo>
                            <SC.NameLabel>{country.name?.common}</SC.NameLabel>

                            <SC.DataContainer>
                                <SC.DataGroup>
                                    { country.name.nativeName?.common ?? <Data label="Native Name" value={country.name.nativeName.common} /> }
                                    <Data label="Population" value={formatPopulation(country.population)} />
                                    <Data label="Region" value={country.region} />
                                    <Data label="Sub Region" value={country.subregion} />
                                    <Data label="Capital" value={country.capital} />
                                </SC.DataGroup>

                                <SC.DataGroup>
                                    { country.topLevelDomain?.length > 0 && <Data label="Top Level Domain" value={country.topLevelDomain[0]} /> }
                                    { country.currencies && <Data label="Currencies" value={Object.keys(country.currencies).join(', ')} /> }
                                    { country.languages && <Data label="Languages" value={Object.values(country.languages).join(', ')} /> }
                                </SC.DataGroup>
                            </SC.DataContainer>

                            { renderBorders() }

                        </SC.CountryInfo>
                    </>
                )}
            </SC.Section>
        </SC.MainContainer>
    );
}
