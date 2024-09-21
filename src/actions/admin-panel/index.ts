"use server";

import { transformMeals } from "@/lib/utils";
import { promises as fs } from "fs";
import path from "path";
import { MealDataType } from "../../../data/types";

export const editMenuAction = async (formdata: FormData) => {
  try {
    const dataEntries = Array.from(formdata.entries()).filter(
      (entry) => !entry[0].includes("$")
    );

    const dataObj = Object.fromEntries(dataEntries) as any;

    const filePath = path.join(process.cwd(), "data", "file.json"); // Define the file path

    // Write the data to a JSON file
    await fs.writeFile(
      filePath,
      JSON.stringify(transformMeals(dataObj), null, 2)
    );

    console.log("Data saved successfully!");
    return { error: false, message: "Data saved successfully!" };
  } catch (error) {
    console.error(error);
    return { error: true, message: "Data Not Saved!!" };
  }
};
