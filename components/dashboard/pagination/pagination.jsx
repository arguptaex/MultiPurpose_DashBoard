// import React from 'react'
"use client";
import styles from "./pagination.module.css";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handlePageChange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <button
          className={styles.button}
          disabled={!hasPrev}
          onClick={() => handlePageChange("prev")}
        >
          Previous
        </button>
        <button
          className={styles.button}
          disabled={!hasNext}
          onClick={() => handlePageChange("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
