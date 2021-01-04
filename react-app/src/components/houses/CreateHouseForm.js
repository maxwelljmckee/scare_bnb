import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import ImageInput from "../FormFields/ImageCropper/ImageInput";
import "./CreateHouseForm.css";

const CreateHouseForm = ({ user }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [allStates, setAllStates] = useState([]);

  // SET STATE FOR FORM FIELDS
  const [name, setName] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [stateId, setStateId] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [description, setDescription] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [numBedrooms, setNumBedrooms] = useState(1);
  const [numBeds, setNumBeds] = useState(1);
  const [numBaths, setNumBaths] = useState(1);
  const [price, setPrice] = useState(0);
  const [housePic, setHousePic] = useState(null);

  useEffect(() => {
    // fetch (united) states from db and store in 'allStates' var
    const getStates = async () => {
      const res = await fetch("/api/houses/states");
      const data = await res.json();
      setAllStates(data);
    };
    getStates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData object for Axios form submission
    const formData = new FormData();
    formData.append("hostId", user.id);
    formData.append("name", name);
    formData.append("street1", street1);
    formData.append("street2", street2);
    formData.append("city", city);
    formData.append("stateId", stateId);
    formData.append("postalCode", postalCode);
    formData.append("description", description);
    formData.append("maxGuests", maxGuests);
    formData.append("numBedrooms", numBedrooms);
    formData.append("numBeds", numBeds);
    formData.append("numBaths", numBaths);
    formData.append("price", price);
    if (housePic) {
      formData.append("housePic", housePic);
    }

    // Config object for multi-part form
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    // Post to flask backend
    let response = await axios.post("/api/houses/create", formData, config);

    if (!response.data.errors) {
      history.push(`/listings/${response.data.id}`);
    } else {
      setErrors(response.data.errors);
    }
  };

  return (
  <div className="page-container">
    <div className="form-container">
      <form className="create-house-form">
        {errors && (
          <div>
            {errors.length !== 0 && (
              <div className="login-form_errors">
                {errors.map((error) => (
                  <div key={error}>{error}</div>
                ))}
              </div>
            )}
          </div>
        )}
        <div>
          <input
            name="name"
            placeholder="House Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            name="street_1"
            placeholder="Street 1"
            type="text"
            value={street1}
            onChange={(e) => setStreet1(e.target.value)}
          />
        </div>
        <div>
          <input
            name="street_2"
            placeholder="Street 2"
            type="text"
            value={street2}
            onChange={(e) => setStreet2(e.target.value)}
          />
        </div>
        <div>
          <input
            name="city"
            placeholder="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <select className="select-state" onChange={(e) => setStateId(e.target.value)}>
            <option >Select State</option>
            {allStates.map((state) => {
              return (
                <option key={state.id} value={state.id}>
                  {state.state_name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            name="postal_code"
            placeholder="Zip"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="house-label">
          <label htmlFor="house_pic">House Picture</label>
          {/* <input
            name="house_pic"
            type="file"
            onChange={(e) => setHousePic(e.target.value)}
          /> */}
          <ImageInput
            aspect={3 / 2}
            onChange={setHousePic}
            width={1620}
            height={1080}
          />
        </div>
        <div>
          <label htmlFor="max_guests">Max Guests</label>
          <input
            id="max_guests"
            name="max_guests"
            type="number"
            value={maxGuests}
            onChange={(e) => setMaxGuests(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num_bedrooms">Bedrooms</label>
          <input
            id="num_bedrooms"
            name="num_bedrooms"
            type="number"
            value={numBedrooms}
            onChange={(e) => setNumBedrooms(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num_beds">Beds</label>
          <input
            id="num_beds"
            name="num_beds"
            type="number"
            value={numBeds}
            onChange={(e) => setNumBeds(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num_baths">Bathrooms</label>
          <input
            id="num_baths"
            name="num_baths"
            type="number"
            value={numBaths}
            onChange={(e) => setNumBaths(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="form-submit-btn" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  </div>
  );
};

export default CreateHouseForm;
