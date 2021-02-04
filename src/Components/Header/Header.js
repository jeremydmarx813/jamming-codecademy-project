import React from 'react';
import './Header.css';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const Header = () => {

	return (

		<ProjConsumer>
			{( headerClick ) => (
			    <h1 onClick={headerClick}>Ja<span className="highlight">mmm</span>ing</h1>
			)}
		</ProjConsumer>
	);
};

export default Header;
