import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router'
const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function NavAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="sticky" color='inherit'>
                <Toolbar>
                    {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                        {/*<MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <Link className='checkout' to="/"> <p className="font-effect-neon">SHOP STOP</p></Link>
                    </Typography>
                    <Typography>

                        <Link className='checkout'to="/cart">CHECKOUT</Link>

                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </div>
    );
}



export default withStyles(styles)(NavAppBar);
