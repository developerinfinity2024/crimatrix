import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Card from "../card/Card";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a2033] relative">
        <header className="pb-44 pt-10 max-w-[1440px] mx-auto">
          <h1 className="font-semibold text-white text-[23px] mb-4">
            Welcome back, Sarfaraz
          </h1>
          <p className="text-textDark">Dashboard</p>
        </header>
        <section className="flex gap-7 absolute bottom-[-114px] left-0 right-0 mx-auto w-fit">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </section>
      <main className="mt-[160px] max-w-[1440px] mx-auto ">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
