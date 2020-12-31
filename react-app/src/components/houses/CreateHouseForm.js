import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const CreateHouseForm = () => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [allStates, setAllStates] = useState([]);

  // SET STATE FOR FORM FIELDS
  const [name, setName] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [housePicUrl, setHousePicUrl] = useState('');
  const [description, setDescription] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [numBedrooms, setNumBedrooms] = useState(1);
  const [numBeds, setNumBeds] = useState(1);
  const [numBaths, setNumBaths] = useState(1);
  const [price, setPrice] = useState(0)
  

  useEffect(() => {
    // fetch (united) states from db and store in 'allStates' var
    // fetch('/houses/states')
  }, [])

  const handleSubmit = () => {
    // create object from state
    // newHouse = {
    //   name,
    // ...
    // }
    // send object to flask backend
    // fetch('/path', {
    //   method:
    //   body: newHouse
    // })
    // history.push('/')
    return
  }

  return (
    <form className='create-house-form' onSubmit={handleSubmit}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <input
          name='name'
          placeholder='House Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <textarea
          name='description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          name='street_1'
          placeholder='Street 1'
          type='text'
          value={street1}
          onChange={(e) => setStreet1(e.target.value)}
        />
      </div>
      <div>
        <input
          name='street_2'
          placeholder='Street 2'
          type='text'
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
        />
      </div>
      <div>
        <input
          name='city'
          placeholder='City'
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <select onChange={(e) => setState(e.target.value)}>
          {allStates.map(state => {
            return <option value={state.id}>{state.state_name}</option>
          })}
        </select>
      </div>
      <div>
        <input
          name='postal_code'
          placeholder='Zip'
          type='text'
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div>
        {/* ADD AWS IMAGE UPLOAD FUNCTIONALITY */}
        <button>Upload Image</button>
      </div>
      <div>
        <label for='max_guests'>Max Guests</label>
        <input
          id='max_guests'
          name='max_guests'
          type='number'
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
        />
      </div>
      <div>
        <label for='num_bedrooms'>Bedrooms</label>
        <input
          id='num_bedrooms'
          name='num_bedrooms'
          type='number'
          value={numBedrooms}
          onChange={(e) => setNumBedrooms(e.target.value)}
        />
      </div>
      <div>
        <label for='num_beds'>Beds</label>
        <input
          id='num_beds'
          name='num_beds'
          type='number'
          value={numBeds}
          onChange={(e) => setNumBeds(e.target.value)}
        />
      </div>
      <div>
        <label for='num_baths'>Bathrooms</label>
        <input
          id='num_baths'
          name='num_baths'
          type='number'
          value={numBaths}
          onChange={(e) => setNumBaths(e.target.value)}
        />
      </div>
      <div>
        <label for='price'>Price</label>
        <input
          id='price'
          name='price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}


export default CreateHouseForm;
