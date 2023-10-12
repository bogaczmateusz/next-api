"use client"
import { useDispatch, useSelector } from "react-redux"
import Planet from "@/types/planet.dto"
import usePlanets from "@/hooks/usePlanets"
import { selectTest, setTest } from "@/redux/slices/common.slice"

const PlanetList = () => {
  const dispatch = useDispatch()
  const test = useSelector(selectTest)

  const { planets, isLoading, isError } = usePlanets()

  console.log(test)

  if (isLoading) return <div>Loading planets...</div>
  if (isError) return <div>Error occured. Try again.</div>

  return (
    <>
      <button onClick={() => dispatch(setTest("Test is set."))}>
        Dispatch Redux
      </button>
      <ul>
        {planets?.map((planet: Planet, i: Number) => {
          return <li key={`${planet.name}-${i}`}>{planet.name}</li>
        })}
      </ul>
    </>
  )
}

export default PlanetList
