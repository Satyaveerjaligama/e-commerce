import React from "react";
import Layout from "../Components/Layout";
import { Box } from "@mui/system";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router";
import { routes } from "../Utilities/Constants";
import { useSelector, useDispatch } from "react-redux";
import emptyCartImg from "../Assets/Images/empty-cart.png";
import { updateItemsInCart } from "../Redux/slices/cartSlice";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cartSlice.cartItems);

    const cartItemOnClick = (productId) => {
        navigate(`/${routes.productView}?productId=${productId}`);
    }

    const deleteItem = (itemIndex) => {
        const cartItemsCopy = [...cartItems];
        cartItemsCopy.splice(itemIndex, 1);
        dispatch(updateItemsInCart(cartItemsCopy));
    }

    return (
        <Layout>
            {cartItems && cartItems.length>0 ?
            <Box className="p-5 cart-page">
                <Grid container rowSpacing={2} columnSpacing={2}>
                { cartItems.map((product, index)=>
                    <CartItem key={index} productDetails={product} cartItemOnClick={cartItemOnClick} itemIndex={index} deleteItem={deleteItem}/>
                )}
                </Grid>
                <Card className="mt-5 price-details">
                    <CardContent>
                        <Typography className="heading">Price details</Typography>
                        <Divider />
                        <div className="flex justify-between">
                            <Typography>Items 1</Typography>
                            <Typography>&#8377; Price</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography>GST</Typography>
                            <Typography>&#8377; Price</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography>Discount</Typography>
                            <Typography>&#8377; Price</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography>Total Order Price</Typography>
                            <Typography>&#8377; Price</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Box>
            :
            <Box className="p-5 text-webkit-center">
                <img src={emptyCartImg} alt="item-not-found" style={{width:"80vh", height:"60vh"}}/>
                <Typography sx={{fontWeight: "700", fontSize: "25px"}}>Your cart is empty</Typography>
            </Box>
            }
        </Layout>
    )
}

export default Cart;