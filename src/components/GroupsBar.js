import React from "react";
import { Link } from "./Link";

export const GroupsBar = ({ children: items = GroupsBar.defaultItems }) => (
  <section className="section-container section-container--groups">
    <div className="groups">
      <ul className="groups__list">
        {items.map((item, idx) => (
          <GroupsBar.Item {...item} key={idx} />
        ))}
      </ul>
    </div>
  </section>
);

GroupsBar.Item = ({ name, url }) => (
  <li className="groups__item">
    <Link href={url}>#{name.toUpperCase()}</Link>
  </li>
);

GroupsBar.defaultItems = [
  { name: "programming", url: "group-programming.html" },
  { name: "gaming", url: "group-programming.html" },
  { name: "gym", url: "group-programming.html" },
  { name: "poland", url: "group-programming.html" },
  { name: "beer", url: "group-programming.html" },
  { name: "java", url: "group-programming.html" },
  { name: "ux", url: "group-programming.html" },
  { name: "design", url: "group-programming.html" },
  { name: "ios", url: "group-programming.html" },
  { name: "apple", url: "group-programming.html" },
  { name: "linux", url: "group-programming.html" }
];
