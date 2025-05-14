Create an example for SWR:

- in `layout.tsx` you need to wrap everything in `SWRConfig` component
- in root `page.tsx` fetch list of all Pokemons from the Poke API using `swr`
- create a Pokemon details page in `app/pokemon/[id].tsx` file
- write a basic interface for it inside `model` directory

Start by only fetching Pokemon details in `PokemonDetails` component and then explain how it can work better by fetching them on server and then re-validating on client.
