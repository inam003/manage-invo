import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationButtons({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        className={
          currentPage === 1
            ? "text-gray-500 hover:bg-transparent hover:text-gray-700"
            : "bg-blue-500 text-white hover:bg-blue-400 hover:text-white"
        }
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-4" />
        Previous
      </Button>
      <div className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </div>
      <Button
        className={
          currentPage !== totalPages
            ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-white"
            : "text-gray-500 hover:bg-transparent hover:text-gray-700"
        }
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
