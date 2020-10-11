import React, { useRef, useState } from "react";
import cx from "classnames";

import { SearchBar } from "../components/Searchbar";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
} from "../components/Icons";

const TabItem = ({ title, isActive }) => (
  <div
    className={cx(
      "p-4 font-bold text-base flex-shrink-0 text-white border-b border-transparent",
      {
        "text-blue-500 border-blue-500": isActive,
      }
    )}
    style={{ scrollSnapAlign: "center" }}
  >
    {title}
  </div>
);

const TabNavButton = ({ Icon, hidden, handleScroll }) => (
  <div
    className={cx("py-4 px-3 text-blue-500 bg-pearl", { hidden: hidden })}
    onClick={handleScroll}
  >
    <Icon className="w-4 h-4 transform translate-y-1" />
  </div>
);

const TabList = () => {
  const tabListRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth } = tabListRef.current;

    if (scrollLeft === 0) {
      tabListRef.current.scrollLeft = scrollWidth;
      setScrolled(true);
    } else {
      tabListRef.current.scrollLeft = 0;
      setScrolled(false);
    }
  };

  return (
    <div className="">
      <div className="flex border-b border-border">
        <TabNavButton
          Icon={ChevronLeftIcon}
          handleScroll={handleScroll}
          hidden={!scrolled}
        />

        <div
          ref={tabListRef}
          className="flex flex-1 overflow-y-hidden overflow-x-auto hide-scroll-bar"
          style={{
            scrollPadding: "0 3rem 0 3rem",
            scrollSnapType: "y mandatory",
            scrollBehavior: "smooth",
          }}
        >
          <TabItem title="For you" isActive />
          <TabItem title="COVID-19" />
          <TabItem title="Trending" />
          <TabItem title="News" />
          <TabItem title="Sports" />
          <TabItem title="Entertainment" />
        </div>
        <TabNavButton
          Icon={ChevronRightIcon}
          handleScroll={handleScroll}
          hidden={scrolled}
        />
      </div>
    </div>
  );
};

const Banner = () => (
  <div
    className="w-full h-64 bg-cover"
    style={{ backgroundImage: "url(https://imgur.com/VTFGvTj.jpeg)" }}
  >
    <div className="h-full py-3 px-4 flex flex-col justify-end bg-overlay">
      <div className="text-tiny">IPL 2020 . LIVE</div>
      <div className="text-2xl font-bold">
        IPL: The Mumbai Indians take on the Delhi Capitals
      </div>
    </div>
  </div>
);

const ExploreListItem = ({ category, title, imageUrl, noOfTweets }) => (
  <div className="px-4 py-3 flex justify-between border-b border-border">
    <div className="">
      <div className="text-tiny text-primary-text">{category}</div>
      <div className="text-base font-bold">{title}</div>
      {noOfTweets && <div className="text-tiny text-primary-text">{noOfTweets} Tweets</div>}
    </div>
    {imageUrl && (
      <div className="h-17 w-17">
        <img
          className="w-full h-full rounded-md object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
    )}
  </div>
);

export default function ExplorePage() {
  return (
    <div>
      <TabList />
      <Banner />
      <div className="w-full h-3 bg-accent-2"></div>
      <ExploreListItem
        category="COVID-19 . LIVE"
        title="COVID-19 in India"
        imageUrl="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=360x360"
      />
      <ExploreListItem
        category="Trending in India"
        title="#WorldBiryaniDay"
        noOfTweets="2,070"
      />
      <ExploreListItem
        category="Tennis . LIVE"
        title="#French Open"
        noOfTweets="1,089"
        imageUrl="https://pbs.twimg.com/semantic_core_img/1315179382885949440/mx3a3fZV?format=jpg&name=360x360"
      />
      <ExploreListItem
        category="Tennis"
        title="20 Grand Slams"
        noOfTweets="26.7K"
      />
      <ExploreListItem
        category="Soccer . Trending"
        title="England"
        noOfTweets="250K"
      />
    </div>
  );
}

ExplorePage.Header = () => {
  return (
    <header className="px-4 py-3 flex flex-shrink-0 items-center">
      <div className="w-8 h-8 mr-6">
        <img
          className="w-100 h-100 rounded-full object-cover"
          src="https://pbs.twimg.com/profile_images/1169144615049601024/eJY4nU4f_reasonably_small.jpg"
          alt="Ankit Tiwari"
        />
      </div>

      <div className="flex-1">
        <SearchBar placeholder="Search" />
      </div>

      <div className="ml-5 text-blue-500">
        <SettingsIcon className="w-5 h-5" />
      </div>
    </header>
  );
};

ExplorePage.title = "Explore";
