import { StyledLoader, DivLoader } from './Loader.styled';
export const Loader = () => {
  return (
    <DivLoader>
      <StyledLoader
        height="120"
        width="120"
        radius="48"
        color="#4A56E2"
        ariaLabel="watch-loading"
        wrapperStyle={{
          display: 'block',
          textAlign: 'center',
          left: '50%',
          right: '50%',
          top: '50%',
          bottom: '50%',
        }}
        visible={true}
      />
    </DivLoader>
  );
};
