import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductList from '../ProductList';

function HomePage(props) {

    const [allProducts, changeAllProducts] = useState(null);
    const [currentProducts, changeCurrentProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => { 
                console.log(data);
                changeAllProducts(data);
                changeCurrentProducts(data);
            })
    }, [])

    return (
        <div>
            <h1>This is my homePage</h1>
            {
                (currentProducts===null) ? <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner> : <ProductList currentProducts={currentProducts} />

            }

        </div>
    );
}

export default HomePage;