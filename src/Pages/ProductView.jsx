import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Typography, Box, Grid } from "@mui/material";
import Button from "../Components/CustomComponents/Button";
import { getObject } from "../Utilities/Functions";
import { phoneList, watchList } from "../Utilities/Constants";

const ProductView = () => {
    const [productDetails, setProductDetails] = useState({});

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const productId = params.get("productId");
        const productObj = getObject([...phoneList, ...watchList], productId);
        setProductDetails(productObj);
    },[]);

    return (
        <Layout>
            <Box className="p-5 product-view">
                <Grid container>
                    <Grid item xs={12} md={6} className="img-div">
                        <img src={productDetails?.productImage} height={200} alt="productImage" />
                    </Grid>
                    <Grid item xs={12} md={6} className="self-center info-div">
                        <Typography sx={{fontWeight: "600"}} className="text-lg">{productDetails?.productName}</Typography>
                        <Typography sx={{fontWeight: "600"}}>&#8377; {productDetails?.productPrice?.toLocaleString("en-IN")}</Typography>
                        <Button title="Add to cart" variant="outlined"/>
                        <Button title="Buy now" variant="contained"/>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default ProductView;