import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        wrapperClass="dna-wrapper"
        ballColors={['#e9bb03', '#e9bb03', '#e9bb03']}
        backgroundColor="#7ec5f8"
      />
    </div>
  );
};
