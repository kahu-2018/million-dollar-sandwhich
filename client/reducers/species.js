function species (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SPECIES':
      return [...action.species]
    default:
      return state
  }
}

export default species
