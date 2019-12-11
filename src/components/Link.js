import React from "react";
import { Link as RouterLink } from "@reach/router";

export const Link = ({ href, ...props }) => <RouterLink to={href} {...props} />;
