import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ColumnDef<T> = {
  field: keyof T;
  name: string;
  cellRenderer?: (rowData: T) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
};

interface TableProps<T> {
  columnDefs: ColumnDef<T>[];
  rowData: T[];
  tableClassName?: string;
  cellsClassName?: string;
  commonCellRenderer?: (cellData: any) => ReactNode;
}

export default function Table<T extends Record<string, ReactNode>>({
  columnDefs,
  rowData,
  tableClassName,
  cellsClassName,
  commonCellRenderer,
}: TableProps<T>) {
  return (
    <div>
      <table className={cn(tableClassName, "")}>
        <thead>
          <tr>
            <th colSpan={6}>
              <h2 className="font-bold text-xl">This Week&apos;s Menu</h2>
            </th>
          </tr>
          <tr>
            {columnDefs.map((columnDef) => (
              <th className={cn(columnDef.headerClassName, "")}>
                {columnDef.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnDefs.map((columnDef) => (
                <td
                  key={columnDef.name}
                  className={cn(columnDef.cellClassName, cellsClassName, "")}
                >
                  {columnDef.cellRenderer?.(row) ??
                    commonCellRenderer?.(row[columnDef.field]) ??
                    row[columnDef.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
