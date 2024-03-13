import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box className="footer">
            <Box className="p-5 flex flex-row justify-around">
                <Box className="footer-info">
                    <Typography>Queries</Typography>
                    <Typography>Cancellation Policy</Typography>
                    <Typography>Return Policy</Typography>
                    <Typography>Help</Typography>
                    <Typography>FAQ</Typography>
                </Box>
                <Box className="footer-info">
                    <Typography>Contact us</Typography>
                    <Typography>Twitter</Typography>
                    <Typography>Instagram</Typography>
                    <Typography>Facebook</Typography>
                </Box>
                <Box className="footer-info">
                    <Typography>Office Address</Typography>
                    <Typography>
                        Door no. 180-29/A<br />
                        Raj Complex, Opp. HDFC Bank<br />
                        Nizamabad, Telangana - 503002
                        </Typography>
                </Box>
            </Box>
            <Divider sx={{margin:"auto", borderColor: "white"}} className="w-11/12"/>
            <Typography className="py-2 text-center">&#169; Satyaveer Jaligama, All rights reserved</Typography>
        </Box>
    )
}

export default Footer;