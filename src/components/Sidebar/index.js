import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <aside className="w-1/4 h-screen mr-10">
      <div className="flex flex-col overflow-y-auto">
        <div className="flex flex-col items-center pt-24">
          <div
            id="profile"
            className="h-52 w-52 rounded-full bg-blue-500"
          ></div>
        </div>
        <div className="flex px-6 pt-6 pb-2 font-light text-gray-500">
          vynguyen205
        </div>
        <div className="flex flex-row">
          <div className="pl-6 pr-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              size="xs"
              style={{ color: "B4BCC3" }}
            />
          </div>
          <div className="flex justify-center items-center pr-3">
            <div
              id="followers-count"
              className="font-medium text-xs text-gray-300"
            >
              21
            </div>
            <div id="followers-word" className="pl-1 text-xs text-gray-500">
              followers
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              id="followers-count"
              className="font-medium text-xs text-gray-300"
            >
              27
            </div>
            <div id="followers-word" className="pl-1 text-xs text-gray-500">
              following
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-center">
          <button className="w-full bg-[#2326298b] border border-[#494949] rounded-md">
            <p className="text-gray-300 font-medium text-xs tracking-wide p-1.5">
              View Github Profile
            </p>
          </button>
        </div>
      </div>
    </aside>
  );
}
