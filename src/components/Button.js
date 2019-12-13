import React from "react";

export const Button = ({ onClick, ...props }) => (
  <button
    className="button"
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    {...props}
  />
);
