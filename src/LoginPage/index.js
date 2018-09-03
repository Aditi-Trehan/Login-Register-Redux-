import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { login } from '../Actions/user.actions';
import axios from 'axios';

const Wrapper = styled.section`
    padding: 1em;
    background:#3399ff;
    height: 400px;
    width:350px;
    margin:auto;
`;

const Title = styled.h1`
    font-size: 2em;
    text-align:center;
    color:black;
`;

const Style = styled.h3`
    color:#000;
    font-size:1em;
    text-decoration:none;
    display:inline-block;
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

export const Button = styled.button`
    background:white;
    font-size:1em;
    margin:0.5em;
    padding:0.25em 1em;
    border:1px solid #000;
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
    height:5px;
`;

// var initialValues = {
//     email: '  ',
//     password: ''
// };

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            // values: { ...initialValues }
        };
    }

    handleValue = (key, e) => {
        let { user } = this.state;
        user[key] = e.target.value;

        this.setState({
            user,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
            email: this.state.user.email,
            password: this.state.user.password,
        });
    }

    signIn = (e) => {

        axios({
            method: 'post',
            url: 'https://login-api-signup.herokuapp.com/user/login',
            data: {
                email: this.state.user.email,
                password: this.state.user.password
            },
            headers: { 'Content-Type': 'application/json' }
        })

            .then((res) => {
                this.props.history.push('/home')
            })
            .catch((err) => {
                console.log(err, 'error');
                alert(err.response.data.msg)
            })

        // this.callAPI('post', '/login', {email: this.state.email, password: this.state.password}).then( res => {
        //     console.log(res, 'response');
        // });

    }

    // callAPI = (type = '', endPoint = '', data = {}, header = {}) => {
    //     const url = 'https://login-api-signup.herokuapp.com',

    //      return new Promise(axios[type](`${url}${endPoint}`, data, header);
    // }

    render() {
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (
            <Wrapper onSubmit={this.onSubmit}>
                <Title>
                    SIGN IN
              </Title>

                <div>
                    <Input placeholder="Email"
                        type="email"
                        className="email"
                        onChange={this.handleValue.bind(this, 'email')}
                        value={this.state.user.email}
                    />
                </div>
                <div>
                    <Input placeholder="Password"
                        type="password"
                        className="password"
                        onChange={this.handleValue.bind(this, 'password')}
                        value={this.state.user.password}
                    />
                </div>
                <div>
                    <Button type="submit" onSubmit={this.onSubmit} className="signIn" onClick={this.signIn} >
                        SIGN IN
                    </Button>
                </div>
                <div>
                    <p>
                        <StyledLink>
                            <Link to="/forgotpassword">
                                <Style>
                                    Forgot Password?
                            </Style>
                            </Link>
                        </StyledLink>
                    </p>
                </div>
                <div>
                    <p>Don't have an account?
                        <StyledLink>
                            <Link to="/signup">
                                <Style>
                                    Create Account.
                                </Style>
                            </Link>
                        </StyledLink>
                    </p>
                </div>

                {isLoginPending && <div> Wait..</div>}
                {isLoginSuccess && <div> Success!!</div>}
                {loginError && <div>Invalid Username & Password!!</div>}

            </Wrapper>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         isLoginPending: state.isLoginPending,
//         isLoginSuccess: state.isLoginSuccess,
//         loginError: state.loginError
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (email, password) => dispatch(login(email, password))
//     };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPage;