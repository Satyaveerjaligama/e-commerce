import React from "react";
import { Box, Card, CardContent, TextField, InputAdornment, IconButton } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import logo from "../Assets/Images/logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Header = () => {
    return (
        <Card class="header">
            <CardContent>
                <Box className="display-flex jc-space-between align-items-center">
                    <Box className="logo cursor-pointer">
                        <img src={logo} alt="logo" />
                    </Box>
                    <Box>
                        <TextField
                            className="search-field"
                            placeholder="Search item"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
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
                        <ShoppingCartRoundedIcon className="cursor-pointer" />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
};

export default Header;