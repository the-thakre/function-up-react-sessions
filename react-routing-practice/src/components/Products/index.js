import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Clothes = () => {
    return <div>This is clothes product page</div>
}

const Electronics = () => {
    return <div>This is Electronics product page</div>
}

const Products = () => {
    return (
        <div>
            <div>These are our products.</div>
            <Routes>
                <Route path="/products/clothes" element={<Clothes />} />
                <Route path="/products/electronics" element={<Electronics />} />
            </Routes>
        </div>
    )
}

export default Products