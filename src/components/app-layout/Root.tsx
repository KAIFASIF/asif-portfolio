import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Root = () => {
  const location = useLocation().pathname === "/resume";
  return (
    <div className="flex items-start bg-green-400 w-full overflow-x-hidden">
      {!location && (
        <aside className="bg-black sticky h-[100vh] top-0 w-14 hidden lg:block">
          <Sidebar />
        </aside>
      )}
      <main className="bg-green-500 flex-1 ">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
