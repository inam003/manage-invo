import { Frown } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-[32rem]">
      <Frown className="size-12 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p className="text-gray-700">Could not find any customer.</p>
    </main>
  );
};

export default NotFound;
