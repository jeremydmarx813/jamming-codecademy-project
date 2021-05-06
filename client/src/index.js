import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Auth0ProviderWithHistory from './util/auth0-provider-with-history';
import './index.css';
import App from './Components/App/App';
// import { Auth0Provider } from '@auth0/auth0-react';
// import PrivateRoute from './util/PrivateRoute';
// import LoginPage from './Components/Login/LoginPage';
import Header from './Components/Header/Header';


ReactDOM.render(
 <div className="App">
   <Header />
   <App />
 </div>, 
document.getElementById('root'));


/* <Router>
<Auth0ProviderWithHistory>
 <Header />
 <div className="App">	
  <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/" exact component={App}/>
  </Switch>  
  </div>
</Auth0ProviderWithHistory>
</Router> */