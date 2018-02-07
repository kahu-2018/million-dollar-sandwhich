import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function pet ({pet}) {
  return <div>
    <h1>{pet.name}</h1>
    <Link to={`/species/${pet.species_id}`}>{pet.species}</Link>
  </div>
}

const mapStateToProps = ({pets}, props) => ({
  pet: pets.find(pet => pet.id == props.match.params.id),
})

pet.defaultProps = {
  pet: {
    name: 'NOT FOUND'
  }
}

export default connect(mapStateToProps)(pet)
