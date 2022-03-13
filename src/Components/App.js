import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
    <div>
      Page 1<Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      Page 2<Link to="/">Navigate to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={pageOne} />
        <Route path="/pagetwo" component={pageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
