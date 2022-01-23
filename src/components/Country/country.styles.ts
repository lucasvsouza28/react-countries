import styled from 'styled-components';

export const Image = styled.div.attrs<{
  image: string
}>(({
}))`
  background-image: url('${ props => props.image}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transform: scale(1);
  overflow: hidden;

  height: 200px;

  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
