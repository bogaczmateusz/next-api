export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
}
