"use client"

import Link from "next/link"
import { PokemonProvider } from "./PokemonProvider"
import { Flex } from "@/styled-system/jsx"

const getIdFromPokemonUrl = (url: string) => {
  const id = url.split("/").filter(Boolean).pop()
  return id
}

export const PokemonList = () => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonProvider>
        {(pokemonList) => (
          <Flex flexDirection="column">
            {pokemonList.map((pokemon) => (
              <Link
                href={`/pokemon/${getIdFromPokemonUrl(pokemon.url)}`}
                key={pokemon.name}
              >
                <li>{pokemon.name}</li>
              </Link>
            ))}
          </Flex>
        )}
      </PokemonProvider>
    </div>
  )
}
