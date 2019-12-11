import React from "react";
import * as Icons from "./Icons";

const Logo = props => (
  <div className="logo">
    <a href="/">
      <h1>
        <img
          src="https://via.placeholder.com/125x45/253341"
          alt="Logo strony"
        />
      </h1>
    </a>
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
  { url: "/groups", title: "Grupy", icon: Icons.Groups },
  { url: "/post-create", title: "Dodaj post", icon: Icons.Add },
  { url: "/login", title: "Konto", icon: Icons.Account }
];

Menu.Item = ({ url, title, icon: Icon }) => (
  <li className="menu__item">
    <a href={url} title={title}>
      <Icon />
    </a>
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
