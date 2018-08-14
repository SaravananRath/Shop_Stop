import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar postion='static'>
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
                            React Material UI
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar