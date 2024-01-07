import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)
  const [apiKey] = useState(process.env.REACT_APP_API)
  // state = {
  //   progress:0,
  //   apiKey : process.env.REACT_APP_API
  // }

  const handleSetProgress = (progress) => {
    setProgress(progress);
  };

  

  // setProgress = (progress) => {
  //   this.setState({progress: progress})
  // }

   
    return (
      <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="general" pageSize={pageSize} category={"general"} />}
          />
          <Route
            path="/business"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="business" pageSize={pageSize} category={"business"} />}
          />
          <Route
            path="/entertainment"
            element={
              <News setProgress={handleSetProgress}
              apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/sports"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category={"sports"} />}
          />
          <Route
            path="/science"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="science" pageSize={pageSize} category={"science"} />}
          />
          <Route
            path="/health"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="health" pageSize={pageSize} category={"health"} />}
          />
          <Route
            path="/technology"
            element={
              <News setProgress={handleSetProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category={"technology"} />
            }
          />
          <Route
            path="/general"
            element={
              <News setProgress={handleSetProgress} apiKey={apiKey} key="generalnews" pageSize={pageSize} category={"general"} />
            }
          />
        </Routes>
      </Router>
    );
  
}

export default App;
