import CartItem from './CartItem'
const CartDetails = ({products,updateQuan})=>{
    return (
            <div className="cartItems">
                <div className="text-content">
                    <h2>Shopping cart</h2>
                    <h2>{products.length} Items</h2>
                </div>
                <div className="placeholder-1">
                    <span>product details</span>
                    <span>Quantity</span>
                    <span>price</span>
                    <span>total</span>
                </div>
                <div className="items">
                {
                products.map(product => <CartItem product={product} updateQuan={updateQuan} key={product.id}/>)
                }
                </div>
                <a className="back-link" href="/">continue Shopping</a>
            </div>

        )
}
export default CartDetails; 