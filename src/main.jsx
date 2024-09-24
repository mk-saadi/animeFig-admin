import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./utilities/AuthProvider";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import AddFigures from "./pages/AddFigures";
import { ToastProvider } from "react-toast-master";

const router = createBrowserRouter([
	{
		path: "/home",
		element: <Layout />,
		children: [
			{
				path: "/home/addFigures",
				element: <AddFigures />,
			},
		],
	},
	{
		path: "/",
		element: <Login />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<ToastProvider>
				<RouterProvider router={router} />
			</ToastProvider>
		</AuthProvider>
	</StrictMode>
);
