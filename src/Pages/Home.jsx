import React from "react";
import { Grid } from "@mui/material";
import Layout from "../Components/Layout";
import ProductCard from "../Components/ProductCard";
import { phoneList, watchList } from "../Utilities/Constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const productOnClick = (productId) => {
        navigate(`/product?productId=${productId}`);
    }

    return (
        <Layout>
            <Grid className="p-5" container rowSpacing={2} columnSpacing={2}>
                {phoneList.map((product)=>
                    <Grid item xs={12} sm={3} md={2.4}>
                        <ProductCard productImage={product.productImage} productName={product.productName} productPrice={product.productPrice} productOnClick={productOnClick} productId={product.productId}/>
                    </Grid>
                )}
            </Grid>
            <Grid className="p-5" container rowSpacing={2} columnSpacing={2}>
                {watchList.map((product)=>
                    <Grid item xs={12} sm={3} md={2.4}>
                        <ProductCard productImage={product.productImage} productName={product.productName} productPrice={product.productPrice} productOnClick={productOnClick} productId={product.productId}/>
                    </Grid>
                )}
            </Grid>
        </Layout>
    )
};

export default Home;