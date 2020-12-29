import React, { useState } from 'react';


const CreateHouseForm = () => {
  const [name, setName] = useState('');
  const [street1, setStreet1] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [city, set] = useState('')

  const handleSubmit = () => {
    return
  }

  return (
    <form className='form__create-house' onSubmit={handleSubmit}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <input
          name=''
          type='text'
          
        />
      </div>
    </form>
  )
}