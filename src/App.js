import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<News key="general" pageSize={6} category={"general"} />}
          />
          <Route
            path="/business"
            element={<News key="business" pageSize={6} category={"business"} />}
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={6} category={"sports"} />}
          />
          <Route
            path="/science"
            element={<News key="science" pageSize={6} category={"science"} />}
          />
          <Route
            path="/health"
            element={<News key="health" pageSize={6} category={"health"} />}
          />
          <Route
            path="/technology"
            element={
              <News key="technology" pageSize={6} category={"technology"} />
            }
          />
          <Route
            path="/general"
            element={
              <News key="generalnews" pageSize={6} category={"general"} />
            }
          />
        </Routes>
      </Router>
    );
  }
}
