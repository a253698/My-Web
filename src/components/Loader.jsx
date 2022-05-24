import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div
      id="loader"
      className="flex justify-center items-center flex-col  bg-[#03010E]"
    >
      <img
        src="https://react-pdf.org/images/logo.png"
        alt="loader"
        className="mb-5 App-logo"
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
