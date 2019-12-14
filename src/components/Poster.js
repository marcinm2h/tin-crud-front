import React from "react";
import * as Icons from "./Icons";
import { Button } from "./Button";

export const Poster = ({ children, icon = null }) => (
  <div className="poster">
    {icon && <div className="poster__icon">{icon}</div>}
    {children}
  </div>
);

Poster.Success = ({ ...props }) => (
  <Poster icon={<Icons.ThumbUp />} {...props} />
);

Poster.Question = ({ ...props }) => (
  <Poster icon={<Icons.QuestionMark />} {...props} />
);

Poster.Subtitle = ({ children }) => (
  <div className="poster__tagline">{children}</div>
);

Poster.Title = ({ children }) => (
  <div className="poster__title">
    <h3>{children}</h3>
  </div>
);

Poster.Actions = ({ ...props }) => (
  <div className="poster__actions" {...props} />
);

Poster.Actions.Button = ({ ...props }) => <Button {...props} />;
