import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"

function App() {

  console.log(quotes)

  const randomElementFronArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }




  const [quoteRandom, setQuoteRandom] = useState(randomElementFronArray(quotes))

const [colorRandom, setcolorRandom] = useState(randomElementFronArray(colors))

  const handleClick = () => {
    setQuoteRandom(randomElementFronArray(quotes))
    setcolorRandom(randomElementFronArray(colors))


  }

  return (
    <div style={{ backgroundColor:colorRandom }} className="App">
      <QuoteBox quoteRandom={quoteRandom} 
      handleClick={handleClick} 
      colorRandom={colorRandom}/>
    </div>
  )
}

export default App
