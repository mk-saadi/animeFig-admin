import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import useScrollToTop from "../utilities/useScrollToTop";
import useTitle from "../utilities/useTitle";
import { AuthContext } from "../utilities/AuthProvider";
import InputField from "../utilities/InputField";
import Button from "../utilities/Button";
import { useToast } from "react-toast-master";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const { toastMaster } = useToast();

	useTitle("auth | login");
	useScrollToTop();

	const handleLogin = async (event) => {
		event.preventDefault();
		const { email, password } = event.target.elements;

		if (password.value.length < 6) {
			toastMaster({
				transition: "down",
				type: "error",
				message: "password must be at least 6 characters long!",
				bg: "white",
			});
			return;
		}

		try {
			toastMaster({
				transition: "down",
				type: "loading",
				message: "Logging in...",
				bg: "white",
			});
			const { user } = await signIn(email.value, password.value);
			const savedLocation = JSON.parse(sessionStorage.getItem("previousLocation"));
			const destination = savedLocation?.pathname || "/home/addFigures";
			navigate(destination, { replace: true });
			sessionStorage.removeItem("previousLocation");

			if (user.uid) {
				toastMaster({
					transition: "down",
					type: "success",
					message: "Successfully Logged In",
					bg: "white",
				});
			}
		} catch {
			toastMaster({
				transition: "down",
				type: "error",
				message: "Login Failed",
				bg: "white",
			});
			event.target.reset();
		}
	};
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="w-full h-screen px-12 overflow-hidden bg-black">
			<div className="flex flex-col justify-center items-center h-full min-w-[28rem]">
				<form
					onSubmit={handleLogin}
					className="flex flex-col items-center justify-center w-full gap-y-4"
				>
					<InputField
						label="Your Email"
						type="email"
						id="email"
						name="email"
					/>
					<>
						<div className="flex flex-col w-full gap-y-1.5">
							<label
								htmlFor="password"
								className="text-sm font-medium text-gray-500"
							>
								Your Password
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									name="password"
									className="w-full px-3 py-2 text-gray-300 bg-transparent border border-gray-300 rounded-md shadow-lg shadow-gray-700/10 focus:outline-none focus:ring-2 focus:ring-gray-300"
									required
								/>
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className="absolute p-1 text-gray-300 transform -translate-y-1/2 text-ash right-1 top-1/2 focus:outline-none"
								>
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
						</div>
					</>

					<Button
						classname={"text-lg mt-6"}
						type="submit"
						span1="Login?"
						span2="Login"
					/>
				</form>
			</div>
		</div>
	);
};

export default Login;
