import React from "react"

import { ReactQueryProvider } from "./ReactQueryProvider"
import { ReduxProvider } from "./ReduxProvider"

export function CombinedProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  )
}
