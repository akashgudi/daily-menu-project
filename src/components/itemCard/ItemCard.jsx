import './itemCard.scss'


export const ItemCard = ({item}) => {
    return <div className='item-card'>
        <div className='item-card-subsection'>{item.name}</div>
    </div>
}