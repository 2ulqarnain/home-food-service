import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // Define the file path
    const filePath = path.join(process.cwd(), "data", "file.json");

    // Read the file contents
    const data = await fs.readFile(filePath, "utf-8");

    // Return the JSON data
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error reading data." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
