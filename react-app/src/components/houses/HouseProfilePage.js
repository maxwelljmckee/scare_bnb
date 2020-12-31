import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const HouseProfilePage = () => {
  const { id } = useParams()

  const [isLoaded, setIsLoaded] = useState(false)
  const [house, setHouse] = useState(null)

  useEffect(() => {

    const getHouse = async () => {
      const response = await fetch(`/api/houses/${id}`)
      const body = await response.json()
      console.log(body)
      setHouse(body)
      setIsLoaded(true)
    }
    getHouse()
  }, [id])

  return (
    <div style={{ paddingTop: "60px" }}>
      {!isLoaded && (
        <div>Loading...</div>
      )}
      {house && isLoaded && (
        <div> </div>
      )}
    </div>
  )
}


export default HouseProfilePage;
