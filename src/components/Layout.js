import React from "react";
import { GroupsBar } from "./GroupsBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      <GroupsBar />
      {children}
      <Footer />
    </div>
  );
};
