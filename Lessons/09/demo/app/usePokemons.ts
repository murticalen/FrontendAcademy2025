"use client"

import useSWR from "swr"
import { PokemonResponse } from "./interface"

export const usePokemons = () => {
  const { data, isLoading, error } = useSWR<PokemonResponse>(
    "https://pokeapi.co/api/v2/pokemon/"
  )

  return {
    data: data ? data.results : [],
    isLoading,
    error,
  }
}
