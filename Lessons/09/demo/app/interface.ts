export interface Pokemon {
  name: string
  url: string
}

export interface PokemonResponse {
  results: Pokemon[]
}

export interface PokemonDetailsResponse {
  name: string
  height: number
}
