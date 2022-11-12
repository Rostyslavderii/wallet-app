import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    background-color: ${p => p.theme.colors.white};
  }

  /* @media screen and (min-width: 768px) {
    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 400px;
      height: 360px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      background-image: url(../../images/login/orange-ellipse.png);
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(../../images/login/orange-ellipse@2x.png);
      }
    }
  } */
`;

export const HeaderLogo = styled.header`
  a {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 533px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 58.5px 62px 65px;

    border-radius: ${p => p.theme.borderRadius.r20};
    background-color: ${p => p.theme.colors.white};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;

  svg {
    position: absolute;
    top: 8px;
    left: 12.5px;
    width: 24px;
    height: 24px;
    fill: #e0e0e0;
  }

  div {
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
    height: 0;

    border: ${p => p.theme.borderColor.c};
    border-radius: 8px;
  }

  span {
    position: absolute;
    top: -4px;
    left: -4px;
    display: block;
    width: ${p => (p.value < 13 ? (p.value / 12) * 102 : 102)}%;
    height: 0;

    border: 4px solid
      ${p => (!p.error ? p.theme.colors.btGreen : p.theme.colors.btPink)};
    border-radius: 8px;
    box-shadow: ${p => p.theme.boxShadow.confirmPassword};
  }

  p {
    position: absolute;
    top: 4px;
    left: 0;
    margin: 0;

    font-size: 10px;
    line-height: calc(27 / 18);
    color: ${p => p.theme.colors.btPink};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 8px 8px 54.5px;
  border: none;
  border-bottom: ${p => p.theme.borderColor.comment};

  font-size: 18px;
  line-height: calc(27 / 18);

  ::placeholder {
    color: ${p => p.theme.colors.inputGray};
  }
`;

export const FormButton = styled.button`
  padding: 13px;
  background: ${p => p.theme.colors.btGreen};
  border-radius: ${p => p.theme.borderRadius.r20};

  font-size: 18px;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormLink = styled(Link)`
  display: block;
  padding: 13px;
  background-color: ${p => p.theme.colors.white};
  outline: ${p => p.theme.borderColor.b};
  border-radius: ${p => p.theme.borderRadius.r20};

  font-size: 18px;
  line-height: calc(27 / 18);
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.colors.btBlue};

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
