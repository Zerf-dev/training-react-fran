import { Archivo } from "@next/font/google";
import { Rubik } from "@next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const fontVariables = [archivo, rubik].map((font) => font.variable).join(" ");

export default fontVariables;
