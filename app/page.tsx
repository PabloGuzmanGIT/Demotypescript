import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Este es el landing page de mi proyecto de Next.js 13 con TypeScript y TailwindCSS",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1> Buenas tardes</h1>

      </main>
    </div>
  );
}
 