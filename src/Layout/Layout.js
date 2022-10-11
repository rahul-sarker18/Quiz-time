import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export const Myapi = createContext([]);
const Layout = () => {
  const apilode = useLoaderData();

  return (
    <div>
      <Myapi.Provider value={apilode}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Myapi.Provider>
    </div>
  );
};

export default Layout;
