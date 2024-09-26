import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	return (
		<div
			className="h-full bg-base-100"
			style={{
				color: "var(--text-color-white-white)",
				borderRight: "2px solid var(--default)",
			}}
		>
			<ul className="pt-20 duration-200">
				{[
					["/home/home-page", "Home"],
					["/home/addFigures", "Add Figures"],
					["/home/editFigures", "Edit Figures"],
					["/toast-customizations", "Toast Customizations"],
				].map(([to, text]) => (
					<li
						key={to}
						className="flex flex-col justify-end"
					>
						<NavLink
							to={to}
							// style={({ isActive }) =>
							// 	isActive
							// 		? activeStyle
							// 		: {
							// 				color: "var(--text-color-dark-white)",
							// 				borderStartStartRadius: "var(--borderRadius)",
							// 				borderEndStartRadius: "var(--borderRadius)",
							// 		  }
							// }
							className="px-5 py-2.5 my-1 text-start flex justify-start items-center border-none rounded-none no-animation bg-slate-700/10"
						>
							{text}
							<NavLink to={to}>
								{({ isActive }) => isActive && <ChevronRight size={18} />}
							</NavLink>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideBar;
