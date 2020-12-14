import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./layouts/main/Header";
import LeftSideList from "./layouts/main/LeftSideList";
import Counter from "./views/ReduxToolKit1";
import {
  reactlinkitem,
  webapilinkitem,
  ReduxLinkitem,
  MaterialListitem,
  LibListitem,
} from "./views/Router";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        {" "}
        <Header />
        <LeftSideList />
        <div className={styles.root}>
          <div className={styles.dummyrow} />
          <Route exact path="/" component={Counter} />

          {reactlinkitem.map((linkitem) => (
            <Route
              exact
              key={linkitem.id}
              path={`/${linkitem.key}`}
              component={linkitem.componet}
            />
          ))}
          {webapilinkitem.map((linkitem) => (
            <Route
              exact
              key={linkitem.id}
              path={`/${linkitem.key}`}
              component={linkitem.componet}
            />
          ))}
          {ReduxLinkitem.map((linkitem) => (
            <Route
              exact
              key={linkitem.id}
              path={`/${linkitem.key}`}
              component={linkitem.componet}
            />
          ))}
          {MaterialListitem.map((linkitem) => (
            <Route
              exact
              key={linkitem.id}
              path={`/${linkitem.key}`}
              component={linkitem.componet}
            />
          ))}
          {LibListitem.map((linkitem) => (
            <Route
              exact
              key={linkitem.id}
              path={`/${linkitem.key}`}
              component={linkitem.componet}
            />
          ))}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
