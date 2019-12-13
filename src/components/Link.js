import React from "react";
import { Link as RouterLink } from "@reach/router";

export const Link = ({ href, external = false, ...props }) =>
  external ? (
    <a href={href} {...props} target="_blank" />
  ) : (
    <RouterLink to={href} {...props} />
  );
