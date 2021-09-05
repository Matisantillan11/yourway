import React from 'react';
import Loader from 'react-loader-spinner';

export const LoaderCustom = () => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'absolute',
          backgroundColor: '#f1f1f1',
          zIndex: '999999999',
        }}
      >
        <Loader
          style={{ marginTop: '250px' }}
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={6000}
        />
      </div>
    </>
  );
};
