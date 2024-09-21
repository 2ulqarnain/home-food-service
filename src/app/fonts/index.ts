import { Fugaz_One, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fugaz = Fugaz_One({
  subsets: ["latin"],
  variable: "--font-fugaz",
  weight: ["400"],
});
