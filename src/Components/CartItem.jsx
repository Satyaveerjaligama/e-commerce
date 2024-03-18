import React from "react";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { PropTypes } from "prop-types"

const CartItem = (props) => {
    const {productDetails, cartItemOnClick, itemIndex, deleteItem} = props;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="item-card box-shadow">
                <CardActionArea onClick={()=>cartItemOnClick(productDetails.productId)}>
                    <CardContent className="flex flex-row items-center">
                        <img src={productDetails.productImage} style={{width:"200px", height: "200px", objectFit: "contain"}} alt="productImage"/>
                        <div className="product-info">
                            <Typography>{productDetails.productName}</Typography>
                            <Typography>&#8377; {productDetails.productPrice.toLocaleString('en-IN')}</Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <DeleteRoundedIcon className="delete-item cursor-pointer" onClick={()=>deleteItem(itemIndex)}/>
            </Card>
        </Grid>
    )
}

CartItem.propTypes = {
    productDetails: PropTypes.shape({
        productName: PropTypes.string,
        productPrice: PropTypes.number,
        productImage: PropTypes.string,
        productId: PropTypes.string,
    }),
    cartItemOnClick: PropTypes.func,
    itemIndex: PropTypes.number,
    deleteItem: PropTypes.func,
};

export default CartItem;