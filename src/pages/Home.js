import AboutMe from "../components/Aboutme";
import PostingProfile from "../components/PostingProfile";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-10">
        <PostingProfile />
      </div>
      <div className="flex w-[90%] mt-10">
        <AboutMe />
      </div>
    </div>
  );
}
