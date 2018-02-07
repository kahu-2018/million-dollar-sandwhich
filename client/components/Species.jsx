import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Species ({species}) {
  return <div>
    <h1>Species</h1>
    {species.map(species => <div>
      <Link to={`/species/${species.id}`}>{species.name}</Link>
    </div>)}
  </div>
}

const mapStateToProps = ({species}) => ({
  species
})

export default connect(mapStateToProps)(Species)
