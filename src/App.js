import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return(
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
      <br />
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