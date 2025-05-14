import { ElementRef } from "./ElementRef"
import { PokemonList } from "./PokemonList"
import { ToastPortal } from "./ToastPortal"

export default async function Home() {
  return (
    <div>
      <PokemonList />
      <ElementRef />
      <ToastPortal />
    </div>
  )
}
