import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex h-fullscreen">
      <Sidebar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-3xl font-medium text-white">All gists</div>
        <div className="text-xl font-medium text-white">Coming soon</div>
      </div>
    </main>
  );
}
