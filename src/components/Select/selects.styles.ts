import styled from 'styled-components';

export const FakeOptionButton = styled.button.attrs({
  className: 'px-6 py-3 flex w-full hover:bg-gray-dark hover:text-white '
})`
  background-color: ${ props => props.theme.bg.element };
`;
