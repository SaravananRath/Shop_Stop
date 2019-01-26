import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 345,
    },
    media: {
        height: 80,
        paddingTop: '56.25%', // 16:9
    },
    discountedPrice:{
        paddingRight:10,
        color:'green'
    },
    price:{
        paddingRight:10,
        textDecoration: 'line-through'
    },
    discount:{
        color:'red',
        fontSize: 12,
        opacity:0.8
    },
    comingSoon:{
        color:'orange',
        fontSize:15
    }
};



function ProductCard(props) {
    const { classes,product } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={product.imageUrls[0]}
                    title={product.productName}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {product.productName}
                    </Typography>
                    <Typography component="p">
                        {product.description}
                    </Typography>
                    <Typography>
                        {product.productCount!==0 && <span>
                        <span className={classes.discountedPrice}>Rs {product.discountedPrice}</span>
                        <span className={classes.price}>Rs {product.productPrice}</span>
                            <span className={classes.discount}>{product.productDiscount}% OFF</span>
                        </span>
                        }

                        {product.productCount===0 && <span className={classes.comingSoon}>Coming Soon</span>}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);
