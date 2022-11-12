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
        wrapperStyle={{}}
        visible={true}
      />
    </DivLoader>
  );
};
