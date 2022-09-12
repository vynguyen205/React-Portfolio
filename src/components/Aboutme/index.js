import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const iconStyle = { color: "white", fontSize: "1.5rem" };

  const handleClick = (url) => {
    // open the url in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="border-box border rounded-xl border-slate-800 h-full">
        <div className="flex flex-col p-10">
          <div className="flex flex-start border-b border-slate-800 mb-6">
            <p className="mb-2 font-semibold tracking-wider text-4xl text-gray-300">
              HI, I'M VY 👋
            </p>
          </div>
          <div className="flex flex-wrap text-md font-medium tracking-wider text-gray-500">
            I am a UCI certified Full Stack Developer with a passion to learn
            new technologies. I am currently a Computer Science student at
            Orange Coast College.
          </div>
          <div className="flex flex-start border-b border-slate-800 mt-6 mb-4">
            <p className="mb-2 font-semibold tracking-wider text-2xl text-gray-300">
              CERTIFIED SKILLS 🪪
            </p>
          </div>
          <div className="flex flex-col flex-wrap ml-3">
            <div className="flex items-center">
              <p className="text-lg text-gray-500 mr-2">{"\u2022"}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-500">
                HTML, CSS
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-500 mr-2">{"\u2022"}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-500">
                JAVASCRIPT & JQUERY
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-500 mr-2">{"\u2022"}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-500">
                NODEJS & EXPRESS
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-500 mr-2">{"\u2022"}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-500">
                REACTJS
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-500 mr-2">{"\u2022"}</p>
              <p className="text-sm font-semibold tracking-wide text-gray-500">
                SQL & NOSQL DATABASES
              </p>
            </div>
          </div>
          <div className="flex flex-start border-b border-slate-800 mt-6 mb-4">
            <p className="mb-2 font-semibold tracking-wider text-2xl text-gray-300">
              CONTACT ME ☏
            </p>
          </div>
          <div>
            <button
              onClick={() =>
                handleClick("https://www.linkedin.com/in/vy-nguyen-38b142235/")
              }
            >
              <FaLinkedin style={iconStyle} />
            </button>
            <button
              onClick={() => handleClick("https://github.com/vynguyen205")}
              className="ml-3"
            >
              <AiFillGithub style={iconStyle} />
            </button>
            <button
              onClick={() => handleClick("mailto:vynguyen0520@gmail.com")}
              className="ml-3"
            >
              <AiOutlineMail style={iconStyle} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
