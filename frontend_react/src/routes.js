import React,{ Component } from 'react'
import {Router,Route,browserHistory} from 'react-router'
import App from './App'
import ProductPage from './containers/ProductPageContainer'
import Card from './containers/CartContainer'
class RouterComp extends Component {
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <div>

                        <Route exact path='/' component={App}/>

                        <Route path='/product/:id' component={ProductPage}/>

                        <Route path='/cart' component={Card}/>
                    </div>
                </Router>
            </div>
        )
    }
}
export default RouterComp

