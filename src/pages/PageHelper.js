import React from "react";
import Home from "./Home";
import Projects from "./Projects";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Home":
        return <Home />;
      case "Projects":
        return <Projects />;
      //   default:
      //     return <Home />;
    }
  };

  return (
    <section>
      <div>{renderPage()}</div>
    </section>
  );
}
export default Page;
