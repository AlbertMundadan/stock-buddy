import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div className="h-cover min-h-screen min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
        <Navbar/>
        <section className="text-center text-white flex flex-col justify-center items-center h-96">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>

        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
            to="/"
            className="text-white bg-gray-700 hover:bg-gray-800 rounded-md px-3 py-2 mt-4"
        >
            Go Back
        </Link>
        </section>
    </div>
  );
};

export default NotFound;