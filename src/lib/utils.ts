import clsx from "clsx";
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MealDataType } from "../../data/types";
import { promises } from "fs";
import path from "path";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function transformMeals(data: MealDataType) {
  const entries = Object.entries(data);
  const meal1: [string, string][] = [];
  const meal2: [string, string][] = [];
  entries.forEach((entry) => {
    if (entry[0].includes("1"))
      meal1.push([entry[0].toLowerCase().replace("-1", ""), entry[1]]);
    else if (entry[0].includes("2"))
      meal2.push([entry[0].toLowerCase().replace("-2", ""), entry[1]]);
  });

  return [Object.fromEntries(meal1), Object.fromEntries(meal2)];
}

export const readMenuData = async () => {
  try {
    // Define the file path
    const filePath = path.join(process.cwd(), "data", "file.json");

    // Read the file contents
    const data = await promises.readFile(filePath, "utf-8");

    // Return the JSON data
    return {
      error: false,
      message: "Data Read Successful!",
      data: JSON.parse(data),
    };
  } catch (error) {
    console.log(error);
    return { error: true, message: error };
  }
};
