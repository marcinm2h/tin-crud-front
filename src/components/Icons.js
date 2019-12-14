import React from "react";

export const Home = () => <i className="material-icons">home</i>;
export const Groups = () => <i className="material-icons">people</i>;
export const Add = () => <i className="material-icons">add_circle_outline</i>;
export const Account = () => <i className="material-icons">account_circle</i>;
export const Profile = () => <i className="material-icons">person_outline</i>;
export const ThumbUp = () => <i className="material-icons">thumb_up</i>;
export const ArrowUp = () => (
  <i className="material-icons">keyboard_arrow_up</i>
);
export const ArrowDown = () => (
  <i className="material-icons">keyboard_arrow_down</i>
);
export const Placeholder = ({ width = 130, height = 70 }) => (
  <img
    src={`https://via.placeholder.com/${width}x${height}/253341`}
    alt="placeholder"
  />
);
