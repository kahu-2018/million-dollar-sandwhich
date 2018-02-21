import React from 'react'

function Builder(props){ 
  return (
    
 

  <div>
    <ul> 
    {props.ingredients.map(ingredient => {
      return (<li> <button value={ingredient} onClick={(e) =>props.handleClick(e)}> {ingredient.name}</button> </li>)

    })}
    </ul>
  </div>
  )
}

export default Builder