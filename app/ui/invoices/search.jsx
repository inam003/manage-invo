import React from "react";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="flex-1 ml-2">
      <Input id="search" type="search" placeholder="Search..." />
    </div>
  );
};

export default Search;
