import './itemCard.scss'


export const ItemCard = ({ item, meal }) => {
    return <div className='item-card'>
        <div className='item-photo'></div>
        <div className='item-label'>
            <div className="meal-label">{meal}</div>
            <div className='dish-label'>{item.name}</div>
        </div>
    </div>
}