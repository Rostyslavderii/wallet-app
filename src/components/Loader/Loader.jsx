import { Watch } from 'react-loader-spinner';
import { Discuss } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#24CCA7"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export const LoaderCurrency = () => {
  return (
    <Discuss
      visible={true}
      height="45"
      width="45"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#4A56E2"
    />
  );
};
