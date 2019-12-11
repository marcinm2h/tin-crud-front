import React from "react";
import * as Icons from "./Icons";

export const Post = props => (
  <div class="post">
    <div class="votes post__votes">
      <div class="votes__arrow">
        <a href="#">
          <Icons.ArrowUp />
        </a>
      </div>
      <div class="votes__arrow">
        <a href="#">
          <Icons.ArrowDown />
        </a>
      </div>
    </div>
    <div class="post__thumb">
      <a href="post.html">
        <img
          src="https://via.placeholder.com/130x70/253341"
          alt="Logo strony"
        />
      </a>
    </div>
    <div class="post__body post-body">
      <p class="post-body__excerpt">
        <a href="post.html">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </a>
      </p>
      <div class="post-body__action-bar action-bar">
        <div class="action-bar__score-comments">
          <a href="post.html">+123</a> | <a href="post.html">32 komentarze</a>
        </div>
        <div class="admin action-bar__modify">
          <a class="button" href="post-edit.html">
            edit
          </a>
          <a class="button" href="post-remove-question.html">
            remove
          </a>
        </div>
      </div>
    </div>
  </div>
);
