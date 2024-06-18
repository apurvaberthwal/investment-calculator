import { useState } from 'react'
import HeaderComponent from './components/Header.component.jsx'
import UserInput from './components/Input.component.jsx'
import Results from './components/Results.component.jsx'

function App() {
  const [userInput,setUserInput] =useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})
const inputIsValid = userInput.duration>=1

function handleChange(inputIdentifier,newValue){
  setUserInput(prevUSerInput => {
      return {
          ...prevUSerInput,
          [inputIdentifier]:+newValue
      }
  })
}



  return (
    <>
    <HeaderComponent />
    <UserInput 
    userInput={userInput}
    onChangeInput = {handleChange}/>
    {!inputIsValid && 
    <p className='center'> Please enter a valid duration</p>}
    
    {inputIsValid &&  <Results
    input={userInput}
    />}
    </>
  )
}

export default App
