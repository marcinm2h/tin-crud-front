import React from "react";
import { Link } from "./Link";
import * as Icons from "./Icons";
import { useRole } from "./RoleContext";

const formatTag = tag => `#${tag.toUpperCase()}`;

export const Group = ({
  id,
  name,
  description,
  tag,
  joined = false,
  groupUrl = `/group/${id}`,
  joinUrl = `/group-join/${id}`,
  leaveUrl = `/group-leave/${id}`,
  removeUrl = `/group-remove/${id}`,
  editUrl = `/group-edit/${id}`,
  usersUrl = `/group-users/${id}`
}) => {
  const role = useRole();
  return (
    <div className="group">
      {role.user && joined ? <Group.Leave url={leaveUrl} /> : <Group.Join url={joinUrl} />}
      <div className="group__content group-content">
        <div className="group-content__title">
          <Link href={groupUrl}>{name} {formatTag(tag)}</Link>
        </div>
        <div className="group-content__tagline">{description}</div>
      </div>
      {role.admin && (
        <Group.AdminActions
          removeUrl={removeUrl}
          editUrl={editUrl}
          usersUrl={usersUrl}
        />
      )}
    </div>
  );
};

const GroupJoin = ({ url }) => {
  const role = useRole();
  return (
    role.user && !role.admin && (
      <div className="group__action group-action">
        <div className="group-action__icon">
          <Link href={url}>
            <Icons.Add />
          </Link>
        </div>
        <div className="group-action__text">
          <Link href={url}>dołącz</Link>
        </div>
      </div>
    )
  );
};
const GroupLeave = ({ url }) => {
  const role = useRole();
  return (
    role.user && !role.admin && (
      <div className="group__action group-action">
        <div className="group-action__icon">
          <Link href={url}>
            <Icons.Remove />
          </Link>
        </div>
        <div className="group-action__text">
          <Link href={url}>opuść</Link>
        </div>
      </div>
    )
  );
};

Group.Join = GroupJoin;

Group.Leave = GroupLeave;

Group.AdminActions = ({ removeUrl, editUrl, usersUrl }) => (
  <div className="group__admin-actions group-admin-actions">
    <Link className="button" href={removeUrl}>
      remove
    </Link>
    <Link className="button" href={editUrl}>
      edit
    </Link>
    <Link className="button" href={usersUrl}>
      users
    </Link>
  </div>
);
