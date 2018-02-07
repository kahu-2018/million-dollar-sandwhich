import request from 'superagent'

export const receivePets = (pets) => {
  return {
    type: 'RECEIVE_PETS',
    pets
  }
}

export function getPets () {
  return (dispatch) => {
    request
      .get(`/api/pets`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePets(res.body))
      })
  }
}
