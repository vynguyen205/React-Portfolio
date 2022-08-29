export default function PostingProfile() {
  const handleClick = (url) => {
    // open the url in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex">
      <div
        id="profile"
        className="h-10 w-10 rounded-full bg-blue-500 mr-4"
      ></div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <button
            className="w-full text-sm font-light text-blue-400 mr-1.5 hover:underline"
            onClick={() => handleClick("https://github.com/vynguyen205")}
          >
            vynguyen205
          </button>
          <div className="w-full text-sm text-slate-300 mr-1.5">/</div>
          <div className="w-full text-sm font-bold text-blue-400">
            AboutMe.md
          </div>
        </div>
        <div className="flex items-center mt-0.5">
          <div className="w-full text-xs font-light text-slate-400 mr-1.5">
            Last active 1 day ago
          </div>
        </div>
      </div>
    </div>
  );
}
