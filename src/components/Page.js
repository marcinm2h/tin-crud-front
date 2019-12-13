import React from "react";
import * as Icons from "./Icons";
import { Link } from "./Link";

export const Page = ({ children }) => <div>{children}</div>;

/*
<Page.Header>
  Strona główna
  <Page.Header.Action>Utwórz grupę</Page.Header.Action>
</Page.Header>
*/

Page.Header = ({ children }) => (
  <section className="section-container section-container--title">
    <h2 className="section-container__title section-container__title--main">
      {children}
    </h2>
  </section>
);

Page.Header.Action = () => (
  <div className="page-action">
    <Link href="group-create.html">
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
    <section className="section-container section-container--title">
      <h2 className="section-container__title section-container__title--main">
        Wystąpiły błędy
      </h2>
      <pre>{JSON.stringify(children, null, 2)}</pre>
    </section>
  </div>
);

Page.Loader = props => <div className="loader"><div className="loader__spinner"></div></div>;
