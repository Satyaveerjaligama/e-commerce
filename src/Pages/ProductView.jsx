import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Typography, Box, Grid } from "@mui/material";
import Button from "../Components/CustomComponents/Button";
import { getObject } from "../Utilities/Functions";
import { phoneList, watchList } from "../Utilities/Constants";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import itemNotFoundImg from "../Assets/Images/item-not-found.jpg";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/slices/cartSlice";

const ProductView = () => {
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState({});
    const [productNotFound, setProductNotFound] = useState(false);

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const productId = params.get("productId");
        const productObj = getObject([...phoneList, ...watchList], productId);
        if(productObj) {
            setProductDetails(productObj);
        } else {
            setProductNotFound(true);
        }
    },[]);

    const addToCartBtnClick = () => {
        dispatch(addItemToCart(productDetails));
    };

    return (
        <Layout>
            {!productNotFound ? 
            <Box className="p-5 product-view">
                <Grid container>
                    <Grid item xs={12} md={6} className="img-div">
                        <img src={productDetails?.productImage} height={200} alt="productImage" />
                    </Grid>
                    <Grid item xs={12} md={6} className="self-center info-div pt-4 md:pt-0">
                        <Typography sx={{fontWeight: "600"}} className="text-lg">{productDetails?.productName}</Typography>
                        <Typography sx={{fontWeight: "600"}}>&#8377; {productDetails?.productPrice?.toLocaleString("en-IN")}</Typography>
                        <Button className="add-to-cart-btn w-full sm:w-1/2" title="Add to cart" variant="outlined" endIcon={<AddShoppingCartRoundedIcon />} onClick={()=>addToCartBtnClick()}/>
                        <Button className="buy-now-btn w-full sm:w-1/2" title="Buy now" variant="contained" endIcon={<ShoppingCartCheckoutRoundedIcon />} />
                    </Grid>
                </Grid>
            </Box>
            :
            <Box className="m-auto p-5 text-webkit-center">
                <img src={itemNotFoundImg} alt="item-not-found" style={{width:"60vh", height:"60vh"}}/>
            </Box>
            }
        </Layout>
    )
}

export default ProductView;