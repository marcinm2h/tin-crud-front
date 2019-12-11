import React from "react";

export const Pagination = () => (
  <div class="pagination">
    <div class="page-num page-num--active">
      <div>1</div>
    </div>
    <div class="page-num">
      <a href="#" class="page-num__link">
        2
      </a>
    </div>
    <div class="page-num">
      <a href="#" class="page-num__link">
        3
      </a>
    </div>
    <div class="page-num">
      <a href="#" class="page-num__link">
        4
      </a>
    </div>
    <div class="page-num">
      <a href="#" class="page-num__link">
        5
      </a>
    </div>
    <div class="page-num">
      <a href="#" class="page-num__link">
        6
      </a>
    </div>
    <div class="page-num page-num--elipsis">
      <div>...</div>
    </div>
    <div class="page-num page-num--last">
      <a href="#" class="page-num__link">
        12
      </a>
    </div>
    <div class="page-num page-num--next">
      <a href="#" class="page-num__link" title="następna strona">
        🡢
      </a>
    </div>
  </div>
);
