import Image from "next/image";
import { Inter } from "@next/font/google";
import Journy from "../Components/Journy/index";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        style={{
          background: "linear-gradient(90deg, #00001C 0%, #683F99 61.25%) ",
        }}
        className="min-h-screen"
      >
        <Journy />
      </main>
    </>
  );
}
