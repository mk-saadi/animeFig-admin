import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Layout = () => {
	return (
		<div className="w-full bg-black">
			<Navbar />

			<div className="w-full px-8 py-2 overflow-x-hidden overflow-y-auto will-change-scroll">
				<Outlet />
			</div>
			<ScrollRestoration />
		</div>
	);
};

export default Layout;
