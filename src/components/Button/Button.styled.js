import styled from 'styled-components';
export const StyledButton = styled.button`
  position: relative;
  padding: 13px;
  border-radius: ${p => p.theme.borderRadius.r20};
  min-width: 300px;

  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s;
  z-index: 10;

  &:hover {
    transform: scale(1.05);
  }

  ${p => {
    if (p.primary) {
      return `
      background: ${p.theme.colors.btGreen};
      color: ${p.theme.colors.white};
      border: 1px solid transparent;
      &:hover {
        box-shadow: 0px 6px 15px ${p.theme.colors.btGreen};
      }`;
    }
    return `    
    border: ${p.theme.borderColor.b};
    color: ${p.theme.colors.btBlue};
    
    &:hover {
      box-shadow: 0px 6px 15px ${p.theme.colors.btBlue};
    }`;
  }}

  min-height: 50px;

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
