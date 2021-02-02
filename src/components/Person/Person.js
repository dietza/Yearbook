import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="person-card"> 

      <img src={ props.image } style={{maxHeight:"15rem", maxWidth:"15rem"}} alt="bird"/>
      <h2>{ props.name }</h2>
      <h3>{ props.quote }</h3>
      <p>{ props.superlative }</p>
    </div>
  )
}

export default Person;
