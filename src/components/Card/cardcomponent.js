import React from "react";
import './original.css'


export const Card = props => (

    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`} />
      <h1>{props.monster.name}</h1>
    </div>

)