import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cx from "classnames";
import {
  GlobeIcon,
  LeftArrowIcon,
  ImageIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  CalendarIcon,
  PlusIcon,
} from "../../components/Icons";

const strokeDasharray = 56.5487;

const ComposeTweet = () => {
  const [strokeOffset, setStrokeOffset] = useState(strokeDasharray);
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    if (tweet.length === 0) {
      setStrokeOffset(strokeDasharray);
    } else {
      setStrokeOffset(strokeDasharray - tweet.length * 0.2019);
    }
  }, [tweet]);

  return (
    <div className="py-2 px-4">
      <div className="flex">
        {/* Image */}
        <div className="w-8 h-8 mr-6">
          <img
            className="w-100 h-100 rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1169144615049601024/eJY4nU4f_reasonably_small.jpg"
            alt="Ankit Tiwari"
          />
        </div>
        {/* Text Area */}
        <div className="flex-1 py-3 border-b border-border">
          <textarea
            className="w-full h-40 bg-pearl text-lg focus:outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="What's happening?"
            value={tweet}
            onChange={(e) => {
              if (e.target.value.length <= 280) setTweet(e.target.value);
            }}
          ></textarea>

          <div className="flex items-center pb-2 text-blue-500 font-bold text-sm">
            <GlobeIcon className="inline-block w-5 h-5" />
            <span className="ml-2">Everyone can reply</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-1 text-blue-500 space-x-4">
              <ImageIcon className="w-5 h-5" />
              <GIFIcon className="w-5 h-5" />
              <PollIcon className="w-5 h-5" />
              <EmojiIcon className="w-5 h-5" />
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div
              className={cx("flex items-center", {
                hidden: tweet.length === 0,
              })}
            >
              <div
                className="flex w-6 h-6 mr-5"
                style={{ transform: "rotate(-90deg)" }}
              >
                <svg
                  height="100%"
                  viewBox="0 0 20 20"
                  width="100%"
                  style={{ overflow: "visible" }}
                >
                  {/* prettier-ignore */}
                  <circle cx="50%" cy="50%" fill="none" stroke-width="2" r="9" stroke="#38444D"></circle>
                  {/* prettier-ignore */}
                  <circle cx="50%" cy="50%" fill="none" stroke-width="2" r="9" stroke="#1DA1F2" stroke-linecap="round" style={{ strokeDashoffset: strokeOffset, strokeDasharray: 56.5487 }}></circle>
                </svg>
              </div>
              <div className="w-7 h-7 flex items-center justify-center rounded-full border border-blue-500 text-blue-500">
                <PlusIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ComposeTweet.Header = () => {
  const router = useRouter();
  return (
    <header className="flex flex-shrink-0 justify-between items-center px-4 h-12 bg-pearl border-b border-border">
      <div onClick={() => router.back()} className=" text-blue-500">
        <LeftArrowIcon className="w-6 h-6" />
      </div>
      <div className=" ">
        <button className="w-20 h-7 flex font-bold justify-center items-center bg-blue-500 rounded-full">
          Tweet
        </button>
      </div>
    </header>
  );
};

export default ComposeTweet;
