import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductsWithCategory = (props) => {
    const {productsList, productOnClick} = props
    return (
        <Grid className="p-5" container rowSpacing={2} columnSpacing={2}>
            {productsList.map((product)=>
                <Grid item xs={12} sm={3} md={2.4} key={product.productId}>
                    <ProductCard productImage={product.productImage} productName={product.productName} productPrice={product.productPrice} productOnClick={productOnClick} productId={product.productId}/>
                </Grid>
            )}
        </Grid>
    )
}

export default ProductsWithCategory;