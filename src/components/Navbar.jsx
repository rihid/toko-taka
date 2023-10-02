import { useState } from 'react'
import { ButtonIcon } from './buttons';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white border-b border-gray-200">
            <div className="max-w-screen-xl flex items-center justify-between flex-wrap mx-auto p-4">
                <div className="font-bold">Toko Taka</div>
                <div className="flex md:order-2">
                    <ButtonIcon
                        name="cart"
                        label="cart"
                    />
                    {/* For mobile, here the hamburger */}
                    <ButtonIcon
                        name="humberger"
                        label="Open menu"
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden"
                    />
                </div>
                <div 
                    className={
                        `md:w-auto md:order-1 md:flex items-center justify-between
                        ${showMenu ? 'w-full' : 'hidden'}
                    `}
                >
                    <ul 
                        className={
                            `flex md:flex-row md:space-x-10 p-4 md:p-0 font-medium text-lg
                            ${showMenu ? 'flex flex-col border border-gray-100 rounded-lg bg-gray-50' : ''}
                        `}
                    >
                        <li><a href="">Home</a></li>
                        <li><a href="">Produk</a></li>
                        <li><a href="">Lain</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
