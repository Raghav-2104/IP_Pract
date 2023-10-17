import React from "react";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Article1 } from "./component/Article1";
import { Article2 } from "./component/Article2";
import { Article3 } from "./component/Article3";
import Services from "./component/Services";
import { Book } from "./component/Book";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/1" element={<Article1/>} />
        <Route path="/articles/2" element={<Article2/>} />
        <Route path="/articles/3" element={<Article3/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/book" element={<Book/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
