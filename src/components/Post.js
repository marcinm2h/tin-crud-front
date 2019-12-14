import React from "react";
import * as Icons from "./Icons";
import { Poster } from "./Poster";
import { Link } from "./Link";
import { Vote } from "./Vote";

const formatVotes = ({ votesFor, votesAgainst }) => {
  const score = votesFor - votesAgainst;
  if (score === 0) {
    return `${score}`;
  }
  if (score > 0) {
    return `+${score}`;
  }
  return `-${score}`;
};

const formatCommentsNumber = commentsNumber =>
  commentsNumber === 0
    ? `Napisz pierwszy komentarz`
    : `${commentsNumber} komentarze`;

export const Post = ({
  id = 0,
  url = "#",
  description = "Lorem ipsum",
  votesFor = 0,
  votesAgainst = 0,
  comments = [],
  detailsLink = `/post/${id}`,
  editLink = `/post-edit/${id}`,
  removeLink = `/post-edit/${id}`,
  isLoggedIn,
  onVoteFor = () => {},
  onVoteAgainst = () => {}
}) => (
  <div className="post">
    {isLoggedIn && (
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
    <div className="post__thumb">
      <Link href={url} external>
        <Icons.Placeholder />
      </Link>
    </div>
    <div className="post__body post-body">
      <p className="post-body__excerpt">
        <Link href={detailsLink}>{description}</Link>
      </p>
      <div className="post-body__action-bar action-bar">
        <div className="action-bar__score-comments">
          <Link href={detailsLink}>
            {formatVotes({ votesFor, votesAgainst })}
          </Link>{" "}
          |{" "}
          <Link href={detailsLink}>
            {formatCommentsNumber(comments.length)}
          </Link>
        </div>
        <div className="admin action-bar__modify">
          <Link className="button" href={editLink}>
            edit
          </Link>
          <Link className="button" href={removeLink}>
            remove
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Post.Empty = () => (
  <Poster>
    <Poster.Title>Jeszcze nie ma tu zawartośći</Poster.Title>
    <Poster.Subtitle>
      Pomóż współtworzyć grupę i dodaj pierwszy post przyciskiem <Icons.Add />{" "}
      powyżej.
    </Poster.Subtitle>
  </Poster>
);
