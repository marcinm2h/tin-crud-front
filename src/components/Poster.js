import React from "react";
import * as Icons from "./Icons";

export const Poster = ({ children, icon = null }) => (
  <div class="poster">
    {icon && <div class="poster__icon">{icon}</div>}
    {children}
  </div>
);

Poster.Success = ({ ...props }) => (
  <Poster icon={<Icons.ThumbUp />} {...props} />
);

Poster.Subtitle = ({ children }) => (
  <div class="poster__tagline">{children}</div>
);

Poster.Title = ({ children }) => (
  <div class="poster__title">
    <h3>{children}</h3>
  </div>
);
