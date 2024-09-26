import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SideBar from "./SideBar.jsx";

const Layout = () => {
	return (
		// <div className="w-full bg-white dark:bg-black">
		// 	<Navbar />

		// 	<div className="w-full px-8 py-2 overflow-x-hidden overflow-y-auto will-change-scroll">
		// 		<Outlet />
		// 	</div>
		// 	<ScrollRestoration />
		// </div>
		<div className="w-full bg-white dark:bg-black">
			<div className="mx-auto md:max-w-3xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
				<div className="drawer lg:drawer-open">
					<input
						id="my-drawer-2"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="flex flex-col items-center justify-center drawer-content">
						{/* Navbar content here */}
						<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full">
							<div className="w-full">
								<Navbar />
							</div>
						</div>

						{/* Page content here */}
						<div className="w-full mt-24 lg:mt-20 px-2.5 lg:pl-8 mb-14">
							<Outlet />
						</div>
					</div>

					<div className="drawer-side">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<div className="h-[100vh] overflow-hidden menu w-72 p-0 m-0">
							{/* Sidebar content here */}
							<SideBar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
