import styled from "styled-components";

export const Flag = styled.img.attrs({
})`
    height: 25rem;
    width: 35rem;    
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NameLabel = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const DataContainer= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DataGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Border = styled.div`
    border: 1px solid #DDD;
    border-radius: 3px;
    text-align: center;    
`;

export const Button = styled.button`
    border: 1px solid #DDD;
    padding: 0.5rem 3rem;
    margin-bottom: 1rem;

    &:hover {
        
    }
`;