import {FC, useContext, useEffect, useMemo, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {CV as CV_PATH, ROOT} from "./common/path";
import {ThemeContext} from "./theme/ThemeContext";
import {ThemeEnum} from "./theme/themeEnum";
import classNames from "classnames";
import "./App.scss";

import Main from "./feature/main";
import PageNotFound from "./feature/404";
import CV from "./feature/cv";
import {ToastContainer} from "react-toastify";
import Welcome from "./feature/welcome";

const WELCOME_STORAGE_KEY = "lastWelcomeTime";
const WELCOME_INTERVAL = 30 * 60 * 1000; // 30 minutes in milliseconds

const App: FC = () => {
	const [isLoading, setLoading] = useState(true);
	const {theme} = useContext(ThemeContext);
	
	const themeClassName = useMemo(() => {
		switch (theme) {
			case ThemeEnum.DARK:
				return "theme-dark";
			case ThemeEnum.LIGHT:
				return "theme-light";
			default:
				return "theme-dark";
		}
	}, [theme]);
	
	useEffect(() => {
		const lastWelcomeTime = localStorage.getItem(WELCOME_STORAGE_KEY);
		const now = Date.now();
		
		if (lastWelcomeTime) {
			const timeSinceLastWelcome = now - parseInt(lastWelcomeTime, 10);
			
			if (timeSinceLastWelcome < WELCOME_INTERVAL) {
				setLoading(false);
				return;
			}
		}
		
		localStorage.setItem(WELCOME_STORAGE_KEY, now.toString());
		
		const timer = setTimeout(() => {
			setLoading(false);
		}, 10500);
		
		return () => clearTimeout(timer);
	}, []);
	
	if (isLoading) {
		return (
			<Welcome />
		)
	}
	return (
		<div className={classNames("app", themeClassName )}>
			<Routes>
				<Route path={`${ROOT}:section?`} element={<Main />} />
				<Route path={CV_PATH} element={<CV />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<ToastContainer />
		</div>
	);
};

export default App;
