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
              
              key="general"
              path="/"
              element={<News pageSize={6} category={"general"} />}
              />
            <Route
              
              key="business"
              path="/business"
              element={<News pageSize={6} category={"business"} />}
              />
            <Route
              
              key="entertainment"
              path="/entertainment"
              element={<News pageSize={6} category={"entertainment"} />}
              />
            <Route
              
              key="sports"
              path="/sports"
              element={<News pageSize={6} category={"sports"} />}
              />
            <Route
              
              key="science"
              path="/science"
              element={<News pageSize={6} category={"science"} />}
              />
            <Route
              
              key="health"
              path="/health"
              element={<News pageSize={6} category={"health"} />}
              />
            <Route
              
              key="technology"
              path="/technology"
              element={<News pageSize={6} category={"technology"} />}
              />
            <Route
              
              key="generalnews"
              path="/general"
              element={<News pageSize={6} category={"general"} />}
              />
          </Routes>
        </Router>
              
      
    );
  }
}
