import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="py-12">
                {children}
            </main>

        </>
    )
}
