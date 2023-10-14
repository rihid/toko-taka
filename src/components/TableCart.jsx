import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function TableCart({products}) {
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect( () => {
        const sum = cart.reduce( (acc, val) => {
            const product = products.find( row => row.id === val.id);
            // console.log(product)
            return acc + product.price * val.qty;
        }, 0)
        setTotalPrice(sum)
    }, [cart])
    return (
        <div className="">
            <div className="flex items-center justify-between">
                <h3 className="text-normal font-semibold">Product</h3>
                <h3 className="text-normal font-semibold">Subtotal</h3>
            </div>
            <div className="mt-2">
                {products.length > 0 && cart.map((row, index) => {
                    const product = products?.find(product => product.id === row.id)
                    return (
                        <div key={index} className="flex items-center justify-between mt-1">
                            <p className="">{product.title.substring(0, 10)}... | {row.qty}</p>
                            <p className="">{product.price * row.qty}</p>
                        </div>
                    )
                })}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-400">
                <h3 className="mt-4 text-normal font-semibold">Total</h3>
                <h3 className="mt-4 text-normal font-semibold">${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    )
}
