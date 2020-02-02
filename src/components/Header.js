import React from "react";
import * as Icons from "./Icons";
import { Link } from "./Link";
import { useRole } from "./RoleContext";
import logo from "../assets/logo.png"

const Logo = props => (
  <div className="logo">
    <Link href="/">
      <h1>
        <img
          // src="https://via.placeholder.com/125x45/253341"
          src={logo}
          width="140"
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
      <span>{title}</span>
    </Link>
  </li>
);

export const Header = ({ loggedIn }) => {
  const role = useRole();
  return (
    <header className="section-container section-container--header">
      <Logo />
      <Menu>
        <Menu.Item url="/" title="Strona główna">
          <Icons.Home />
        </Menu.Item>
        <Menu.Item url="/groups" title="Grupy">
          <Icons.Groups />
        </Menu.Item>
        {role.user && !role.admin && (
          <Menu.Item url="/post-create" title="Dodaj post">
            <Icons.Add />
          </Menu.Item>
        )}
        {role.user && !role.admin && (
          <Menu.Item url="/group-create" title="Utwórz grupę">
            <Icons.Add />
          </Menu.Item>
        )}
        {loggedIn ? (
          <Menu.Item url="/profile" title="Profil">
            <Icons.Profile />
          </Menu.Item>
        ) : (
            <Menu.Item url="/login" title="Zaloguj się">
              <Icons.Account />
            </Menu.Item>
          )}
      </Menu>
    </header>
  );
};
