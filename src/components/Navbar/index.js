export default function Navbar(props) {
  const { pages = [], currentPage, setCurrentPage } = props;
  return (
    <nav className="border-b border-slate-800 w-11/12">
      <div className="flex flex-grow items-start mb-2">
        {pages.map((Page) => (
          <div
            className={`
          ${currentPage.name === Page.name}}`}
            key={Page.name}
          >
            <button
              className="pl-1.5 font-light text-gray-400"
              onClick={() => setCurrentPage(Page)}
            ></button>
          </div>
        ))}
      </div>
    </nav>
  );
}

// return (
//   <nav className="border-b border-slate-800 w-11/12">
//     <div className="flex flex-grow items-start mb-2">
//       <div className="flex px-2.5 py-1 rounded-md hover:bg-[#45484a8d] transition duration-150 ease-in-out">
//         <p>🛖</p>
//         <button
//           className="pl-1.5 font-light text-gray-400"
//           onClick={() => setCurrentPage(currentPage)}
//         >
//           Home
//         </button>
//       </div>
//       <div className="pl-6">
//         <div className="flex px-2.5 py-1 rounded-md hover:bg-[#45484a8d] hover:border-[#777777] focus:outline-none focus:border-transparent focus:bg-[#2326298b] focus:border-[#494949] active:bg-[#2326298b] active:border-[#494949] transition duration-150 ease-in-out">
//           <p>🗃</p>
//           <button
//             className="pl-1.5 font-light text-gray-400"
//             onClick={() => setCurrentPage(currentPage)}
//           >
//             Projects
//           </button>
//         </div>
//       </div>
//     </div>
//   </nav>
// );
