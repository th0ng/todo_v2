import React from "react";
import { Helmet } from "react-helmet";
import { Homepage } from "./pages";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Todo List Application" />
        <title>Todo app</title>
      </Helmet>
      <Homepage />
    </div>
  );
};

export default App;
