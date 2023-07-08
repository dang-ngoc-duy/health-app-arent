import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainLayout from "./layout/MainLayout";

const App: React.FC = () => {
  return (
    <div id="main-app">
      <Header></Header>
      <MainLayout></MainLayout>
      <Footer></Footer>
    </div>
  );
};

export default App;
