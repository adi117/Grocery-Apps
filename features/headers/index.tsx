"use client";

import { useProducts } from "../product-card/context/product-context";
import CategoryFilter from "../headers/components/category-filter";
import SearchFilter from "./components/search-filter";
import Drawer from "../drawer/component/drawer";
import SearchFilterButton from "./components/search-filter-button";
import { useEffect, useState } from "react";
import SortForm from "./components/sort-form";

export default function Header() {

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="flex flex-col px-4">
      <div
        className="flex justify-between mt-14"
        onClick={() => setDrawerOpen(true)}
      >
        <h1 className="text-xl font-semibold">Vegetables</h1>
        <SearchFilterButton />
      </div>
      <CategoryFilter />

      <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        {isDrawerOpen
          ?
          <div className="flex flex-col h-screen px-6 gap-3 items-end">
            <button
            className="text-xl font-bold py-5"
            onClick={() => setDrawerOpen(false)}
            >
              x
            </button>
            <SearchFilter />
            <SortForm />

            <button
            className="flex justify-center bg-black text-white text-xl font-medium px-6 py-3 rounded-full w-full "
          >
            Apply
          </button>
          </div>

          : <></>}
      </Drawer>
    </main>
  )
};