import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const handleClick = (url) => {
    // open the url in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside className="min-h-screen min-w-[10%] mx-10">
      <div className="flex flex-col overflow-y-auto shrink">
        <div className="flex flex-col items-center pt-24 px-20">
          <div
            id="profile"
            className="h-72 w-72 rounded-full bg-blue-500"
          ></div>
        </div>
        <div className="flex px-6 pt-6 pb-2 font-light text-lg text-gray-500">
          vynguyen205
        </div>
        <div className="flex flex-row items-center">
          <div className="pl-6 pr-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              size="xs"
              style={{ color: "B4BCC3" }}
            />
          </div>
          <div className="flex justify-center items-center pr-2">
            <div
              id="followers-count"
              className="font-medium text-sm text-gray-300"
            >
              21
            </div>
            <div id="followers-word" className="pl-1 text-sm text-gray-500">
              followers
            </div>
          </div>
          <p className="text-xs text-gray-400 pr-2 ">{"\u2022"}</p>
          <div className="flex flex-wrap justify-center items-center">
            <div
              id="followers-count"
              className="font-medium text-sm text-gray-300"
            >
              27
            </div>
            <div id="followers-word" className="pl-1 text-sm text-gray-500">
              following
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-center">
          <button
            onClick={() => handleClick("https://github.com/vynguyen205")}
            className="w-full bg-[#2326298b] border border-[#494949] rounded-md hover:bg-[#45484a8b] hover:border-[#777777] focus:outline-none focus:border-transparent focus:bg-[#2326298b] focus:border-[#494949] active:bg-[#2326298b] active:border-[#494949] transition duration-150 ease-in-out"
          >
            <p className="text-gray-300 font-medium text-sm tracking-wide p-2">
              View Github Profile
            </p>
          </button>
        </div>
      </div>
    </aside>
  );
}
