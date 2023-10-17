import { DAYS_OF_WEEK } from "../../constants/constants"
import { ItemCard } from "../itemCard/ItemCard"
import './DayCard.scss'

export function DayCard({ item, day, next_item }) {
    const today = new Date()
    if (day + 1 == today.getDay()) {
        if (today.getHours() < 12) return <div className="day-card">
            <h1>{DAYS_OF_WEEK[day]}</h1>
            <ItemCard item={item[0]} meal={"Lunch"} />
            <ItemCard item={item[1]} meal={"Dinner"} />
        </div >

        return <div className="day-card">
            <h1>{DAYS_OF_WEEK[day]}</h1>
            <ItemCard item={item[1]} meal={"Dinner"} />
            <h2> Tomorrow </h2>
            <ItemCard item={next_item[0]} meal={"Lunch"} />
        </div >
    }
}