import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { PLANETS_QUERY_KEY } from "@/reactQuery/keys/keys"
import Planet from "@/types/planet.dto"
import { apiUrl } from "@/utils/constants"

const usePlanets = () => {
  const { data, isLoading, isError } = useQuery<Planet[]>({
    queryKey: [PLANETS_QUERY_KEY],
    queryFn: queryPlanets,
    enabled: true
  })

  return {
    planets: data,
    isLoading,
    isError
  }
}

export const queryPlanets = async () => {
  const { data } = await axios.get(`${apiUrl}/planets/`)
  return data.results
}

export default usePlanets
