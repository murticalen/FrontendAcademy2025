"use client"

import useSWR from "swr"

interface Pokemon {
  name: string
  url: string
}

interface PokemonResponse {
  results: Pokemon[]
}

interface PokemonProviderProps {
  children: (
    pokemonList: Pokemon[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const { data, isLoading, error } = useSWR<PokemonResponse>(
    "https://pokeapi.co/api/v2/pokemon/"
  )

  return children(data?.results || [], isLoading, error)
}
