import React from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: "Mi Cuenta",
    description: "Esta es la página de mi cuenta en mi proyecto de Next.js 13 con TypeScript y TailwindCSS",
}

export default function MiCuenta() {
  return (
    <div>

        <h1 className="flex flex-1 justify-center">
            Mi Cuenta
        </h1>

    </div>
  )
}
