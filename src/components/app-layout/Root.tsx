import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Root = () => {
  const location = useLocation().pathname === "/resume";
  return (
    <div className="flex  felx-col top-0 w-full  overflow-x-hidden lg:overflow-x-clip">
      {!location && (
        <aside className="bg-black sticky h-[100vh] top-0 w-14 hidden lg:block">
          <Sidebar />
        </aside>
      )}
      <main className="bg-black flex-1">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
