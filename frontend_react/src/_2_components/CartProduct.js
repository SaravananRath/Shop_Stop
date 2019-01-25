import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    card: {
            display: 'flex',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        border:'1px solid black',
        width:'70%'

    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    pricing:{
        border:'1px solid black',
    }
});

function MediaControlCard(props) {
    const { classes,cartProduct,removeProduct } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={cartProduct.imageUrls[0]}
                    title={cartProduct.name}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline"> {cartProduct.name}</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Quantity:{cartProduct.quantity}
                        </Typography>
                        <hr/>
                        <Button variant='text' color='primary' onClick={()=>{removeProduct(cartProduct._id)}}>Remove</Button>

                    </CardContent>
                </div>
                <div className={classes.pricing}>
                    <CardContent>
                        <Typography>
                        <b> Rs:{cartProduct.discountedPrice}</b>
                        </Typography>
                    </CardContent>
                </div>

            </Card>
        </div>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
