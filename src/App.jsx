import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Quiz from "./Pages/Quiz/quiz";
import Header from "./Components/Header/header";
import Loader from "./Components/Loader/loader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
