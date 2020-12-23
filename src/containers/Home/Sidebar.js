import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { productsContext } from '../../contexts/ProductsContext';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))



const Sidebar = (props) => {

    const classes = useStyles();
    const [sliderValue, setSliderValue] = useState('')
    const { getProducts } = useContext(productsContext)

    function handleSliderValue(e, value) {
        setSliderValue(value)
        fetchParams('price_lte=', value)
    }
    function fetchParams(params, value) {
        if (value === 'all') {
            // props.history.push('/')
            props.history.push(props.location.pathname.replace(params))
            getProducts()
            return
        }
        let search = new URLSearchParams(props.history.location.search);
        search.set(params, value)
        let url = `${props.location.pathname}?${search.toString()}`
        props.history.push(url);
        getProducts(props.history)
    }

    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
                <Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Memory</FormLabel>
                        <RadioGroup aria-label="memory" name="memory1" onChange={(event) => fetchParams('category=', event.target.value)}>
                            <FormControlLabel value="64" control={<Radio />} label="64" />
                            <FormControlLabel value="128" control={<Radio />} label="128" />
                            <FormControlLabel value="256" control={<Radio />} label="256" />
                            <FormControlLabel value="512" control={<Radio />} label="512" />
                            <FormControlLabel value="1024" control={<Radio />} label="1024" />
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Price</FormLabel>
                        <RadioGroup aria-label="price" name="price1" onChange={(e) => fetchParams('price_lte=', e.target.value)}>
                            <FormControlLabel value="1000" control={<Radio />} label="До 1000" />
                            <FormControlLabel value="2000" control={<Radio />} label="До 2000" />
                            <FormControlLabel value="5000" control={<Radio />} label="До 5000" />
                            <FormControlLabel value="10000" control={<Radio />} label="До 10000" />
                            <FormControlLabel value="15000" control={<Radio />} label="До 15000" />
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid>
                    <Slider
                        min={500}
                        max={15000}
                        value={sliderValue}
                        onChange={handleSliderValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    // getAriaValueText={valuetext}
                    />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Sidebar;