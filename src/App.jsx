import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import LeftDrawerMenu from "./components/leftDrawerMenu";
export default function App() {
  return (
    <>
      <div className="app-container">
        <div className="left-drawer">
          <LeftDrawerMenu />
        </div>
        <div className="main-content">
          <SearchBar />
        </div>
      </div>      
    </>
  );
}
