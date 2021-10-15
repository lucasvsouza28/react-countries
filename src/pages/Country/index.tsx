import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Loading } from '../../components';
import { CountryType, getCountryByCode, getCountriesByCode } from '../../services/country.service';
import {
    MainContainer,
    ButtonContainer,
    Button,
    Section,
    Flag,
    CountryInfo,
    NameLabel,
    DataContainer,
    DataGroup,
    Border,
} from './styles';

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
            <DataContainer className="mt-40">
                <span className="font-bold">Border Countries: </span> { borderCountries.map((b) => (
                    <Link key={b.alpha3Code} to={`/${b.alpha3Code}`}>
                        <Border>{b.name}</Border>
                    </Link>
                )) }
            </DataContainer>
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
        <MainContainer>
            <ButtonContainer>
                <Button onClick={_ => history.goBack()}>
                    Back
                </Button>
            </ButtonContainer>

            <Section>
                { !country && <Loading /> }

                { country && (
                    <>
                        <Flag src={country.flags.svg} alt={`${country.name}'s flag`} />
                        <CountryInfo>
                            <NameLabel>{country.name}</NameLabel>

                            <DataContainer>
                                <DataGroup>
                                    <Data label="Native Name" value={country.nativeName} />
                                    <Data label="Population" value={formatPopulation(country.population)} />
                                    <Data label="Region" value={country.region} />
                                    <Data label="Sub Region" value={country.subregion} />
                                    <Data label="Capital" value={country.capital} />
                                </DataGroup>
                                
                                <DataGroup>
                                    { country.topLevelDomain?.length > 0 && <Data label="Top Level Domain" value={country.topLevelDomain[0]} /> }
                                    <Data label="Currencies" value={country.currencies.map(c => c.code).join(', ')} />
                                    <Data label="Languages" value={country.languages.map(c => c.name).join(', ')} />
                                </DataGroup>
                            </DataContainer>

                            { renderBorders() }

                        </CountryInfo>
                    </>
                )}
            </Section>
        </MainContainer>
    );
}