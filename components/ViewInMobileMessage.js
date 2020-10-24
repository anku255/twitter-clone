import React from "react";

export const ViewInMobileMessage = ({ handleClose }) => (
  <div
    className="absolute top-0 px-12 py-4 rounded-lg bg-pearl hidden sm:block"
    style={{ top: "5px" }}
  >
    <button
      onClick={handleClose}
      className="absolute focus:outline-none hover:text-blue-500"
      style={{ top: "0.625rem", right: "0.625rem" }}
    >
      {/* prettier-ignore */}
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>

    <div className="">Please view it in mobile for better experience.</div>
  </div>
);
