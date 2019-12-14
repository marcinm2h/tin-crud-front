import React from "react";
import * as Icons from "./Icons";

export const Poster = ({ children, icon = null }) => (
  <div className="poster">
    {icon && <div className="poster__icon">{icon}</div>}
    {children}
  </div>
);

Poster.Success = ({ ...props }) => (
  <Poster icon={<Icons.ThumbUp />} {...props} />
);

Poster.Subtitle = ({ children }) => (
  <div className="poster__tagline">{children}</div>
);

Poster.Title = ({ children }) => (
  <div className="poster__title">
    <h3>{children}</h3>
  </div>
);
