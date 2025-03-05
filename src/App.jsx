import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AngelNumbers from "./components/AngelNumbers";
import AngelicCards from "./components/AngelicCards";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <AngelNumbers />
        <AngelicCards />
      </main>
      <Footer />
    </>
  );
}

export default App;
