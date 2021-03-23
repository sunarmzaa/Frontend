//npm install -g create-next-app
//create-next-app .........
//npm install next react react-dom
//npm i -s axios
//npm i -s swr

import axios from 'axios'
import styles from '../styles/Pet.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const URL = 'http://localhost:3001/api/pets'
export default function Home() {
  const [pets, setPets] = useState({})
  const [pet, setPet] = useState({})
  const [type, Type] = useState('')
  const [age, setAge] = useState()
  const [weight, setWeight] = useState()
  const [price, setPrice] = useState()



  console.log("pp", pets);
  const getpets = async () => {   //async
    let result = await axios.get(URL)   //awit
    //console.log(result.data); 
    setPets(result.data.list)
  }
  const showPets = () => {
    if (pets && pets.length) {
      return pets.map((item, index) => {
        return (<li key={index}>

          {item.type} : {item.age} : {item.weight} : {item.price}
          <button onClick={() => getPetsby(item.id)}>Get</button>
          <button onClick={() => deletePetsby(item.id)}> Delete </button>
          <button onClick={() => updatePetsby(item.id)}>Update</button>


        </li>)
      })
    }
    else {
      <div>No Pett</div>
    }
  }

  const getPetsby = async (id) => {
    let pets = await axios.get(`${URL}/${id}`)     //axios => .data
    setPet(pets.data)
    //console.log(product);
  }


  const deletePetsby = async (id) => {
    let pet = await axios.delete(`${URL}/${id}`)
    getpets()
  }

  const updatePetsby = async (id) => {
    let pets = await axios.put(`${URL}/${id}`, { type, age, weight, price })
    getpets()
  }

  const addPetsby = async (type, age, weight, price) => {
    let pets = await axios.post(URL, { type, age, weight, price })
    getpets()
  }

  useEffect(() => {
    getpets()
  }, [])

  return (
    <div className={styles.container}>
    <h1>PET SHOP</h1>
    <h3>Income: </h3>

    price<input type="text" /> <br />
    Weight<input type="number" />    <br />
    age<input type="number" />   <br />
    price<input type="number" /> <br />
    <button>Add new pet</button>

    <button onClick={() => getPetsby(item.id)}>Get</button>
      <button onClick={() => deletePetsby(item.id)}> Delete </button>
      <button onClick={() => updatePetsby(item.id)}>Update</button>



</div>
  )
}
