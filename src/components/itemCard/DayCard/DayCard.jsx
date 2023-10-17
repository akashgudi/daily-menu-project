import { DAYS_OF_WEEK } from "../../../constants/constants"
import { ItemCard } from "../ItemCard"
import './DayCard.scss'

export function DayCard({ item, day }) {
    const today = new Date()
    if (day+1==today.getDay()) return <div className="day-card">
        <h1>{DAYS_OF_WEEK[day]}</h1>
        <ItemCard item={item[0]} meal={"Lunch"}/>
        <ItemCard item={item[1]} meal={"Dinner"}/>
    </div >
}