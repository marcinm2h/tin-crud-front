import React from "react";
import * as Icons from "./Icons";
import { Link } from "./Link";
import { useRole } from "./RoleContext";

export const Page = ({ children }) => <div>{children}</div>;

Page.Unauthenticated = () => (
  <Page>
    <Page.Header>Strona wymaga logowania</Page.Header>
  </Page>
);

const PageHeader = ({ children, action = null }) => {
  const role = useRole();
  return (
    <section className="section-container section-container--title">
      <h2 className="section-container__title section-container__title--main">
        {children}
      </h2>
      {role.user && action}
    </section>
  );
};

Page.Header = PageHeader;

Page.Header.Action = () => (
  <div className="page-action">
    <Link href="/group-create">
      <Icons.Add />
      Utwórz grupę
    </Link>
  </div>
);

Page.Body = ({ children }) => (
  <section className="section-container section-container--content">
    {children}
  </section>
);

Page.Errors = ({ children = [] }) => (
  <div>
    <section className="section-container">
      <h2 className="section-container__title">Wystąpiły błędy</h2>
    </section>
    {process.env.NODE_ENV === "development" && (
      <section className="section-container">
        <pre>{JSON.stringify(children, null, 2)}</pre>
      </section>
    )}
  </div>
);

Page.Loader = ({ children }) => (
  <div className="loader">
    <div className="loader__spinner"></div>
    <div className="loader__content">{children}</div>
  </div>
);
