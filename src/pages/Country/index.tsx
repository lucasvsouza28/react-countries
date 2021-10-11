import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { CountryType, getCountryByCode } from '../../services/country.service';

type CountryParamsType = {
    code: string
}

export const CountryPage = () => {
    const [country, setCountry] = useState<CountryType | null>(null);
    const { code } = useParams<CountryParamsType>();
    const history = useHistory();
    
    useEffect(() => {
        const action = async () => {
            const _country = await getCountryByCode(code);
            setCountry(_country);
        }

        action();

        return () => {}
    }, [code])

    return (
        <>
            { !country && (
                <>Loading...</>
            )}

            { country && (
                <>
                    <h1>{name}</h1>
                    { JSON.stringify(country) }
                </>
            )}

        </>
    );
}