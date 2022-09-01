import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// code spliting
const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
