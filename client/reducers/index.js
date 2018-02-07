import {combineReducers} from 'redux'

import species from './species'
import pets from './pets'

export default combineReducers({
  species,
  pets
})
