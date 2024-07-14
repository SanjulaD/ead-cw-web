import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <div className="spinner border-4 border-t-4 border-primary h-12 w-12 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
