import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="person-card"> 
      <img src={ props.image } alt="cool bird"/>
      <h2>{ props.name }</h2>
      <p>"{ props.quote }"</p>
      <h3>{ props.superlative }</h3>
    </div>
  )
}

export default Person;
