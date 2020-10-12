import React, { useState, useEffect } from "react";
import cx from "classnames";

import { SettingsIcon, PersonIcon } from "../components/Icons";

const TabListItem = ({ title, isActive, onClick }) => (
  <div
    className={cx(
      "p-4 flex-1 text-center font-bold border-b border-transparent",
      {
        "text-blue-500 border-b border-blue-500": isActive,
      }
    )}
    onClick={onClick}
  >
    {title}
  </div>
);

const TabList = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="flex border-b border-border">
      <TabListItem
        title="All"
        isActive={activeTab === "all"}
        onClick={() => setActiveTab("all")}
      />
      <TabListItem
        title="Mentions"
        isActive={activeTab === "mentions"}
        onClick={() => setActiveTab("mentions")}
      />
    </div>
  );
};

const FollowNotication = ({ fullName, avatar }) => (
  <div className="py-3 px-4 flex border-b border-border">
    <div className="w-12 h-14 pr-4">
      <PersonIcon className="text-blue-500" />
    </div>
    <div className="flex flex-col justify-between">
      <div className="w-7 h-7">
        <img
          src={avatar}
          alt={fullName}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-base">
        <span className="font-bold">{fullName}</span> followed you
      </div>
    </div>
  </div>
);

const NotificationItem = ({ type, fullName, avatar }) => {
  switch (type) {
    case "follow":
      return <FollowNotication {...{ fullName, avatar }} />;
    default:
      return null;
  }
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setNotifications(data);
      });
  }, []);

  return (
    <div>
      <TabList />
      {notifications.map(({ type, fullName, avatar }) => (
        <NotificationItem key={fullName} {...{ type, fullName, avatar }} />
      ))}
    </div>
  );
}

NotificationsPage.Header = () => {
  return (
    <header className="flex flex-shrink-0 items-center px-4 h-12 bg-pearl">
      <div className="w-8 h-8 mr-6">
        <img
          className="w-100 h-100 rounded-full object-cover"
          src="https://pbs.twimg.com/profile_images/1169144615049601024/eJY4nU4f_reasonably_small.jpg"
          alt="Ankit Tiwari"
        />
      </div>

      <div className="flex-1 text-lg font-bold">Notifications</div>
      <div className="ml-5 text-blue-500">
        <SettingsIcon className="w-5 h-5" />
      </div>
    </header>
  );
};

NotificationsPage.title = "Notifications";
