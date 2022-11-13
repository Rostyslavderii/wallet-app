import styled from 'styled-components';

export const FlexWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );
  backdrop-filter: blur(25px);

  background-size: cover;
  min-height: calc(100vh - 85px);
`;
