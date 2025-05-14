import { PokemonDetailsResponse } from "@/app/interface"
import { PokemonDetails } from "./PokemonDetails"

export default async function PokemonDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = (await response.json()) as PokemonDetailsResponse

  return <PokemonDetails name={data.name} height={data.height} />
}
