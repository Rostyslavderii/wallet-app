import styled from 'styled-components';
import { Watch } from 'react-loader-spinner';



export const StyledLoader = styled(Watch)`
    position: absolute;

`;


export const DivLoader = styled.div`
    background-color: ${p => p.theme.colors.bgGrayRight};
    opacity: 0.8 ;
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    backdrop-filter: blur(25px);
    justify-content: center;
    align-items: center;
`;
