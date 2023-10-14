import React from 'react'
import { Button, Layout, TableCart } from '../components'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

// Api endpoint
const url = 'https://fakestoreapi.com/products'

export default function Products() {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    // Get data from API
    const getDataAll = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getDataAll();
    }, []);

    // const handleAddToCart = (id) => {
    //     if(cart.find( row => row.id === id)) {
    //         setCart(
    //             cart.map( item => item.id === id ? {...item, qty: item.qty + 1} : item)
    //         )
    //     } else{
    //         setCart([
    //             ...cart,
    //             {
    //                 id: id,
    //                 qty: 1
    //             }
    //         ])
    //     }
    // }
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
                                            onClick={() => dispatch(addToCart({id: row.id, qty: 1}))}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="basis-1/2 md:basis-1/4 top-0">
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-lg font-bold">Cart Total</h2>
                            <TableCart products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
