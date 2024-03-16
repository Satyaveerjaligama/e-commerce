import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Box } from "@mui/system";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router";
import { routes } from "../Utilities/Constants";
import { useSelector, useDispatch } from "react-redux";
import emptyCartImg from "../Assets/Images/empty-cart.png";
import { updateItemsInCart } from "../Redux/slices/cartSlice";
import Button from "../Components/CustomComponents/Button";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cartSlice.cartItems);
    const [prices, setPrices] = useState({
        itemsPrice: 0,
        discount: 0,
        gst: 0,
        totalOrderPrice: 0
    });

    const cartItemOnClick = (productId) => {
        navigate(`/${routes.productView}?productId=${productId}`);
    }

    const deleteItem = (itemIndex) => {
        const cartItemsCopy = [...cartItems];
        cartItemsCopy.splice(itemIndex, 1);
        dispatch(updateItemsInCart(cartItemsCopy));
    }

    useEffect(()=>{
        if (cartItems && cartItems.length >0) {
            let itemsPrice = 0;
            for(let i=0; i<cartItems.length; i++) {
                itemsPrice = itemsPrice + cartItems[i].productPrice;
            }
            const discount = (15/100)*itemsPrice;
            const gst = (10/100)*itemsPrice;
            const totalOrderPrice = itemsPrice+gst-discount;
            setPrices({itemsPrice, discount, gst, totalOrderPrice});
        }
    },[cartItems]);

    return (
        <Layout>
            {cartItems && cartItems.length>0 ?
            <Box className="p-5 cart-page">
                <Grid container rowSpacing={2} columnSpacing={2}>
                { cartItems.map((product, index)=>
                    <CartItem key={index} productDetails={product} cartItemOnClick={cartItemOnClick} itemIndex={index} deleteItem={deleteItem}/>
                )}
                </Grid>
                <Card className="mt-5 price-details box-shadow">
                    <CardContent>
                        <Typography className="heading">Price details</Typography>
                        <Divider />
                        <div className="flex justify-between">
                            <Typography>Items Price</Typography>
                            <Typography>&#8377; {prices.itemsPrice.toLocaleString('en-IN')}</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography>GST (10%)</Typography>
                            <Typography>&#8377; {prices.gst.toLocaleString('en-IN')}</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography>Discount (15%)</Typography>
                            <Typography>- &#8377; {prices.discount.toLocaleString('en-IN')}</Typography>
                        </div>
                        <div className="flex justify-between total-price">
                            <Typography>Total Order Price</Typography>
                            <Typography>&#8377; {prices.totalOrderPrice.toLocaleString('en-IN')}</Typography>
                        </div>
                        <div className="text-right mt-3 checkout-btn">
                            <Button title="Checkout" variant="contained"/>
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