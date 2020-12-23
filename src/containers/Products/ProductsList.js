import { Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { productsContext } from "../../contexts/ProductsContext"

const ProductsList = () => {
    const { products, getProducts } = useContext(productsContext);
    
    useEffect (() => {
        getProducts()
    }, [])

    return (
        <Grid container spacing={3}>
           {products.map(item => (
                <ProductCard item={item} key={item.id} />
            ))}
        </Grid>
    );
};

export default ProductsList;
