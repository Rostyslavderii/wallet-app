import styled from 'styled-components';
import loginBgImgTab from '../../images/background/loginBgImgTab.png';
import loginBgImgTabLarge from '../../images/background/loginBgImgTab@2x.png';
import loginBgImgDesk from '../../images/background/loginBgImgDesk.png';
import loginBgImgDeskLarge from '../../images/background/loginBgImgDesk@2x.png';


export const NoTable = styled.div`

p {
    padding-left: 30px;
    justify-content: center;
    align-items: center;
    color: #24cca7;
    line-height:1.5;
    text-align: center;

  }

  i {
    padding-left: 10px;
    padding-right: 5px;
    color: #ff6596;
    font-weight:600;
  }
font-weight: ${p => p.theme.fontWeight.fw4};


  @media screen and (max-width: 767px) {

    }
`;

export const Div = styled.div`
  position: relative;
      width: 280px;
      height: 250px;
@media screen and (min-width: 768px) {
      width: 700px;
      height: 250px;
}
@media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
    text-align: center;


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
