import React from 'react'
import { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Este es el dashboard de mi proyecto de Next.js 13 con TypeScript y TailwindCSS",
}
export default function Dashboard() {

    return (
        <div className="flex items-center px-10 py-5 m-4 bg-white h-full rounded-lg shadow-md dark:bg-black ">

            <div>
                <Link href="/">Volver al Home</Link>
            </div>
            <div className="flex flex-1 justify-center">
                <h1>Dashboard</h1>
            </div>
            <div className="flex flex-1 justify-end">
                <Link href="/miCuenta">Iniciar Sesión</Link>
            </div>
            
        </div>
    )
}