import React from "react";

import {
  HomeIcon,
  HomeIconActive,
  MailboxIcon,
  MailboxIconActive,
  BellIcon,
  BellIconActive,
  SearchIcon,
  SearchIconActive,
} from "./Icons";
import ActiveLink from "./ActiveLink";

export const Footer = () => (
  <footer className="h-12 flex flex-shrink-0 items-center border-t border-border">
    <nav className="h-full flex flex-1 justify-between items-center">
      <ActiveLink className="flex h-full items-center px-6" href="/">
        {({ isActive }) =>
          isActive ? (
            <HomeIconActive className="w-6 h-6 text-blue-500" />
          ) : (
            <HomeIcon className="w-6 h-6 text-gray-500" />
          )
        }
      </ActiveLink>
      <ActiveLink className="flex h-full  items-center px-6" href="/explore">
        {({ isActive }) =>
          isActive ? (
            <SearchIconActive className="w-6 h-6 text-blue-500" />
          ) : (
            <SearchIcon className="w-6 h-6 text-gray-500" />
          )
        }
      </ActiveLink>
      <ActiveLink
        className="flex h-full  items-center px-6"
        href="/notifications"
      >
        {({ isActive }) =>
          isActive ? (
            <BellIconActive className="w-6 h-6 text-blue-500" />
          ) : (
            <BellIcon className="w-6 h-6 text-gray-500" />
          )
        }
      </ActiveLink>
      <ActiveLink className="flex h-full  items-center px-6" href="/messages">
        {({ isActive }) =>
          isActive ? (
            <MailboxIconActive className="w-6 h-6 text-blue-500" />
          ) : (
            <MailboxIcon className="w-6 h-6 text-gray-500" />
          )
        }
      </ActiveLink>
    </nav>
  </footer>
);
