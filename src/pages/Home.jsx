import React from "react";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router";
import Footer from "../componets/Footer";
import Hero from "../componets/Hero";
import PopularGames from "./PopularGames";
import Newsletter from "../componets/Newsletter";

const Home = () => {
  return (
    <div>
      <header className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className="bg-black">
        <Outlet></Outlet>
      </main>
      <section>
        <Newsletter></Newsletter>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
