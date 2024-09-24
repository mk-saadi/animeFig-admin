import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config.js";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			if (currentUser) {
				axios
					.post(`${import.meta.env.VITE_URL}/jwt`, {
						email: currentUser.email,
					})
					.then((data) => {
						localStorage.setItem("access-token", data.data.token);
						setLoading(false);
					});
			} else {
				localStorage.removeItem("access-token");
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		signIn,
		logOut,
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
