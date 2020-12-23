import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import Spinner from '../../components/Spinner';
import { calcSubPrice, calcTotalPrice } from '../../helpers/calcPrice'

const Cart = () => {
    const { cartData, getCart, changeCountProducts, makeOrder } = useContext(productsContext)
    useEffect(() => {
        getCart()
    }, [])
    console.log(cartData)
    function handleChangeCount(e, id) {
        changeCountProducts(e.target.value, id)
    }
    return (
        <div className="cart">
            {cartData.products ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>title</th>
                                <th>price</th>
                                <th>count</th>
                                <th>subTotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.products.map(item => (
                                <tr key={item.product.id}>
                                    <td><img src={item.product.image} style={{ width: '50px' }} /></td>
                                    <td>{item.product.title}</td>
                                    <td>{item.product.price}</td>
                                    <td><input onChange={(e) => handleChangeCount(e, item.product.id)} type="number" value={item.count} /></td>
                                    <td>{calcSubPrice(item)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4>Total: {calcTotalPrice(cartData.products)}</h4>
                    <button onClick={makeOrder}>Оплатить</button>
                </div>
            ) : (
                    <Spinner />
                )}


        </div>
    );
};

export default Cart;