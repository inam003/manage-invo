"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationButtons() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <div className="flex items-center justify-center p-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className={`hover:bg-transparent ${
                currentPage === 1
                  ? "text-gray-300 pointer-events-none"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === 1}
              className={
                currentPage === 1
                  ? "bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
                  : "text-gray-500 hover:bg-transparent hover:text-gray-700"
              }
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === 2}
              className={
                currentPage === 2
                  ? "bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
                  : "text-gray-500 hover:bg-transparent hover:text-gray-700"
              }
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className={`hover:bg-transparent ${
                currentPage === totalPages
                  ? "text-gray-300 pointer-events-none"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
