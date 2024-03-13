import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseFetch from './hooks/UseFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import InputForm from './components/InputForm'

function App() {

const randomLocation = getRandomNumber(126) 
const [inputValue, setInputValue] = useState(randomLocation)

const url = `https://rickandmortyapi.com/api/location/${inputValue || getRandomNumber(126)}`
const [location, getLocation, hasError] = UseFetch(url)

useEffect(() => {
  getLocation()
}, [inputValue])

  return (
   <div className='app'>
    <h1 className='app_title'>Rick and Morty</h1>
    <InputForm 
    setInputValue={setInputValue}
    />
    {hasError ? ( 
      <h2 className='app_error'>❌ Hey! You must provide an ID from 1 to 126 😅</h2> 
      ) : (
        <>
        <LocationInfo location={location} />
        <div className='container_resident'>
          {location?.residents.map(url => (
              <ResidentCard key={url} url={url} />
            ))}
        </div>
        </>
        )}
    </div>
  );
}

export default App