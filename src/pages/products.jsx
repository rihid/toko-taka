import React from 'react'
import { Button, Layout } from '../components'
import { useEffect } from 'react';
import { useState } from 'react';

// Api endpoint
const url = 'https://fakestoreapi.com/products'

export default function Products() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    // Get data from API
    const getDataAll = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getDataAll();
    }, []);

    useEffect( () => {
        const sum = cart.reduce( (acc, val) => {
            const product = products.find( row => row.id === val.id);
            console.log(product)
            return acc + product.price * val.qty
        }, 0)
        setTotalPrice(sum)
    }, [cart])

    const handleAddToCart = (id) => {
        if(cart.find( row => row.id === id)) {
            setCart(
                cart.map( item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else{
            setCart([
                ...cart,
                {
                    id: id,
                    qty: 1
                }
            ])
        }
    }
    return (
        <Layout>
            <div className="p-4 mt-8">
                <div className="max-w-screen-xl flex flex-row justify-between mx-auto p-4 gap-8">
                    <div className="basis-1/2 md:basis-3/4 grid gord-cols-1 md:grid-cols-3 gap-4">
                        {/* <div className="border border-gray-200 rounded-lg hover:border-blue-500">
                            <div className="">
                                <a href="">
                                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </a>
                            </div>
                            <div className="m-4">
                                <div className="text-sm">
                                    <a href="">Catogory</a>
                                </div>
                                <h2 className="text-lg font-bold">Judul Produk</h2>
                                <div className="flex items-center justify-between">
                                    <p>Rp. 1000.000</p>
                                    <Button
                                        label="+ Beli"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg hover:border-blue-500">
                            <div className="">
                                <a href="">
                                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </a>
                            </div>
                            <div className="m-4">
                                <div className="text-sm">
                                    <a href="">Catogory</a>
                                </div>
                                <h2 className="text-lg font-bold">Judul Produk</h2>
                                <div className="flex items-center justify-between">
                                    <p>Rp. 1000.000</p>
                                    <Button
                                        label="+ Beli"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg hover:border-blue-500">
                            <div className="">
                                <a href="">
                                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </a>
                            </div>
                            <div className="m-4">
                                <div className="text-sm">
                                    <a href="">Catogory</a>
                                </div>
                                <h2 className="text-lg font-bold">Judul Produk</h2>
                                <div className="flex items-center justify-between">
                                    <p>Rp. 1000.000</p>
                                    <Button
                                        label="+ Beli"
                                    />
                                </div>
                            </div>
                        </div> */}
                        {products?.map((row, index) =>
                            <div key={index} className="border border-gray-200 rounded-lg hover:border-blue-500">
                                <div className="">
                                    <a href="">
                                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </a>
                                </div>
                                <div className="m-4">
                                    <div className="text-sm">
                                        <a href="">{row.category}</a>
                                    </div>
                                    <h2 className="text-lg font-bold">{row.title.substring(0, 30)}...</h2>
                                    <div className="flex items-center justify-between">
                                        <p>$.{row.price}</p>
                                        <Button
                                            label="+ Beli"
                                            onClick={() => handleAddToCart(row.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="basis-1/2 md:basis-1/4 top-0">
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-lg font-bold">Cart Total</h2>
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-normal font-semibold">Product</h3>
                                    <h3 className="text-normal font-semibold">Subtotal</h3>
                                </div>
                                <div className="mt-2">
                                    {products.length > 0 && cart.map( (row, index) => {
                                        const product = products?.find( product => product.id === row.id)
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
                                    <h3 className="mt-4 text-normal font-semibold">${totalPrice}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
