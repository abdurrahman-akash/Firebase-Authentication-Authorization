import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-full mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
