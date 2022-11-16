import styled, { createGlobalStyle } from 'styled-components';
import orangeEllipseTab from '../images/background/orangeEllipseTab.png';
import orangeEllipseTabLarge from '../images/background/orangeEllipseTab@2x.png';
import orangeEllipseDesk from '../images/background/orangeEllipseDesk.png';
import orangeEllipseDeskLarge from '../images/background/orangeEllipseDesk@2x.png';
import violetEllipseTab from '../images/background/violetEllipseTab.png';
import violetEllipseTabLarge from '../images/background/violetEllipseTab@2x.png';
import violetEllipseDesk from '../images/background/violetEllipseDesk.png';
import violetEllipseDeskLarge from '../images/background/violetEllipseDesk@2x.png';

export const GlobalStyle = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;

  @media screen and (min-width: 768px) {
  position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      z-index: -30;
      display: block;
      width: 368px;
      height: 384px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      background-image: url(${orangeEllipseTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${orangeEllipseTabLarge});
      }
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -40;
      display: block;
      width: 495px;
      height: 323px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      background-image: url(${violetEllipseTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${violetEllipseTabLarge});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    position: static;
    
    ::before {
      width: 552px;
      height: 383px;

      background-image: url(${orangeEllipseDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${orangeEllipseDeskLarge});
      }
    }

    ::after {
      width: 496px;
      height: 333px;

      background-image: url(${violetEllipseDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${violetEllipseDeskLarge});
      }
    }
  }
}
.Toastify__toast-theme--colored.Toastify__toast--success {
  background-color: #24CCA7;
}
.Toastify__toast-theme--colored.Toastify__toast--warning {
  background-color: #fed057;
}
.Toastify__toast-theme--colored.Toastify__toast--error {
  background-color: #ff6596;
}

body {
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  background-color: ${p => p.theme.colors.bgGray};
}

ul{
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  cursor: pointer;
  border: none;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 18px;
    padding-right: 18px;
    width: 1280px;
  }
`;

export const toastStyled = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
