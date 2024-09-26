import ThemeSwitcher from "../utilities/ThemeSwitcher";

const Navbar = () => {
	return (
		<div className="px-6 py-2.5 shadow-md bg-primary bg-white dark:bg-black">
			<div className="flex justify-between">
				<div className="flex flex-row items-center justify-start gap-x-4 lg:gap-x-0">
					{/* <label
						htmlFor="my-drawer-2"
						className="lg:hidden"
					>
						<AlignJustify />
					</label> */}
					<label
						className="hamburger lg:hidden"
						htmlFor="my-drawer-2"
					>
						<input type="checkbox" />
						<svg viewBox="0 0 32 32">
							<path
								className="line line-top-bottom"
								d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
							></path>
							<path
								className="line"
								d="M7 16 27 16"
							></path>
						</svg>
					</label>

					<div className="text-xl font-bold">animeFig</div>
				</div>
				<div className="flex flex-row items-center justify-between font-normal gap-x-4">
					{/* theme switcher */}
					<ThemeSwitcher />

					<a
						href="https://github.com/mk-saadi/react-toast-master"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>

					<a
						href="https://www.npmjs.com/package/react-toast-master"
						target="_blank"
						rel="noreferrer"
					>
						NPM
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
