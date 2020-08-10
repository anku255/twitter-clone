import ActiveLink from "../components/ActiveLink";
import {
  HomeIcon,
  HomeIconActive,
  MailboxIcon,
  MailboxIconActive,
  BellIcon,
  BellIconActive,
  SearchIcon,
  SearchIconActive,
} from "../components/Icons";
import "../styles/index.css";

const Header = ({ title }) => (
  <header className="flex items-center px-4 h-12 bg-pearl border-b border-border">
    <div className="w-8 h-8 mr-4">
      <img
        className="w-100 h-100 rounded-full object-cover"
        src="https://pbs.twimg.com/profile_images/1169144615049601024/eJY4nU4f_reasonably_small.jpg"
        alt="Ankit Tiwari"
      />
    </div>

    <div className="text-lg font-bold">{title}</div>
  </header>
);

const Footer = () => (
  <footer className="h-12 flex items-center border-t border-border">
    <ul className="flex flex-1 justify-between">
      <li>
        <ActiveLink className="flex items-center px-6" href="/">
          {({ isActive }) =>
            isActive ? (
              <HomeIconActive className="w-6 h-6 text-blue-500" />
            ) : (
              <HomeIcon className="w-6 h-6 text-gray-500" />
            )
          }
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="flex items-center px-6" href="/explore">
          {({ isActive }) =>
            isActive ? (
              <SearchIconActive className="w-6 h-6 text-blue-500" />
            ) : (
              <SearchIcon className="w-6 h-6 text-gray-500" />
            )
          }
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="flex items-center px-6" href="/notifications">
          {({ isActive }) =>
            isActive ? (
              <BellIconActive className="w-6 h-6 text-blue-500" />
            ) : (
              <BellIcon className="w-6 h-6 text-gray-500" />
            )
          }
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="flex items-center px-6" href="/messages">
          {({ isActive }) =>
            isActive ? (
              <MailboxIconActive className="w-6 h-6 text-blue-500" />
            ) : (
              <MailboxIcon className="w-6 h-6 text-gray-500" />
            )
          }
        </ActiveLink>
      </li>
    </ul>
  </footer>
);

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title={Component.title} />
      <div className="flex-1 overflow-y-scroll">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
