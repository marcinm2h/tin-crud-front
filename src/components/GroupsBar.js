import React from "react";
import { Link } from "./Link";

export const GroupsBar = ({ children: items = GroupsBar.defaultItems }) => (
  <section className="section-container section-container--groups">
    <div className="groups">
      <ul className="groups__list">
        {items.map(item => (
          <GroupsBar.Item {...item} key={item.id} />
        ))}
      </ul>
    </div>
  </section>
);

GroupsBar.Item = ({ id, tag, url = `/group/${id}` }) => (
  <li className="groups__item">
    <Link href={url}>#{tag.toUpperCase()}</Link>
  </li>
);

GroupsBar.defaultItems = [
  { id: 0, tag: "programming" },
  { id: 1, tag: "gaming" },
  { id: 2, tag: "gym" },
  { id: 3, tag: "poland" },
  { id: 4, tag: "beer" },
  { id: 5, tag: "java" },
  { id: 6, tag: "ux" },
  { id: 7, tag: "design" },
  { id: 8, tag: "ios" },
  { id: 9, tag: "apple" },
  { id: 10, tag: "linux" }
];
