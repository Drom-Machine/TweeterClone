import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { spacing } from '@mui/system';
import { Box, Card, CardContent, CardActions, Button } from '@mui/material';


function HomePage(props) {
    return (
        <Layout>
            <Box sx={{
                    mx: 'auto',
                    minWidth: 300,
                    p: 2,
                    m: 'auto',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                }}>
                    <Card sx={{ minWidth: 200 }}>
                            <CardContent>
                                <h1> Sqawker </h1>
                                <h2>Tell The World How You Feel</h2>
                                <h3>With Just Your Thumbs And Zero Accountability</h3>
                            </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Link to="/sign-in">
                                <Button variant='contained'>Sign In</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Layout>
    )
}

export default HomePage