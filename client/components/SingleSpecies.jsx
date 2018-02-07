import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function SingleSpecies ({singleSpecies, pets}) {
  return <div>
    <h1>{singleSpecies.name}s</h1>
    {pets.map(pet => <div>
      <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
    </div>)}
  </div>
}

const mapStateToProps = ({species, pets}, props) => ({
  singleSpecies: species.find(species => species.id == props.match.params.id),
  pets: pets.filter(pet => pet.species_id == props.match.params.id)
})

SingleSpecies.defaultProps = {
  singleSpecies: {
    name: 'NOT FOUND'
  }
}

export default connect(mapStateToProps)(SingleSpecies)
