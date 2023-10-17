import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import proteins from './data/proteins.json'
import regular from './data/regular.json'
function App() {

  return (
    <>
      {JSON.stringify(proteins)}
      {JSON.stringify(regular)}

    </>
  )
}

export default App
