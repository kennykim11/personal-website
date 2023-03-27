import {FilterArea} from './FilterArea'
import { Timeline } from './Timeline'

export function CardNav() {
    return <div id="cardNav">
        <FilterArea/>
        <div id="hdivider"/>
        <Timeline/>
    </div>
}