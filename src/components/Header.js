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

const Menu = ({ items = [] }) => (
  <nav clas="menu">
    <ul className="menu__list">
      {items.map((item, idx) => (
        <Menu.Item {...item} key={idx} />
      ))}
    </ul>
  </nav>
);

Menu.defaultItems = [
  { url: "/", title: "Strona główna", icon: Icons.Home },
  { url: "/group", title: "Grupy", icon: Icons.Groups },
  { url: "/post-create", title: "Dodaj post", icon: Icons.Add },
  { url: "/login", title: "Konto", icon: Icons.Account }
];

Menu.Item = ({ url, title, icon: Icon }) => (
  <li className="menu__item">
    <Link href={url} title={title}>
      <Icon />
    </Link>
  </li>
);

export const Header = ({ menuItems = Menu.defaultItems }) => {
  return (
    <header className="section-container section-container--header">
      <Logo />
      <Menu items={menuItems} />
    </header>
  );
};
