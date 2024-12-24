import React from "react";
import Cards from "../ui/main/cards";
import MonthlyRevenueChart from "../ui/main/chart";
import LatestInvoices from "../ui/main/latest-invoices";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div>
        <Cards />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div>
          <MonthlyRevenueChart />
        </div>
        <div>
          <LatestInvoices />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
