import React, { useState, useEffect } from "react";

import { SearchBar } from "../components/Searchbar";
import { timeAgo } from "../utils/timeAgo";

const Message = ({ fullName, userName, avatar, createdAt, message }) => (
  <div className="p-4 flex border-b text-base text-primary-text border-border">
    <div className="w-12 h-12 rounded-full mr-2">
      <img
        src={avatar}
        alt={fullName}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="flex-1 h-full min-w-0">
      {/* First row */}
      <div className="flex flex-1">
        <span className="truncate">
          <span className="mr-1 text-white font-bold">{fullName}</span>
          <span className="text-sm">@{userName}</span>
        </span>
        <div className="flex-1" />
        <div className="text-sm">
          {timeAgo.format(new Date(createdAt), "twitter")}
        </div>
      </div>
      {/* Message text */}
      <div className="leading-normal truncate">{message}</div>
    </div>
  </div>
);

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => {
        const sortedMessages = [...data.messages].sort(
          (a, b) => new Date(b) - new Date(a)
        );
        setMessages(sortedMessages);
      });
  }, []);

  return (
    <div>
      {/* Message request */}
      <div className="px-4 py-3 flex justify-between items-center text-sm border-b border-border">
        <span>Message requests</span>
        <span className=" pl-3 text-gray-500">
          {/* prettier-ignore */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><g><path d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"></path></g></svg>
        </span>
      </div>
      {/* Search bar */}
      <div className="p-3 border-b border-border">
        <SearchBar placeholder="Search for people and groups" />
      </div>
      <div className="">
        {messages.map(({ fullName, userName, createdAt, message, avatar }) => (
          <Message
            fullName={fullName}
            userName={userName}
            avatar={avatar}
            createdAt={createdAt}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}

MessagesPage.title = "Messages";
