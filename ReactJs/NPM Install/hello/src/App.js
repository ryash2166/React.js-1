import React from "react";
import Navbar from "./Components/Navbar";
import Article from "./Components/Article";
import Card from "./Components/Card";
import Table from "./Components/Table";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Article/>
    <div className="flex gap-3 mt-2">
      <div className="max-md:hidden">
        <Card/>
      </div>
    <Table/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
