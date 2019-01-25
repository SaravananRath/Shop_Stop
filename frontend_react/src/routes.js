import React,{ Component } from 'react'
import {Router,Route,browserHistory} from 'react-router'
import App from './App'
import Product from './_4_pages_containers/ProductPageContainer'
import Card from './_4_pages_containers/CartContainer'
import Login from './_4_pages_containers/LoginContainer'
class RouterComp extends Component {
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <div>

                        <Route exact path='/' component={App}/>

                        <Route path='/login' component={Login}/>

                        <Route path='/product/:id' component={Product}/>

                        <Route path='/cart' component={Card}/>
                    </div>
                </Router>
            </div>
        )
    }
}
export default RouterComp

