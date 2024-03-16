import React from "react";
import { Box, Card, CardContent, TextField, InputAdornment, IconButton, Typography } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import logo from "../Assets/Images/logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from "react-router-dom";
import { routes } from "../Utilities/Constants";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state)=>state.cartSlice.cartItems);

    return (
        <Card sx={{borderRadius: "0px"}}>
            <CardContent className="header">
                <Box className="display-flex jc-space-between align-items-center">
                    <Box className="logo cursor-pointer">
                        <img src={logo} alt="logo" onClick={()=>navigate(`/${routes.home}`)}/>
                    </Box>
                    <Box>
                        <TextField
                            className="search-field"
                            placeholder="Search item"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchRoundedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />                      
                    </Box>
                    <Box className="display-flex jc-space-between align-items-center profile-cart color-white">
                        <AccountCircleRoundedIcon className="cursor-pointer" />
                        <div className="cursor-pointer" onClick={()=>navigate(`/${routes.cart}`)}>
                            <ShoppingCartRoundedIcon />
                            <Typography className="cart-items-number">{cartItems.length}</Typography>
                        </div>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
};

export default Header;