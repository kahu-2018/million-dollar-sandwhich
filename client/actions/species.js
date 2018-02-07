import request from 'superagent'

export function receiveSpecies (species) {
  return {
    type: 'RECEIVE_SPECIES',
    species
  }
}

export function getSpecies() {
  return dispatch => {
    request
      .get('/api/species')
      .end((err, res) => {
        if (err) console.log(err)
        else {
          dispatch(receiveSpecies(res.body))
        }
      })
  }
}
