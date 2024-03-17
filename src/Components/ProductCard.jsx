import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const ProductCard = (props) => {
  const {productName, productPrice, productImage, productId, productOnClick} = props;
  return (
    <Card sx={{borderRadius: "25px"}} className="box-shadow">
      <CardActionArea onClick={()=>productOnClick(productId)}>
        <CardMedia className="h-56" sx={{objectFit: "contain"}} component="img" alt="logo" image={productImage} />
        <CardContent className="bg-gray-300">
            <Typography>{productName}</Typography>
            <Typography sx={{fontWeight: "600"}}>&#8377; {productPrice.toLocaleString("en-IN")}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string,
  productId: PropTypes.number,
  productOnClick: PropTypes.func,
};

export default ProductCard;
