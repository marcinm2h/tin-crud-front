import React from "react";

export const User = ({
  name,
}) => {
  return (
    <div className="group">
      <div className="group__content group-content">
        <div className="group-content__title">
          {name}
        </div>
      </div>
    </div>
  );
};
