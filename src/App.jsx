import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import data
import proteins from './data/proteins.json'
import regular from './data/regular.json'

//import consts 
import {} from './constants/constants'


//import utils
import { generateMenu } from './utils/generateMenu'
import { shuffle } from './utils/shuffle'
function App() {

  return (
    <>
      {JSON.stringify(shuffle((generateMenu(proteins,regular))))}
    </>
  )
}

export default App
