import styled from "styled-components";

export const MainContainer = styled.main.attrs({
  className:
    'p-2 ' +
    'sm:p-8'
})``;

export const ButtonContainer = styled.div.attrs(() => {
    className: 'flex gap-16 justify-start'
})``;

export const Section = styled.div.attrs(() => ({
    className:
      'flex flex-col justify-center ' +
      'lg:flex-row sm:gap-16'
}))``;

export const Flag = styled.img`
    height: 25rem;
    width: 35rem;
`;

export const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NameLabel = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const DataContainer = styled.div.attrs({
  className:
    'flex flex-wrap gap-1'
})`
    display: flex;
    justify-content: space-between;
`;

export const BorderCountriesDataContainer= styled.div.attrs({
  className:
    'flex flex-wrap items-center gap-1 mt-5 ' +
    'lg:mt-40'
})`
`;

export const DataGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Border = styled.div.attrs({
  className: 'mr-2 p-1 text-center rounded'
})`
    border: 1px solid #DDD;
`;

export const Button = styled.button`
    border: 1px solid #DDD;
    padding: 0.5rem 3rem;
    margin-bottom: 1rem;
`;
