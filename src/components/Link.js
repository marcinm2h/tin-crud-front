import React from "react";
import { Link as RouterLink } from "@reach/router";

export const Link = ({ href, external = false, children, ...props }) =>
  external ? (
    <a href={href} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
