import { cn } from "@/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className={cn(
        props.className,
        "w-full bg-zinc-100 p-1 px-3 outline-none capitalize font-medium"
      )}
    />
  );
}
