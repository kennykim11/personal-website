import {FilterArea} from './FilterArea.jsx'
import { Timeline } from './Timeline.jsx'

export function CardNav() {
    return <div id="cardNav">
        <FilterArea/>
        <div id="hdivider"/>
        <Timeline/>
    </div>
}