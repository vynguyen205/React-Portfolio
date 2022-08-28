import Sidebar from "../components/Sidebar";
import AboutMe from "../components/Aboutme";
import Navbar from "../components/Navbar";
import PostingProfile from "../components/postingProfile";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex min-w-[95%] h-screen">
        <Sidebar />
        <div className="flex flex-col items-center h-screen w-10/12 pr-4">
          <div className="w-full mt-20">
            <Navbar />
          </div>
          <div className=" flex w-full">
            <div className="flex mt-5">
              <PostingProfile />
            </div>
          </div>
          <div className="flex w-[90%] mt-5">
            <AboutMe />
          </div>
        </div>
      </div>
    </main>
  );
}
