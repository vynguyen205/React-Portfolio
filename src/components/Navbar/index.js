import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBorderAll } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 w-11/12">
      <div className="flex flex-grow items-start mb-2">
        <div className="flex px-2.5 py-1 rounded-md hover:bg-[#45484a8d] transition duration-150 ease-in-out">
          {/* <FontAwesomeIcon
            icon={faCode}
            size="xs"
            style={{ color: "B4BCC3" }}
          /> */}
          <p>🛖</p>
          <button className="pl-1.5 font-normal text-gray-400">Home</button>
        </div>
        <div className="pl-6">
          <div className="flex px-2.5 py-1 rounded-md hover:bg-[#45484a8d] hover:border-[#777777] focus:outline-none focus:border-transparent focus:bg-[#2326298b] focus:border-[#494949] active:bg-[#2326298b] active:border-[#494949] transition duration-150 ease-in-out">
            {/* <FontAwesomeIcon
              icon={faBorderAll}
              size="xs"
              style={{ color: "B4BCC3" }}
            /> */}
            <p>🗃</p>
            <button className="pl-1.5 font-normal text-gray-400">
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
