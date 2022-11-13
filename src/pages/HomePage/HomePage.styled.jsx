import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 128px;
  @media screen and (min-width: 768px) {
    padding-top: 10px;
  }
  @media screen and (min-width: 1080px) {
    padding-top: 46px;
    padding-left: 69px;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;
