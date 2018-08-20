import React, { Component } from 'react'
import LoginForm from './LoginForm'
class Login extends Component {
    submit = (values) =>{
        var user = {
            username:values.username,
            email:values.email,
            age: values.age,
            password:values.password
        }
        console.log(user)
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={this.submit}/>
            </div>
        )
    }
}
export default Login