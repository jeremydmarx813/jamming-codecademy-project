import React from 'react';
import './App.css';

import Dashboard from '../Dashboard';
import LoginPage from '../Login/LoginPage';


const App = () => {
	const code = new URLSearchParams(window.location.search).get("code");

	return code ? <Dashboard code={code} /> : <LoginPage />;
};


export default App;
