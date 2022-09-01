import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// code spliting
const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;
