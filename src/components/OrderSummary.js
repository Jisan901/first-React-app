import {useState,useEffect} from 'react'
function OrderSummary({products}) {
    const [totalP,setTotalP]=useState(0)
    const [noDis,setNoDis]=useState(0)
    const [dis,setDis]=useState(0)
    const [shipC,setShipC]=useState(0)
    useEffect(()=>{
        setTotalP(products.length>0?products.reduce((a,b)=>{
                    return a.price
                    ?
                    a.quantity*(a.price-(a.price*a.discountPercentage/100))
                    :
                    a
                    +b.quantity*(b.price-(b.price*b.discountPercentage/100))
                    }
                    ):0)
        setNoDis(products.length>0?products.reduce((a,b)=>{
                    return a.price
                    ?
                    a.quantity*a.price
                    :
                    a
                    +b.quantity*b.price
                    }
                    ):0)
        setDis(noDis - totalP)
    },[products,noDis,totalP])
    
    
    const handleChange = event=>{
        setShipC(parseInt(event.target.value))
    }
    
    
    return (
            <div className="orderSummary">
                <div className="text-content">
                    <h3>order summary</h3>
                </div>
                <div className="placeholder-2">
                    <span>Items {products.length}</span>
                    
                    <span>${noDis.toFixed(2)}</span>
                </div>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor="shipping">Shipping</label>
                        <select onChange={handleChange} name="shipping" id="shipping">
                        <option value="0">Select shipping</option>
                        <option value="45">Premium $45</option>
                        <option value="87">Premium $87</option>
                        <option value="100">Premium $100</option>
                    </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="promo">Promo code</label>
                        <input type="text" name="promo" id="promo" />
                    </div>
                    <button type="submit">Apply</button>
                </form>
                <div className="placeholder-2">
                    <span>discount</span>
                    <span>${dis.toFixed(2)}</span>
                </div>
                <div className="placeholder-2">
                    <span>Total cost</span>
                    <span>${(shipC+totalP).toFixed(2)}</span>
                </div>
                <button>check out</button>
            </div>
    )
}

export default OrderSummary;