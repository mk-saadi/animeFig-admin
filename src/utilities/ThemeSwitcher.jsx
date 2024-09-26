import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button
			onClick={handleThemeSwitch}
			className="p-2 text-gray-800 duration-300 bg-gray-200 border rounded dark:bg-gray-800 dark:text-gray-200"
		>
			{theme === "dark" ? <Moon /> : <Sun />}
		</button>
	);
};

export default ThemeSwitcher;
