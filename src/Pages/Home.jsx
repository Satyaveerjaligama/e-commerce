import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/slices/sampleSlice";
import Layout from "../Components/Layout";
import ProductCard from "../Components/ProductCard";
import { productsList } from "../Utilities/Constants";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <Layout>
            <Grid className="p-5" container rowSpacing={2} columnSpacing={2}>
                {productsList.map((product)=>
                    <Grid item xs={12} sm={3} md={2.4}>
                        <ProductCard productImage={product.productImage} productName={product.productName} productPrice={product.productPrice}/>
                    </Grid>
                )}
            </Grid>
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
        </Layout>
    )
};

export default Home;