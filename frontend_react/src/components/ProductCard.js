import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 345,
        // minHeight:500,
    },
    media: {
        height: 80,
        // width:250,
        paddingTop: '56.25%', // 16:9
    },
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
                        <span className='discountedPrice'>Rs {product.discountedPrice}</span>
                        <span className="price">Rs {product.productPrice}</span>
                        <span className='discount'>{product.productDiscount}% OFF</span>
                    </Typography>
                </CardContent>

                <CardActions>
                    {/*<Button size="small" color="primary">*/}
                        {/*Share*/}
                    {/*</Button>*/}
                    {/*<Button size="small" color="primary">*/}
                        {/*Learn More*/}
                    {/*</Button>*/}
                </CardActions>
            </Card>
        </div>
    );
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);
