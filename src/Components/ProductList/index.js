
import React from 'react';
import ProductComponent from '../Product';

function ProductList(props) {

    const {currentProducts}=props;

    return (
        <div>
        <h1>Product List</h1>
        {
            currentProducts.map((product,index)=>
            {
                return <ProductComponent key={product.id} product={product} />  
            })
        }
        </div>
    );
}

export default ProductList;