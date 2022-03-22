import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "../Components/Streams/StreamCreate";
import StreamList from "../Components/Streams/StreamList";
import StreamEdit from "../Components/Streams/StreamEdit";
import StreamShow from "../Components/Streams/StreamShow";
import StreamDelete from "../Components/Streams/StreamDelete";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
