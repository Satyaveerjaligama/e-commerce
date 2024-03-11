import React from "react";
import { Button, Typography } from "@mui/material";
import Header from "../Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/slices/sampleSlice";

const Home = () => {
    const dispatch = useDispatch();
    const value = useSelector((state)=>state.sampleSlice.counter);
    return (
        <React.Fragment>
            <Header />
            <Typography>{value}</Typography>
            <Button variant="outlined" onClick={()=>dispatch(increment())}>
                Increment
            </Button>
            <Button variant="outlined" onClick={()=>dispatch(decrement())}>
                Decrement
            </Button>
        </React.Fragment>
    )
};

export default Home;