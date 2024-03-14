import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
// import logo from "../Assets/Images/logo.png";

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

export default ProductCard;
