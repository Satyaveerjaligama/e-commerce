import React from "react";
import Layout from "../Components/Layout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import AppSettingsAltRoundedIcon from '@mui/icons-material/AppSettingsAltRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Account = () => {
    const options = [
        {
            optionLabel: "Account Settings",
            optionIcon: <AppSettingsAltRoundedIcon />,
        },
        {
            optionLabel: "Your orders",
            optionIcon: <ShoppingBagRoundedIcon />,
        },
        {
            optionLabel: "Wishlist",
            optionIcon: <FavoriteRoundedIcon />,
        },
        {
            optionLabel: "Manage devices",
            optionIcon: <DevicesRoundedIcon />,
        },
        {
            optionLabel: "Login and security",
            optionIcon: <AdminPanelSettingsRoundedIcon />,
        },
    ];

    return (
        <Layout>
            <Box className="account-page mx-auto p-5">
                <Grid container rowSpacing={2} columnSpacing={2}>
                    { options.map((option)=>
                        <Grid item xs={12} sm={6}>
                            <Card className="box-shadow">
                                <CardContent>
                                    <div>
                                        {option.optionIcon}
                                        <Typography>{option.optionLabel}</Typography>
                                    </div>
                                    <div>
                                        <KeyboardArrowRightRoundedIcon />
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Layout>
    )
}

export default Account;