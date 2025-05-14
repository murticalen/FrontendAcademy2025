"use client"

import { PokemonDetailsResponse } from "@/app/interface"
import useSWR from "swr"

export const PokemonDetails = ({ name, height }: PokemonDetailsResponse) => {
  const { data, isLoading } = useSWR<PokemonDetailsResponse>(
    `https://pokeapi.co/api/v2/pokemon/1`,
    { fallbackData: { name, height } }
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>Height: {data?.height}</p>
    </div>
  )
}
