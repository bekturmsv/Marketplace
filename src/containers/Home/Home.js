import { Grid } from '@material-ui/core';
import React from 'react';
import Content from './Content'
import Sidebar from './Sidebar'

const Home = (props) => {
    return (
        <Grid container spacing={2}>
            <Sidebar {...props}/>
            <Content />
        </Grid>
    );
};

export default Home;