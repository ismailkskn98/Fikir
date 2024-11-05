"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const handleReset = () => {
    const form: HTMLFormElement | null = document.querySelector(".search-from");

    if (form) {
      form.reset();
    }
  };
  return (
    <button type="reset" onClick={handleReset}>
      <Link href={"/"} className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
