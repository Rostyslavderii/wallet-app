import styled from 'styled-components';

const Title = styled.h2`
    margin-bottom: 10px;
    font-family: ${p => p.theme.ff.familyPoppins};
    font-weight: ${p => p.theme.fontWeight.fw4};
    font-size: ${p => p.theme.fontSize.fs30};
    line-height: 1.5;
    color: ${p => p.theme.colors.black};
    @media screen and (max-width: 767px) {
        margin-top: 28px;
    }
    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
    }
`;

const Wrapper = styled.div`
    padding-top: 128px;

     @media screen and (max-width: 767px) {
        margin: 0 auto;
        max-width: 300px;
    }
     @media screen and (min-width: 768px) {
        padding: 10px 0 10px;
    }
    @media screen and (min-width: 1280px) {
        padding: 31px 15px 10px 68px;
    }
`;

const Box = styled.div`
    display: block;
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        gap: 32px;
    }
`;

const ChartBox = styled.div`
    margin-bottom: 32px;
    width: 100%;
    min-height: 200px;
    flex-shrink: 0;
    @media screen and (max-width: 767px) {
        position: relative;
    }
    @media screen and (min-width: 768px) {
        width: 336px;
        min-height: 200px;
        flex-shrink: 0;
    }
    @media screen and (min-width: 1280px) {
        width: 288px;
    }
`;

const BalanceText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Circe';
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
`;

export { Title, Wrapper, Box, ChartBox, BalanceText };