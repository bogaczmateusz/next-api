import { dehydrate } from "@tanstack/react-query"
import { queryPlanets } from "@/hooks/usePlanets"
import { PLANETS_QUERY_KEY } from "@/reactQuery/keys/keys"
import getQueryClient from "@/utils/getQueryClient"
import { ReactQueryHydrate } from "@/components/ReactQueryHydrate/ReactQueryHydrate"
import ReduxTest from "@/components/ReduxTest/ReduxTest"
import PlanetList from "@/components/PlanetList/PlanetList"

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery([PLANETS_QUERY_KEY], queryPlanets)
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className="block">
      <ReactQueryHydrate state={dehydratedState}>
        <PlanetList />
        <ReduxTest />
      </ReactQueryHydrate>
    </main>
  )
}
