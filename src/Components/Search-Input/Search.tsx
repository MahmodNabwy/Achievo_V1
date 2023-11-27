import React from "react";
import { Input } from "../../@/components/ui/input";
import "./Styles/Style.css";
const Search = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="search"
        className="w-[350px] input-search"
      />
    </div>
  );
};
export default Search;
