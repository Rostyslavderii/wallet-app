import styled from 'styled-components';
import loginBgImgTab from '../../images/background/loginBgImgTab.png';
import loginBgImgTabLarge from '../../images/background/loginBgImgTab@2x.png';
import loginBgImgDesk from '../../images/background/loginBgImgDesk.png';
import loginBgImgDeskLarge from '../../images/background/loginBgImgDesk@2x.png';


export const NoTable = styled.div`

  /* @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    background-color: ${p => p.theme.colors.white};
  } */
font-weight: ${p => p.theme.fontWeight.fw4};
  padding-bottom: 18px;
  padding-left: 5px;

  @media screen and (max-width: 767px) {
    display: none;
    }
`;

export const NoTableSized = styled(NoTable)`

  @media screen and (min-width: 768px) {
    ::after {
      content: '';
      display: block;
      width: 260px;
      height: 250px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      background-image: url(${loginBgImgTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${loginBgImgTabLarge});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    ::after {
      top: 150px;
      left: 76px;
      width: 435px;
      height: 420px;

      background-image: url(${loginBgImgDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${loginBgImgDeskLarge});
      }
    }
  }
`;
