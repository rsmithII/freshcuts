import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class SignUpForm extends Component{

    state = {
        name: "",
        address: "",
        username: "",
        password: "",
        phone: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
    }

    render(){
        return (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                    <p className="signup-form-header">Welcome To Fresh Cuts!</p>
                    <h2>Become A Member!</h2>
                    <label>Name: </label>
                    <input placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Address: </label>
                    <input placeholder="Enter Address" name="address" value={this.state.address} onChange={this.handleChange} />

                    <label>Username: </label>
                    <input placeholder="Create Username" name="username" value={this.state.username} onChange={this.handleChange} />

                    <label>Password: </label>
                    <input placeholder="Create Password" type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                    
                    <label>Phone Number: </label>
                    <input placeholder="Ex. (555)555-5555"type="phone" value={this.state.phone} name="phone" onChange={this.handleChange} />
                    <p>
                        Already a user?
                        <Link to='/login'> Login</Link>
                    </p>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}