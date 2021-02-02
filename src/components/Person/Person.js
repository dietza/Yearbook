import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="person-card"> 
      <img src={ props.image } alt="cool bird"/>
      <h2>{ props.name }</h2>
      <h3>{ props.quote }</h3>
      <p>{ props.superlative }</p>
    </div>
  )
}

export default Person;
