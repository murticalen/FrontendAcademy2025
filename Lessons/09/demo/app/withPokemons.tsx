"use client"

import useSWR from "swr"
import { Pokemon, PokemonResponse } from "./interface"

interface WithPokemonsProps {
  pokemonList: Pokemon[]
}

export function WithPokemons<T extends WithPokemonsProps>(
  Component: React.ComponentType<T>
) {
  function ComponentWithPokemons(props: Omit<T, keyof WithPokemonsProps>) {
    const { data } = useSWR<PokemonResponse>(
      "https://pokeapi.co/api/v2/pokemon/"
    )

    return (
      <Component {...(props as T)} pokemonList={data ? data.results : []} />
    )
  }

  return ComponentWithPokemons
}

WithPokemons.displayName = "WithPokemons"
