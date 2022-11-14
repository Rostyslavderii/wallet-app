import styled from 'styled-components';

const Title = styled.h2`
    margin-bottom: 20px;
    font-family: ${p => p.theme.ff.familyPoppins};
    font-weight: ${p => p.theme.fontWeight.fw4};
    font-size: ${p => p.theme.fontSize.fs30};
    line-height: 1.5;
    color: ${p => p.theme.colors.black};
`;

const Wrapper = styled.div`
    padding: 31px 0 0 68px;
`;

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 32px;
`;

const ChartBox = styled.div`
    width: 288px;
    min-height: 200px;
    flex-shrink: 0;
`;

export { Title, Wrapper, Box, ChartBox };