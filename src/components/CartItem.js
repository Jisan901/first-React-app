function CartItem({product,updateQuan}) {
    
    return (
        <div className="item">
            <div className="item-details">
                <img src={product.thumbnail} alt="item" />
                <div className="item-desc">
                    <h4>{product.title}</h4>
                    <span>{product.category}</span>
                    <button>Remove</button>
                </div>
            </div>
            <div className="quantity">
                <button onClick={()=>{
                    updateQuan(product.id,product.quantity+1)

                }}>+</button>
                <input type="number" name="quantity" id="quantity" value={product.quantity} disabled />
                <button onClick={()=>{
                updateQuan(product.id,product.quantity!==1?product.quantity-1:1)
                }}>-</button>
            </div>
            <span>${product.quantity*product.price}</span>
            <span>${parseFloat(product.quantity*(
            product.price-(
            (product.price/100)*product.discountPercentage
            )
            )
            ).toFixed(2)}</span>
        </div>

    )
}

export default CartItem;