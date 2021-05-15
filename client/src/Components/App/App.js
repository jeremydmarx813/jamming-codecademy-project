import React, { useState, useEffect } from 'react';
import Spotify from '../../util/Spotify';
import './App.css';
import axios from 'axios';

// import SearchBar from '../SearchBar/SearchBar';
import Dashboard from '../Dashboard';
import LoginPage from '../Login/LoginPage';
// import SearchResults from '../SearchResults/SearchResults';
// import Playlist from '../Playlist/Playlist';
// import Header from '../Header/Header';
// import LoginPage from '../Login/LoginPage';
// import Spotify from '../../util/Spotify';
// import {useAuth0} from '@auth0/auth0-react';
// import LogoutButton from '../Login/LogoutButton';
// import { ContextProvider } from '../ContextProvider/ContextProvider';
// import { Redirect } from 'react-router-dom';

const App = () => {
	const code = new URLSearchParams(window.location.search).get("code");
	// const { isAuthenticated } = useAuth0();
	// console.log(code);
	return code ? <Dashboard code={code} /> : <LoginPage />;
};


export default App;
