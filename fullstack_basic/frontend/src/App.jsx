import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/jokes`)
    
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })


  }, [])

  return (
    <>
      <h1>Fullstack With Guru</h1>
      <p>Here are some jokes:{jokes.length}</p>

      {
        jokes.map(joke => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
