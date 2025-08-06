import { Avatar, Dashboard, Tag } from "@/src/components";
import { Header } from "@/src/components/header";
import { Sidebar } from "@/src/components/sidebar";
import { users } from "@/src/constants";
import { ArrowDown, More } from "@/src/icons";

export default function Home() {
  const NAMES_DISPLAYED = 3;

  return (
    <main className="flex px-12 flex-col font-sans overflow-auto h-screen">
      <Header />
      <section className="flex flex-1 overflow-auto gap-12">
        <Sidebar />
        <section className="flex-1 flex flex-col overflow-auto">
          <div className="flex flex-col py-7 gap-7">
            <div className="flex items-center flex-wrap justify-between">
              <div className="flex items-center gap-4">
                <div className="flex flex-wrap cursor-pointer hover:opacity-80 duration-200 items-center gap-1">
                  <h1 className="md:text-[34px] text-xl font-bold">Wallet Ledger</h1>
                  <ArrowDown />
                </div>
                <Tag color="green" text="Active" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <button className="bg-primary-darker hover:opacity-80 duration-200 py-2 px-[18px] rounded-2xl text-[15px] font-medium">
                  Share
                </button>
                <button
                  title="More"
                  className="p-2 w-fit h-fit hover:opacity-60 duration-200 border border-primary-dark/20 rounded-full"
                >
                  <More />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center">
                {users.slice(0, 4).map((user, index) => (
                  <Avatar
                    key={index}
                    src={user.image}
                    size={40}
                    isGrouped
                    isFirst={index === 0}
                    zIndex={users.length - index}
                  />
                ))}
              </div>
              <div className="flex text-[15px] text-primary-lightest/[62%] items-center gap-1">
                <span>
                  {users.length > NAMES_DISPLAYED
                    ? `${users
                        .slice(0, NAMES_DISPLAYED)
                        .map((u) => u.name)
                        .join(", ")}`
                    : users.map((u) => u.name).join(", ")}
                </span>
                <span>
                  {users.length > NAMES_DISPLAYED
                    ? ` +${users.length - NAMES_DISPLAYED} others`
                    : ""}
                </span>
              </div>
            </div>
            <Dashboard />
          </div>
        </section>
      </section>
    </main>
  );
}
