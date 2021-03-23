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
          price {item.price}  <br />
           weight {item.weight}   <br />
           age {item.age} <br />
           type {item.type}


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
    let pets = await axios.put(`${URL}/${id}`, { price, weight, age, type })
    getpets()
  }

  const addPetsby = async (price, weight, age, type) => {
    let pets = await axios.post(URL, { price, weight, age, type })
    getpets()
  }

  useEffect(() => {
    getpets()
  }, [])

  return (
    <div className={styles.container}>
      <h2>PET SHOP</h2>
      <div>
        <div className={styles.list}>
          <ul className={styles.listItem}>{showPets()}</ul>
        </div>
      </div>

      <div>
        <button className={styles.blue}>Buy</button>  <br />
      </div>


      <button onClick={() => getPetsby(item.id)}>Get</button>
      <button onClick={() => deletePetsby(item.id)}> Delete </button>
      <button onClick={() => updatePetsby(item.id)}>Update</button>
    </div>
  )
}


/*


<div className={styles.container}>PET SHOP

type<input type="text" onChange={(e) => settype(e.target.value)} /> <br />
age <input type="number" onChange={(e) => setAge(e.target.value)} /> <br />
weight<input type="number" onChange={(e) => setWeight(e.target.value)} /> <br />
price<input type="number" onChange={(e) => setPrice(e.target.value)} /> <br />

          <button onClick={() => getPetsby(item.id)}>Get</button>
          <button onClick={() => deletePetsby(item.id)}> Delete </button>
          <button onClick={() => updatePetsby(item.id)}>Update</button>


          <button onClick={() => addPetsby(type, age, weight, price)}>Buy</button>  <br />

*/