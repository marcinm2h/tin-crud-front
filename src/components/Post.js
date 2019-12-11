import React from "react";
import * as Icons from "./Icons";
import { Link } from "./Link";

export const Post = props => (
  <div className="post">
    <div className="votes post__votes">
      <div className="votes__arrow">
        <Link href="#">
          <Icons.ArrowUp />
        </Link>
      </div>
      <div className="votes__arrow">
        <Link href="#">
          <Icons.ArrowDown />
        </Link>
      </div>
    </div>
    <div className="post__thumb">
      <Link href="post.html">
        <img
          src="https://via.placeholder.com/130x70/253341"
          alt="Logo strony"
        />
      </Link>
    </div>
    <div className="post__body post-body">
      <p className="post-body__excerpt">
        <Link href="post.html">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Link>
      </p>
      <div className="post-body__action-bar action-bar">
        <div className="action-bar__score-comments">
          <Link href="post.html">+123</Link> | <Link href="post.html">32 komentarze</Link>
        </div>
        <div className="admin action-bar__modify">
          <Link className="button" href="post-edit.html">
            edit
          </Link>
          <Link className="button" href="post-remove-question.html">
            remove
          </Link>
        </div>
      </div>
    </div>
  </div>
);
