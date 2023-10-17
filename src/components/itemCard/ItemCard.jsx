import './itemCard.scss'
import { sourceDict } from '../../utils/staticSources'
export const ItemCard = ({ item, meal }) => {
    return <div className='item-card'>
        <div className='item-photo' style={{backgroundImage:`url(${sourceDict[item.img]})`}}>
        </div>
        <div className='item-label'>
            <div className="meal-label">{meal}</div>
            <div className='dish-label'>{item.name}</div>
        </div>
    </div>
}