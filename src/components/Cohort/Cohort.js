import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({ staff }) => {

  const profilesOnDisplay = staff.map(person => {
    
    // return <Person person={ person }/>
    
    return <Person
      image={ person.photo }
      name={ person.name }
      quote={ person.quote }
      superlative={ person.superlative }
      key={ person.id }
      />
  })

  return (
    <div className="cohort-container">
      { profilesOnDisplay }
    </div>
  )
}

export default Cohort;
