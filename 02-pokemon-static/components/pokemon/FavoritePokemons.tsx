import React from 'react'
import { Card, Grid } from "@nextui-org/react"
import FavoriteCardPokemon from './FavoriteCardPokemon'

interface Props {
  pokemons: number[]
}

const FavoritePokemons = ({pokemons}:Props) => {
  return ( 
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                pokemons.map( (id:any) => (
                    <FavoriteCardPokemon key={ id } pokemonId={ id } />
                ))
            }
        </Grid.Container>
  )
}

export default FavoritePokemons