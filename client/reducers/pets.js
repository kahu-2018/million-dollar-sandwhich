function pets (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PETS':
      return [...action.pets]
    default:
      return state
  }
}

export default pets
