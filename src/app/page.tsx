import { dehydrate } from "@tanstack/react-query"
import PlanetList from "@/components/PlanetList/PlanetList"
import { ReactQueryHydrate } from "@/components/ReactQueryHydrate/ReactQueryHydrate"
import { queryPlanets } from "@/hooks/usePlanets"
import { PLANETS_QUERY_KEY } from "@/reactQuery/keys/keys"
import getQueryClient from "@/utils/getQueryClient"

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery([PLANETS_QUERY_KEY], queryPlanets)
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className="block">
      <ReactQueryHydrate state={dehydratedState}>
        <PlanetList />
      </ReactQueryHydrate>
    </main>
  )
}
