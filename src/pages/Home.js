import Sidebar from "../components/Sidebar";
import AboutMe from "../components/Aboutme";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex min-w-[70%]">
        <Sidebar />
        <div className="flex flex-col items-center h-screen w-10/12 pr-4">
          <div className="w-full mt-20">
            <Navbar />
          </div>
        </div>
      </div>
    </main>
  );
}
