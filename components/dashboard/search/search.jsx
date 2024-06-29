// import React from "react";

"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import "./search.css";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params}`);
  }, 500);

  return (
    <div className="search-bar">
      <div className="container search-container">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className="input"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
