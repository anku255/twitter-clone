import React from 'react';

export const FAB = ({Icon}) => (
  <div
    className="fixed w-14 h-14 flex justify-center items-center rounded-full bg-blue-500 cursor-pointer sm:hidden"
    style={{
      bottom: 64,
      right: 16,
      boxShadow:
        "rgba(136, 153, 166, 0.2) 0px 0px 10px, rgba(136, 153, 166, 0.25) 0px 1px 3px 1px",
    }}
  >
    <div className="text-white">
      <Icon className="w-5 h-5" />
    </div>
  </div>
);