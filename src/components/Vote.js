import React from "react";
import * as Icons from "./Icons";

export const Vote = ({ onClick, className, ...props }) => (
  <button
    className={`vote ${className}`}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    {...props}
  />
);

Vote.For = ({ ...props }) => (
  <Vote className="vote__for" {...props}>
    <Icons.ArrowUp />
  </Vote>
);

Vote.Against = ({ ...props }) => (
  <Vote className="vote__against" {...props}>
    <Icons.ArrowDown />
  </Vote>
);
