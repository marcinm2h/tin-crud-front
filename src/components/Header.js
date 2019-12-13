import React from "react";
import * as Icons from "./Icons";
import { Link } from "./Link";

const Logo = props => (
  <div className="logo">
    <Link href="/">
      <h1>
        <img
          src="https://via.placeholder.com/125x45/253341"
          alt="Logo strony"
        />
      </h1>
    </Link>
  </div>
);

const Menu = ({ children }) => (
  <nav clas="menu">
    <ul className="menu__list">{children}</ul>
  </nav>
);

Menu.Item = ({ url, title, children }) => (
  <li className="menu__item">
    <Link href={url} title={title}>
      {children}
    </Link>
  </li>
);

export const Header = ({ loggedIn }) => {
  return (
    <header className="section-container section-container--header">
      <Logo />
      <Menu>
        <Menu.Item url="/" title="Strona główna">
          <Icons.Home />
        </Menu.Item>
        <Menu.Item url="/group" title="Grupy">
          <Icons.Groups />
        </Menu.Item>
        <Menu.Item url="/post-create" title="Dodaj post">
          <Icons.Add />
        </Menu.Item>
        {loggedIn ? (
          <Menu.Item url="/profile" title="Profil">
            <Icons.Profile />
          </Menu.Item>
        ) : (
          <Menu.Item url="/login" title="Konto">
            <Icons.Account />
          </Menu.Item>
        )}
      </Menu>
    </header>
  );
};
