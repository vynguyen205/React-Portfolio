import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/PageHelper";
import Sidebar from "../src/components/Sidebar";
import Navbar from "../src/components/Navbar";

function App() {
  const [pages] = useState([{ name: "Projects" }, { name: "Home" }]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <main className="h-screen w-screen bg-[#0C1117]">
      <div className="flex justify-center">
        <div className="flex min-w-[95%] h-screen">
          <Sidebar />
          <div className="flex flex-col items-center h-screen w-10/12 pr-10">
            <div className="w-full mt-20">
              <Navbar
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
            <section>
              <Page currentPage={currentPage}></Page>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
