"use client"

import Planet from "@/types/planet.dto"
import usePlanets from "@/hooks/usePlanets"

const PlanetList = () => {
  const { planets, isLoading, isError } = usePlanets()

  if (isLoading) return <div>Loading planets...</div>
  if (isError) return <div>Error occured. Try again.</div>

  return (
    <ul>
      {planets?.map((planet: Planet, i: Number) => {
        return <li key={`${planet.name}-${i}`}>{planet.name}</li>
      })}
    </ul>
  )
}

export default PlanetList
