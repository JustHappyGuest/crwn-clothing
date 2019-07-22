import React, {Component} from 'react';
import FormInput from "../form-input";
import "./style.scss";
import CustomButton from "../custom-button";


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmin = e => {
        e.preventDefault();
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span className="subtitle">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmin}>
                    <FormInput name="email" label="Email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name="password" label="Password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;