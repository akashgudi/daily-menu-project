import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
//import data
import proteins from './data/proteins.json'
import regular from './data/regular.json'
//import consts 
import { } from './constants/constants'
//import utils
import { generateMenu } from './utils/generateMenu'
import { shuffle } from './utils/shuffle'
import { ValidateMenu } from './utils/validateMenu'
import { getWeek } from './utils/getWeek'
//import components
import { ItemCard } from './components/itemCard/ItemCard'

function App() {
  const today = new Date() 
  const [menu, setMenu] = useState(ValidateMenu(shuffle(generateMenu(proteins, regular),today)))
  return (
    <>
      <div>{`WEEK ${getWeek(today)}`}</div>
      {menu.map((item, idx) => 
      <React.Fragment key={idx}>
        Lunch
        <ItemCard item={item[0]} />
        Dinner
        <ItemCard item={item[1]} />
      </React.Fragment>)}
    </>
  )
}

export default App
