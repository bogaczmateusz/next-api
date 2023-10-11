import "./globals.css"
import type { Metadata } from "next"
import { ReactQueryProvider } from "@/providers/ReactQueryProvider"

export const metadata: Metadata = {
  title: "Star Wars"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
