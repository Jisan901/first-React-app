import {useState,useEffect} from 'react';
import CartDetails from '../components/CartDetails';
import OrderSummary from '../components/OrderSummary';
function Cart() {
    const [cProducts,setCProducts] = useState([])
    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => {
            const next = data.products.map(product=>{
                if (!product.quantity) {
                    product.quantity=1
                    return product;
                }
                return product
            })
            setCProducts(next)
            
        })
    },[])
    
    function updateProdQuan(id,quantity){
        const varyProd=cProducts.find(product => product?.id===id)
        varyProd.quantity=quantity;
        const filtered = cProducts.filter(product=>product.id!==id)
        const newProd=[varyProd,...filtered]
        newProd.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        setCProducts(newProd)
    }

    return (
        <div className="cartPage">
        <div className="cartDetails">
            <CartDetails products={cProducts} updateQuan={updateProdQuan}/>
            <OrderSummary products={cProducts}/>
        </div>
    </div>

    );
}

export default Cart;