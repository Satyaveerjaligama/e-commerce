import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import TextField from '../Components/CustomComponents/TextField';
import Button from '../Components/CustomComponents/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../Utilities/Constants';

const Login = () => {
    const navigate = useNavigate();
    return (
        <Box className="login-page">
            <div className='bg-color'></div>
            <Card className="box-shadow">
                <CardContent>
                    <Typography>E - commerce</Typography>
                    <TextField
                        className="username-field"
                        label="User Name"
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <br></br>
                    <TextField
                        className="password-field"
                        label="Password"
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <Typography className="forget-password">Forget password ?</Typography>
                    <Button
                        className="login-btn"
                        title="Login"
                        variant="contained"
                        fullWidth
                        onClick = {()=>navigate(`/${routes.home}`)}
                    />
                </CardContent>
            </Card>
        </Box>
    )
}

export default Login;