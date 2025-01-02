import { clsx } from "clsx";
import { nanoid } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generateSlug = (invoicePurpose) => {
  const formattedPurpose = invoicePurpose.toLowerCase().replace(/\s+/g, "-");
  const uniqueId = nanoid();
  const timestamp = Date.now().toString(36);
  return `${formattedPurpose}-${timestamp}-${uniqueId}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const PaginationButtons = () => {};


