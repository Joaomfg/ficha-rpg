import React from "react";
import { Switch, Route } from "react-router-dom";
import MasterProvider from "./Context/Providers/MasterProvider";
import MasterPage from "./pages/MasterPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  return (
    <div>
      <MasterProvider>
        <Switch>
          <Route exact path="/" component={MasterPage} />
          <Route path="/player/:id" component={PlayerPage} />
        </Switch>
      </MasterProvider>
    </div>
  );
}

export default App;
