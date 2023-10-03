import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Process from "../pages/Process";
import Team from "../pages/Team";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
        <Routes>
          <Route path="/10x-recruit" element={<Home/>} />
          <Route path="/10x-recruit/home" element={<Home/>} />
          <Route path="/10x-recruit/about" element={<About/>} />
          <Route path="/10x-recruit/process" element={<Process/>} />
          <Route path="/10x-recruit/team" element={<Team/>} />
        </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
