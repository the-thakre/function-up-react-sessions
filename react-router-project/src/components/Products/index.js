import React from 'react'
import { useParams } from 'react-router-dom';
import './styles.scss';

const Products = () => {
    const params = useParams()
    const data = [
        {
            "id": 1,
            "name": "Product A",
            "price": 19.99,
            "category": "Electronics",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit non quam pulvinar eleifend."
        },
        {
            "id": 2,
            "name": "Product B",
            "price": 29.99,
            "category": "Clothing",
            "description": "Sed malesuada urna nec odio bibendum, vel suscipit elit accumsan. Nullam tincidunt mi at purus congue rhoncus."
        },
        {
            "id": 3,
            "name": "Product C",
            "price": 49.99,
            "category": "Home & Kitchen",
            "description": "Fusce ullamcorper eros sit amet efficitur tincidunt. Proin sit amet eros eget dui varius dapibus at non elit."
        },
        {
            "id": 4,
            "name": "Product D",
            "price": 39.99,
            "category": "Sports & Outdoors",
            "description": "Vivamus et ipsum quis dolor eleifend tincidunt a id tortor. Nunc tristique, augue ut rhoncus iaculis."
        }
    ]
    return (
        <div className='main-title'>
            {params && params.id ? <div className='product-info'>
                <div className='name'>{data[params.id].name}</div>
                <div className='price'>${data[params.id].price}</div>
                <div className='cat'>{data[params.id].category}</div>
                <div className='desc'>{data[params.id].description}</div>
            </div> : <>This is our products page.</>}
        </div>
    )
}

export default Products