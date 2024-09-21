import { getMenuData } from "@/apiFunctions/menu";
import Table, { ColumnDef } from "@/components/ui/Table";
import { weeklyMenuType } from "@/lib/content";
import { readMenuData } from "@/lib/utils";
import Link from "next/link";

const columnDefs: ColumnDef<weeklyMenuType>[] = [
  {
    name: "Monday",
    field: "monday",
  },
  {
    name: "Tuesday",
    field: "tuesday",
  },
  {
    name: "Wednesday",
    field: "wednesday",
  },
  {
    name: "Thursday",
    field: "thursday",
  },
  {
    name: "Friday",
    field: "friday",
  },
  {
    name: "Saturday",
    field: "saturday",
  },
];

export default async function Home() {
  const data = await readMenuData();
  const weeklyMenuData = data?.data ?? [];
  console.log(weeklyMenuData);
  return (
    <main className="p-16">
      <Link
        href={"/admin-panel"}
        className="absolute right-10 top-10 font-bold font-mono"
      >
        Admin Panel {"->"}
      </Link>
      <h1 className="text-4xl font-fugaz">Mama&apos;s Meal</h1>
      <p className="text-zinc-400">Your Home's Meal</p>
      <section className="mt-5 text-center w-fit">
        <Table<weeklyMenuType>
          {...{ columnDefs, rowData: weeklyMenuData }}
          tableClassName="border border-foreground [&_th]:border [&_td]:border [&_*]:border-foreground [&_th]:p-2 [&_th]:bg-orange-400"
          cellsClassName="capitalize"
          commonCellRenderer={(cellData) => (
            <button className="hover:bg-zinc-200 w-full h-full p-5">
              {cellData}
            </button>
          )}
        />
      </section>
    </main>
  );
}
