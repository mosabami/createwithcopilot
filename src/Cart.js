// Cart.js
import React from 'react';
import './Cart.css';

export default function Cart({ products, order, setOrder }) {
    const orderedProducts = products.filter((product) => order[product.id]);

    const grandTotal = orderedProducts.reduce((total, product) => total + product.price * order[product.id], 0);
    const handlePlaceOrder = () => {
        setOrder({});
      };

    return (
        <div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>$ {product.price}</td>
                            <td>{order[product.id]}</td>
                            <td>$ {product.price * order[product.id]}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Grand Total</td>
                        <td>$ {grandTotal.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={handlePlaceOrder} className="place-order-button">Place order</button>
        </div>
    );
}