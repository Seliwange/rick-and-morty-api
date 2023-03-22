import "./General.scss";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet></Outlet>
      </main>
    </>
  );
};
