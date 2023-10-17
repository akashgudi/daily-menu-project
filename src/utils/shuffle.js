import { COOK_DAYS_IN_WEEK, NUM_OF_MEALS_PER_WEEK, NUM_OF_PROTEINS } from "../constants/constants";
import seedrandom from "seedrandom";
import { getWeek } from "./getWeek";



export function shuffle(array,today=new Date()) {
    var dateString= `${getWeek(today)}${today.getFullYear()}${today.getMonth()}`
    let generate = seedrandom(dateString)
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(generate() * currentIndex);
        currentIndex--;


        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    let arrayLength = array.length
    let i = 0;
    while (i < arrayLength) {
        if (i % 2 == 0) {
            if (array[i].is_protein) {
                let j = 0
                while (j < NUM_OF_PROTEINS) {
                    if (array[i + ((j * 2) + 1)] !== undefined && !array[i + ((j * 2) + 1)].is_protein) { 
                        //interesting feature not a bug moment xD
                        [array[i + ((j * 2) + 1)], array[i]] = [array[i], array[i + ((j * 2) + 1)]]
                    }
                    j++
                }
            }
        }
        i++;
    }
    var dayGrouped = []
    for( let i=0; i < COOK_DAYS_IN_WEEK*2;i+=2)
        dayGrouped.push([array[i],array[i+1]])
    return dayGrouped

}