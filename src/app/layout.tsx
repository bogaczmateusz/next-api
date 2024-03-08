import React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { CombinedProviders } from "@/providers/CombinedProviders"

export const metadata: Metadata = {
  title: "My shop"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CombinedProviders>{children}</CombinedProviders>
      </body>
    </html>
  )
}
