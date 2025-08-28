import React from "react";
import AddBlog from "./AddBlog";
import { Link, Outlet } from "react-router";

const App = () => {
  return (

    <div className="bg-[#f1f3f6] h-screen w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            style={{ color: "#7027bf" }}
            viewBox="0 0 24 24"
          >
            <path d="M21.957 6.73a.073.073 0 0 0-.019-.097c-.004-.004-.008-.008-.012-.01l-.006-.002-6.033-3.018a.729.729 0 0 0-.292-.067.692.692 0 0 0-.586.317l-3.474 5.646 4.359 7.083 6.063-9.852zm-1.064 13.543c.611.306 1.107.092 1.107-.478V8.483l-5.809 9.439 4.702 2.351zM9.622 8.213v6.426l5.711 2.855zm-7.068 9.558 5.19 2.595a.845.845 0 0 0 .374.098c.323 0 .549-.25.549-.669V6.701a.067.067 0 0 0-.035-.059L2.739 3.697a.669.669 0 0 0-.3-.079c-.258 0-.439.199-.439.534v12.723c0 .341.25.744.554.896z"></path>
          </svg>
          <h1 className="text-2xl font-semibold text-[#7027bf]">BlogShelf</h1>
        </div>

        <div className="py-3 text-xl">
          <Link to="/add" className="m-3 ">
            <button className="p-3 rounded-xl  bg-[#f1f3f6] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#fff] transform transition-all duration-300 hover:scale-105 hover:shadow-[6px_6px_10px_#babecc,-6px_-6px_10px_#fff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#7027bf" }}
                className="size-4"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
              </svg>
            </button>
          </Link>
          <Link to="/display" className="m-3">
            <button className="p-3 rounded-xl  bg-[#f1f3f6] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#fff] transform transition-all duration-300 hover:scale-105 hover:shadow-[6px_6px_10px_#babecc,-6px_-6px_10px_#fff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#7027bf" }}
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
