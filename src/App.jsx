import { useState } from 'react'
import { Button, Layout } from './components'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Layout>
            <div className="p-4 mt-8">
                <div className="max-w-screen-xl flex flex-row justify-between mx-auto p-4 gap-8">
                    <div className="basis-1/2 md:basis-3/4 grid gord-cols-1 md:grid-cols-3 gap-4">
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
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="">Produk A</p>
                                        <p className="">Rp. 1000.000</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="">Produk A</p>
                                        <p className="">Rp. 1000.000</p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between border-t border-gray-400">
                                    <h3 className="mt-4 text-normal font-semibold">Total</h3>
                                    <h3 className="mt-4 text-normal font-semibold">Rp. 1000.000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default App
