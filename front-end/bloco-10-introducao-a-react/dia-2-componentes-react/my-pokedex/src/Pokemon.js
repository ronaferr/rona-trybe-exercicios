import React from 'react'
import './Pokemon.css'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {name, type, image, averageWeight} = this.props.pokemon
        return (
            <div className='card'>
                <h1>{name}</h1>
                <h3>{type}</h3>
                <p>Average weight:{averageWeight.value} {averageWeight.measurementUnit}</p>
                <img src={image}></img>

            </div>
        )
    }
}
Pokemon.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({value: PropTypes.number, measurementUnit: PropTypes.string}).isRequired,
    }).isRequired
    
}
export default Pokemon