import React from 'react'
import data from './data'
import Pokemon from './Pokemon'
import './Pokemon.css'

class Pokedex extends React.Component {
    render() {
        return (
            <main className='containerPokemon'>
                {data.map((value) => {
                    return <Pokemon key={value.id} pokemon={value} />
                })}
            </main>
        )
    }
}

export default Pokedex