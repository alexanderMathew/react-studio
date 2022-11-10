// TODO: create a component that displays a single bakery item

export default function BakeryItem({item, handleClick}) {

    return (
        <>
        <div className="BakeryItem">
            <img className = "image" src={item.image} style={{height:'10rem', width:'20rem'}}></img>
            <p className="name">{item.name}</p>
            <p className="descripton">{item.description}</p>
            <p className="price">Price: ${item.price}</p>
            <button className="button" onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
        </>
    )
}