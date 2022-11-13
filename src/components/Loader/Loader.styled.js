import styled from 'styled-components';
import { Watch } from 'react-loader-spinner';

export const StyledLoader = styled(Watch)`
&:after {
    animation-name: event;
  animation-duration: 300ms;
  /* animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
  }
  &:before {
  animation-name: event;
  animation-duration: 3000ms;

  }

  @keyframes event {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
  }

`;


export const DivLoader = styled.div`
    background-color: ${p => p.theme.colors.bgGrayRight};
    opacity: 0.8 ;
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(25px);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    z-index: 15;

    &:after {
    animation-name: event;
  animation-duration: 300ms;
  /* animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate; */
  }
  &:before {
  animation-name: event;
  animation-duration: 3000ms;

  }

  @keyframes event {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

`;
