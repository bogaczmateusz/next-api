"use client"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { queryClientOptions } from "@/utils/constants"
import { ReduxProvider } from "./ReduxProvider"

export const ReactQueryProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientOptions)
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>{children}</ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
