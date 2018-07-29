import React,{ Component } from 'react'
import {Router,Route,browserHistory} from 'react-router'
import App from './App'
import NavAppBar from './components/Appbar'
import ProductPage from './containers/ProductPageContainer'
class RouterComp extends Component {
    render(){
        return(
            <div>
                <NavAppBar/>
                <Router history={browserHistory}>
                    <div>
                        <Route exact path='/' component={App}/>

                        <Route path='/product/:id' component={ProductPage}/>
                    </div>
                </Router>
            </div>
        )
    }
}
export default RouterComp

