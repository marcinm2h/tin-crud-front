import React from "react";

export const GroupsBar = ({ items = GroupsBar.defaultItems }) => (
  <section class="section-container section-container--groups">
    <div class="groups">
      <ul class="groups__list">
        {items.map((item, idx) => (
          <GroupsBar.Item {...item} key={idx} />
        ))}
      </ul>
    </div>
  </section>
);

GroupsBar.Item = ({ name, url }) => (
  <li class="groups__item">
    <a href={url}>#{name.toUpperCase()}</a>
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
