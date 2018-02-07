import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

function Pets ({pets}) {
  return <div>
    <h1>Pets</h1>
    {pets.map(pet => <div>
      <Link to={`/pet/${pet.id}`}>{pet.name}</Link>
    </div>)}
  </div>
}


const mapStateToProps = (state) => {
  return {pets: state.pets}

}

export default connect(mapStateToProps)(Pets)
