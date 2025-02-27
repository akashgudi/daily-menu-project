import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
//import data
import proteins from './data/proteins.json'
import regular from './data/regular.json'
//import consts 
//import utils
import { generateMenu } from './utils/generateMenu'
import { shuffle } from './utils/shuffle'
import { ValidateMenu } from './utils/validateMenu'
import { getWeek } from './utils/getWeek'
//import components
import { ItemCard } from './components/itemCard/ItemCard'
import { DayCard } from './components/DayCard/DayCard'

function App() {
  const today = new Date()
  const time = today.getHours();
  const isAfternoon = time >= 12
  const [menu, setMenu] = useState(ValidateMenu(shuffle(generateMenu(proteins, regular), today)))
  useEffect(() => {
    document.title = isAfternoon ? "What's for Dinner" : "What's for Lunch";
  })
  return (
    <div className='app-body'>
      <div>{`2033 MENU, WEEK ${getWeek(today)}`}</div>
      {menu.map((item, idx) =>
        <React.Fragment key={idx}>
          <DayCard day={idx} item={item} next_item={menu[(idx+1)%6]}/>
        </React.Fragment>)}
    </div>
  )
}

export default App
