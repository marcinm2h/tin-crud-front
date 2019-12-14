import React, { useContext } from "react";

export const RoleContext = React.createContext({
  admin: false,
  user: false
});

export const useRole = () => useContext(RoleContext);
