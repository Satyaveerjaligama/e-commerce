import React from "react";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const CartItem = (props) => {
    const {productDetails, cartItemOnClick} = props;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="item-card">
                <CardActionArea onClick={()=>cartItemOnClick(productDetails.productId)}>
                    <CardContent className="flex flex-row items-center">
                        <img src={productDetails.productImage} style={{width:"200px", height: "200px", objectFit: "contain"}} alt="productImage"/>
                        <div className="product-info">
                            <Typography>{productDetails.productName}</Typography>
                            <Typography>&#8377; {productDetails.productPrice.toLocaleString('en-IN')}</Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <DeleteRoundedIcon className="delete-item cursor-pointer" />
            </Card>
        </Grid>
    )
}

export default CartItem;