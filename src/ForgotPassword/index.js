import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.section`
    padding: 1em;
    background:#3399ff;
    height: 300px;
    width:350px;
    margin:auto;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align:center;
    color:black;
`;

const Input = styled.input`
    padding:0.5em;
    margin:0.5em;
    color:#000;
    background:white;
    border:0.5px solid #000;
    border-radius:3px;
    width:320px;
    height:30px;
`;

const Style = styled.h1`
    color:#000;
    font-size:1em;
    text-decoration:none;
    display:inline-block;
`;

const Button = styled.button`
    background:white;
    font-size:0.7em;
    margin:1.5em;
    padding:0.25em 1em;
    border:2px solid #000;
    border-radius:3px;
`;

const NewLink = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
)

const StyledLink = styled(NewLink) `
    color:#000;
    font-weight:bold;
    font-size:1em;
    display:inline-block;
`;

// var newPassword = {
//     new_password: '',
//     confirm_new_password: ''
// };

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newValues: {
                newPassword: '',
                confirmNewPassword: ''
            },
            // Password: { ...newPassword }
        }
    }

    handlePassword = (key, e) => {
        let { newValues } = this.state;
        newValues[key] = e.target.value;

        this.setState({
            newValues
        });
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            newPassword: this.state.newValues.newPassword,
            confirmNewPassword: this.state.newValues.confirmNewPassword
        });

    }

    onReset = (e) => {
        axios({
            method: 'post',
            url: '',
            data: {
                newPassword: this.state.newValues.newPassword,
                password: this.state.newValues.confirmNewPassword
            },
            headers: { 'Content-Type': 'application/json' }
        })

            .then((res) => {
                this.props.history.push('/')
            })
            .catch((err) => {
                console.log(err, 'error');
                alert(err.response.data.msg)
            })
    }
    render() {
        return (
            <Wrapper onSubmit={this.onSubmjt}>
                <Title>
                    RESET PASSWORD
              </Title>

                <div>
                    <Input placeholder="New Password"
                        type="password"
                        onChange={this.handlePassword.bind(this, 'newPassword')}
                        value={this.state.newValues.newPassword}
                    />
                </div>
                <div>
                    <Input placeholder="Confirm New Password"
                        type="password"
                        onChange={this.handlePassword.bind(this, 'confirmNewPassword')}
                        value={this.state.newValues.confirmNewPassword}
                    />
                </div>

                <div>
                    <Button type="submit" onSubmit={this.onSubmit} onClick={this.onReset}>
                        <Link to="/">
                            <Style>
                            SUBMIT
                            </Style>
                        </Link>
                    </Button>
                </div>

            </Wrapper>
        );
    }
}

export default ForgotPassword;