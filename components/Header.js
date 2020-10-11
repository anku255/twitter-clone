import React from 'react';

export const Header = ({ title }) => (
  <header className="flex flex-shrink-0 items-center px-4 h-12 bg-pearl border-b border-border">
    <div className="w-8 h-8 mr-6">
      <img
        className="w-100 h-100 rounded-full object-cover"
        src="https://pbs.twimg.com/profile_images/1169144615049601024/eJY4nU4f_reasonably_small.jpg"
        alt="Ankit Tiwari"
      />
    </div>

    <div className="text-lg font-bold">{title}</div>
  </header>
);