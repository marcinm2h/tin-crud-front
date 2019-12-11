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
  <section class="section-container section-container--title">
    <h2 class="section-container__title section-container__title--main">
      {children}
    </h2>
  </section>
);

Page.Header.Action = () => (
  <div class="page-action">
    <Link href="group-create.html">
      <Icons.Add />
      Utwórz grupę
    </Link>
  </div>
);

Page.Body = ({ children }) => (
  <section class="section-container section-container--content">
    {children}
  </section>
);

Page.Errors = ({ children = [] }) => (
  <div>
    <section class="section-container section-container--title">
      <h2 class="section-container__title section-container__title--main">
        Wystąpiły błędy
      </h2>
      <pre>{JSON.stringify(children, null, 2)}</pre>
    </section>
  </div>
);

Page.Loader = props => <div>Trwa wczytywanie...</div>;
