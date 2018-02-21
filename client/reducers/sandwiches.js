
// const initialState= {
//     currentSandwich: [],
//     showPreviousSandwiches: false,
//     savedSandwiches:[]
// }

export default function (state = [], action) {
  console.log('hideyhho')
  switch (action.type) {
    case 'ADD_INGREDIENT':
     console.log('eyey')
      return [...state, action.ingredient]
    // case 'REMOVE_INGREDIENT':
      // return 
    case 'NEW_SANDWICH':
      return //same as above?


    

  }
}