import React from "react";
import Layout from "../Components/Layout";
import { Box } from "@mui/system";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import iphone from "../Assets/Images/Phones/iphone.jpeg";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router";
import { routes } from "../Utilities/Constants";

const Cart = () => {
    const productDetails = {
        productName: "iPhone",
        productPrice: 120000,
        productImage: iphone,
        productId: "1001",
    };
    const navigate = useNavigate();

    const cartItemOnClick = (productId) => {
        navigate(`/${routes.productView}?productId=${productId}`);
    }

    return (
        <Layout>
            <Box className="p-5 cart-page">
                <Grid container rowSpacing={2} columnSpacing={2}>
                    <CartItem productDetails={productDetails} cartItemOnClick={cartItemOnClick}/>
                    <CartItem productDetails={productDetails} cartItemOnClick={cartItemOnClick}/>
                    <CartItem productDetails={productDetails} cartItemOnClick={cartItemOnClick}/>
                    <CartItem productDetails={productDetails} cartItemOnClick={cartItemOnClick}/>
                </Grid>
                <Card className="mt-5 price-details">
                    <CardContent>
                        <Typography className="heading">Price details</Typography>
                        <Divider />
                    </CardContent>
                </Card>
            </Box>
        </Layout>
    )
}

export default Cart;