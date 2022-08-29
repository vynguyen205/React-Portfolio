import Sidebar from "../components/Sidebar";
import AboutMe from "../components/Aboutme";
import Navbar from "../components/Navbar";
import PostingProfile from "../components/postingProfile";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex min-w-[95%] h-screen">
        <Sidebar />
        <div className="flex flex-col items-center h-screen w-10/12 pr-10">
          <div className="w-full mt-20">
            <Navbar />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex mt-10">
              <PostingProfile />
            </div>
            <div className="flex w-[90%] mt-10">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
