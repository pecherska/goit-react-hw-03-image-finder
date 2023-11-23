import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <MagnifyingGlass
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};

export default Loader;
