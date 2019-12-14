import React from "react";
import { Vote } from "./Vote";
import * as Icons from "./Icons";
import { useRole } from "./RoleContext";

const formatTimestamp = timestamp => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("pl").format(date);
};

export const Comment = ({
  content,
  author,
  creationDate,
  onVoteAgainst = () => {},
  onVoteFor = () => {}
}) => {
  const role = useRole();
  return (
    <section className="section-container section-container--comments">
      <div className="comment">
        {role.user && (
          <div className="votes post__votes">
            <div className="votes__arrow">
              <Vote.For onClick={onVoteFor}>
                <Icons.ArrowUp />
              </Vote.For>
            </div>
            <div className="votes__arrow">
              <Vote.Against onClick={onVoteAgainst}>
                <Icons.ArrowDown />
              </Vote.Against>
            </div>
          </div>
        )}
        <div className="comment__body comment-body">
          <p className="comment-body__text">{content}</p>
          <div className="comment-body__action-bar action-bar">
            <div className="action-bar__score-comments">
              @{author} | +3 | {formatTimestamp(creationDate)}
            </div>
            {role.admin && (
              <div className="action-bar__modify">
                <button className="button">edit</button>
                <button className="button">remove</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
