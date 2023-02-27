import React, {useState} from 'react'

const FormDelivery = () => {
  const [city, setCity] = useState('') // API grâce au zipCode
  // let city = ''=> setCity('Paris) => city = 'Paris'
  const [zipCode, setZipCode] = useState(0) // ASK
  const [address, setAddress] = useState('') // ASK - API
  const [number, setNumber] = useState(0)


  const handleZipChange = (e) => {
    if (!isNaN(e.target.value)) {
      if (e.target.value.length === 5) {
        const url = `https://apicarto.ign.fr/api/codes-postaux/communes/${e.target.value}`
        fetch(url)
          .then((response => response.json()))
          .then((res => {
            console.log(res)
            })
          )
          .catch((err => {
            console.error(err)
            })
          )
      }
      console.log(e.target.value)
      return setZipCode(e.target.value)
    }
  }

  return (
    <div>
      <h1>Quelle est votre adresse ? S'il vous plait</h1>
      <label for="zipcode">Code Postal : </label>
      <input 
      type="number"
      name="zipcode"
      value={zipCode} 
      onChange={handleZipChange}
      />
    </div>
  )
}

export default FormDelivery