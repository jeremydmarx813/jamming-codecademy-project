import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Components/App/App';
import Header from './Components/Header/Header';


ReactDOM.render(
 <div className="App">
   <Header />
   <App />
 </div>, 
document.getElementById('root'));
