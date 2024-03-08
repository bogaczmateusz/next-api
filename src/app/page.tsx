import { dehydrate } from "@tanstack/react-query"
import { queryPosts } from "@/hooks/usePosts"
import { POSTS_QUERY_KEY } from "@/reactQuery/keys/keys"
import getQueryClient from "@/utils/getQueryClient"
import { ReactQueryHydrate } from "@/components/ReactQueryHydrate/ReactQueryHydrate"
import ReduxTest from "@/components/ReduxTest/ReduxTest"
import PostsList from "@/components/PostsList/PostsList"

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery([POSTS_QUERY_KEY], queryPosts)
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className="block">
      <ReactQueryHydrate state={dehydratedState}>
        <PostsList />
        <ReduxTest />
      </ReactQueryHydrate>
    </main>
  )
}
