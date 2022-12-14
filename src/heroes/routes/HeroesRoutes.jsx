import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPages, HeroPages, MarvelPages, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />}></Route>
          <Route path="dc" element={<DcPages />}></Route>

          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPages />}></Route>

          <Route path="/" element={<Navigate to={"/marvel"} />}></Route>
        </Routes>
      </div>
    </>
  );
};
