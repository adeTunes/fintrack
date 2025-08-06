"use client";

import { StatsCard } from ".";
import {
  DashboardSummary,
  tabs,
  transactionColumns,
  transactions,
} from "../constants";
import { AppTable } from "./app-table";
import {
  SortingState,
  useReactTable,
  getSortedRowModel,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import React, { useState } from "react";

export const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: transactions,
    columns: transactionColumns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div className="flex border-b border-b-primary-dark/20">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`py-3 md:px-7 px-3 text-sm md:text-[15px] cursor-pointer font-medium ${
              tab === currentTab
                ? "text-primary border-b-[1.5px] border-b-primary-darker"
                : "text-primary-lightest/[62%] hover:opacity-50 duration-200"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
      {currentTab === "Overview" ? (
        <>
          <div className="py-3 flex flex-col gap-[18px]">
            <h3 className="text-xl font-bold">Summary</h3>
            <div className="grid grid-cols-2 max-[360px]:grid-cols-1 xl:grid-cols-4 gap-7">
              <StatsCard
                title="Total Balance"
                value={DashboardSummary.totalBalance}
                percentageChange={DashboardSummary.balanceChange}
                isAmount
              />
              <StatsCard
                title="Total Credits"
                value={DashboardSummary.totalCredits}
                percentageChange={DashboardSummary.creditsChange}
                isAmount
              />
              <StatsCard
                title="Total Debits"
                value={DashboardSummary.totalDebits}
                percentageChange={DashboardSummary.debitsChange}
                isAmount
              />
              <StatsCard
                title="Transactions"
                value={DashboardSummary.transactionCount}
                percentageChange={DashboardSummary.transactionChange}
              />
            </div>
          </div>
          <div className="py-7">
            <AppTable table={table} />
          </div>
        </>
      ) : (
        <div className="py-7">
          <AppTable table={table} />
        </div>
      )}
    </>
  );
};
