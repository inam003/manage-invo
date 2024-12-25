import { Badge } from "@/components/ui/badge";
import { CheckIcon, ClockIcon } from "lucide-react";

export default function InvoiceStatus({ status }) {
  return (
    <>
      {status === "pending" && (
        <Badge variant="secondary" className="">
          Pending
          <ClockIcon className="ml-1 size-4 text-gray-500" />
        </Badge>
      )}
      {status === "paid" && (
        <Badge className="bg-green-500 hover:bg-green-600 text-white">
          Paid
          <CheckIcon className="ml-1 size-4 text-white" />
        </Badge>
      )}
    </>
  );
}
