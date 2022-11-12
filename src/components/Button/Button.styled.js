import styled from 'styled-components';
export const StyledButton = styled.button`
  position: relative;
  padding: 13px;
  border-radius: ${p => p.theme.borderRadius.r20};

  font-size: 18px;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  overflow: hidden;
  background-color: transparent;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // border-radius: ${p => p.theme.borderRadius.r20};
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: blue;
    transition: all 0.5s;
    // border-radius: ${p => p.theme.borderRadius.r20};
    z-index: -1;
  }

  ${p => {
    if (p.primary) {
      return `
      color: ${p.theme.colors.white};
      &:before{
        background-color: ${p.theme.colors.white};
      }
      &:after{
        background: ${p.theme.colors.btGreen};
      }
      &:hover {
        color: ${p.theme.colors.btBlue};
        outline: ${p.theme.borderColor.b};
        &:before {
          width: 100%;
        }
      }`;
    }
    return `
    //background-color: ${p.theme.colors.white};
    background-color: transparent;
    outline: ${p.theme.borderColor.b};
    color: ${p.theme.colors.btBlue};
    
    &:before{
     background: ${p.theme.colors.btGreen};
    }
    &:after{
       background-color: ${p.theme.colors.white};
    }
    &:hover {
      outline: transparent;
      color: ${p.theme.colors.white};
      &:before {
        width: 100%;
      }
    }`;
  }}

  &:hover {
    // color: #fff;
    &:before {
      width: 100%;
    }
  }
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
