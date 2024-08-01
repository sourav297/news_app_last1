import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Team from "./Team";
import DefaultNews from "../pages/DefaultNews";
import SearchedNews from "../pages/SearchedNews";

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path={"/"} element={<DefaultNews />} />
          <Route path={"/search"} element={<SearchedNews />} />
          <Route path={"/ourteam"} element={<Team />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
