import React from "react";
import { Link } from "./Link";

export const Pagination = () => (
  <div className="pagination">
    <div className="page-num page-num--active">
      <div>1</div>
    </div>
    <div className="page-num">
      <Link href="#" className="page-num__link">
        2
      </Link>
    </div>
    <div className="page-num">
      <Link href="#" className="page-num__link">
        3
      </Link>
    </div>
    <div className="page-num">
      <Link href="#" className="page-num__link">
        4
      </Link>
    </div>
    <div className="page-num">
      <Link href="#" className="page-num__link">
        5
      </Link>
    </div>
    <div className="page-num">
      <Link href="#" className="page-num__link">
        6
      </Link>
    </div>
    <div className="page-num page-num--elipsis">
      <div>...</div>
    </div>
    <div className="page-num page-num--last">
      <Link href="#" className="page-num__link">
        12
      </Link>
    </div>
    <div className="page-num page-num--next">
      <Link href="#" className="page-num__link" title="następna strona">
        🡢
      </Link>
    </div>
  </div>
);
