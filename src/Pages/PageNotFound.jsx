import React from "react";
import Layout from "../Components/Layout";
import { Box, Typography } from "@mui/material";
import pageNotFoundImage from "../Assets/Images/404.jpg";

const PageNotFound = () => {
    return (
        <Layout>
            <Box className="m-auto p-5 my-10 text-webkit-center">
                <img src={pageNotFoundImage} alt="item-not-found" style={{width:"80vh", height:"60vh"}}/>
                <Typography sx={{fontWeight: "700", fontSize: "25px"}}>Page not found</Typography>
            </Box>
        </Layout>
    )
}

export default PageNotFound;