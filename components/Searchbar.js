import React, { useState, useEffect } from "react";
import cx from "classnames";

export const SearchBar = ({placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={cx(
        "px-3 py-3 flex justify-between items-center  rounded-full border border-transparent",
        {
          "border border-blue-500": isFocused,
          "bg-gray-800": !isFocused,
        }
      )}
    >
      <div className={cx("text-gray-500", { "text-blue-500": isFocused })}>
        {/* prettier-ignore */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      </div>
      <input
        className="block pl-2 text-tiny focus:outline-none flex-1 bg-transparent"
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
