import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return(
    <div>
      <Router>
      <header>
        <Link to="/">
          <h1>Adopt Me</h1>
        </Link>
      </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" /> */}
    </div>
  )
 
}

ReactDOM.render(<StrictMode> 
                  <App /> 
                </StrictMode>, document.getElementById("root"));
//eslint allows the app to understand the react