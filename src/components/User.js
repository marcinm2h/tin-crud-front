import React from "react";

export const User = ({
  name,
  login,
  registerDate
}) => {
  return (
    <div className="group">
      <div className="group__content group-content">
        <div className="group-content__title">
          {name} | @{login} | od: {registerDate}
        </div>
      </div>
    </div>
  );
};
