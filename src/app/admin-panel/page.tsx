import { editMenuAction } from "@/actions/admin-panel";
import Input from "@/components/ui/Input";
import { readMenuData } from "@/lib/utils";
import Link from "next/link";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default async function Page() {
  const data = await readMenuData();
  const weeklyMenuData = data?.data ?? [];

  return (
    <main className="bg-zinc-200 h-full">
      <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto text-left">
        <Link href={"/"} className="font-bold">
          {"<-"} Home
        </Link>
      </div>
      <form
        action={editMenuAction}
        className="py-6 sm:px-0 px-6 grid grid-cols-2 md:grid-cols-3 w-full sm:w-2/3 lg:w-1/2 mx-auto gap-5"
      >
        <h1 className="text-2xl col-span-full font-fugaz">Weekly Meal Menu</h1>
        {days.map((day) => (
          <div
            key={day}
            className="rounded-xl overflow-hidden border border-zinc-300 w-full"
          >
            <b className="uppercase bg-purple-200 w-full text-foreground inline-block p-2">
              {day}
            </b>
            <div className="">
              <div className="flex flex-col">
                <Input
                  name={`${day}-1`}
                  placeholder="Meal 1"
                  defaultValue={weeklyMenuData[0][day]}
                />
              </div>
              <div className="flex flex-col">
                <Input
                  name={`${day}-2`}
                  placeholder="Meal 2"
                  className="border-t border-zinc-300"
                  defaultValue={weeklyMenuData[1][day]}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-fit col-span-full shadow-lg bg-orange-300 border border-orange-500 text-orange-900 p-1 rounded-xl px-4 ml-auto font-bold"
        >
          SAVE
        </button>
      </form>
    </main>
  );
}
