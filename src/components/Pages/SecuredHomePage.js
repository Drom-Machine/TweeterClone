import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import { newSqawkAction } from '../../ReduxStore/SqawkState';
import Sqawk from '../Sqawk';

import {
    Box,
    Card,
    TextField,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';


function SecuredHomePage() {
    
    const dispatch = useDispatch();
    const sqawkState = useSelector(state => state.sqawk);
    const [ sqawkText, setSqawkText ] = useState("");
    
    function handleOnChange(e) {
        setSqawkText(e.target.value);
    }

    function handleSubmit(e) {
        dispatch(newSqawkAction(sqawkText));
        setSqawkText("")
    }

    return (
    <Layout>
            <Box
                component="form"
                sx={{
                mx: 'auto',
                minWidth: 300,
                p: 5,
                m: 'auto',
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
                
            }}>
                <Card sx={{ minWidth: 200 }}>
                    <CardContent >
                            <TextField
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={5}
                                value={sqawkText}
                                onChange={handleOnChange} 
                            />
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to="/secured-homepage">
                            <Button onClick={handleSubmit} type="submit" variant='contained'>Sqawk</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
            {sqawkState.map((item, i) => (
                <sqawk
                    key={i}
                    newSqawk={{
                        sqawk: item.newSqawk
                    }}
                />
            ))}
    </Layout>
  )
}

export default SecuredHomePage