import React from "react";
import { GroupsBar } from "./GroupsBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, groups, loggedIn, loading }) => {
  return (
    <div className="loader">
      {loading && <div className="form__spinner loader__spinner"></div>}
      <div className={`page-container layout`}>
        <Header loggedIn={loggedIn} />
        <GroupsBar>{groups}</GroupsBar>
        <div
          className={`layout__content ${
            loading ? "layout__content--loading" : ""
          }`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

Layout.Errors = ({ errors: log, children }) => (
  <div>
    <section className="section-container">
      <h2 className="section-container__title">Wystąpiły błędy</h2>
      <p>{children}</p>
    </section>
    {process.env.NODE_ENV === "development" && (
      <section className="section-container">
        <pre>{JSON.stringify(log, null, 2)}</pre>
      </section>
    )}
  </div>
);

Layout.Loader = ({ children }) => (
  <div className="loader">
    <div className="loader__spinner"></div>
    <div className="loader__content">{children}</div>
  </div>
);
