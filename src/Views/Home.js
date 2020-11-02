import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
    const url = `https://5fa0297fe21bab0016dfce9e.mockapi.io/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>
            There was an Error. Please try again later.
        </p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content =
        products.data.map((product, key) => 
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2x1 mb-3">
                Coding School
            </h1>

            {content}

        </div>
    )
}

export default Home
