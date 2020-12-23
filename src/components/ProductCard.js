import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { productsContext } from '../contexts/ProductsContext';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "25vh",
    paddingTop: '56.25%', // 16:9
    backgroundSize: "contain"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
  
 
}));

export default function ProductCarditem({item}) {
  const classes = useStyles();
const {addAndDeleteProductInCard, checkProductInCart} = useContext(productsContext)

  return (
      <Grid item md={4}>
        <Card className={classes.root}>
          <CardHeader
              title={<Typography variant="h5" align="center">{item.title}</Typography>}
              subheader={<Typography  align="center">{item.author}</Typography>}
          />
          <Link to={`details/${item.id}`}>
            <CardMedia 
                className={classes.media}
                image={item.image}
            />
          </Link>
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
          </CardContent>
          <CardActions style={{justifyContent: "space-around"}}>
              <Typography variant="h5"> 
                {item.price} сом
              </Typography>
              <Button variant="contained" color="primary">
                Купить
              </Button>
              <IconButton onClick={() => addAndDeleteProductInCard(item)} variant="contained" color={checkProductInCart(item.id) ? "secondary" : "primary"}>
                <ShoppingCartIcon />
              </IconButton>
          </CardActions>
        </Card>
    </Grid>
  );
}
