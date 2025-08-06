import { Tag } from "../components";
import { images } from "./images";
import { ColumnDef } from "@tanstack/react-table";

export const tabs = ["Overview", "Transactions"];

export const navItems = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Transactions",
    link: "#",
  },
  {
    name: "Reports",
    link: "#",
  },
  {
    name: "Settings",
    link: "#",
  },
];

export const DashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10,
};

export const transactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: (info) => info.getValue(),
    size: 550
  },
  {
    accessorKey: "remark",
    header: "Remark",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "currency",
    header: "Currency",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "type",
    header: "Currency",
    cell: ({ row }) => (
      <Tag
        color={row.original.type === "Credit" ? "green" : "red"}
        text={row.original.type}
      />
    ),
  },
];

export const users = [
  {
    image: images.avatar3,
    name: "Ava",
  },
  {
    image: images.avatar4,
    name: "Liam",
  },
  {
    image: images.avatar2,
    name: "Noah",
  },
  {
    image: images.avatar1,
    name: "Olivia",
  },
  {
    image: images.avatar1,
    name: "Emma",
  },
  {
    image: images.avatar1,
    name: "Ava",
  },
  {
    image: images.avatar2,
    name: "Liam",
  },
  {
    image: images.avatar4,
    name: "Noah",
  },
  {
    image: images.avatar3,
    name: "Olivia",
  },
  {
    image: images.avatar1,
    name: "Emma",
  },
  {
    image: images.avatar3,
    name: "Olivia",
  },
  {
    image: images.avatar1,
    name: "Emma",
  },
];
