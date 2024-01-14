"use client";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="mt-52">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Al-Quran</h1>
                <h2 className="text-3xl font-semibold mt-2">Website</h2>
                <h3 className="text-lg mt-3 font-normal">
                    Sebuah website untuk membaca Al-Quran!
                </h3>
                <Link href="/read">
                    <button className="btn mt-5">Read Al-Qur&apos;an</button>
                </Link>
            </div>
        </main>
    );
}
