import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Cookies from 'js-cookie'
import {
  LoginFormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessage,
  Container,
} from './styledLogin'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = token => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('token', token, {expires: 60})
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === 'blogs' && password === 'blogs@123') {
      this.onSubmitSuccess(uuidv4())
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const {password, username, showSubmitError} = this.state
    const token = Cookies.get('token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Container>
        <LoginFormContainer>
          <form onSubmit={this.onSubmitForm}>
            <FormField>
              <FormLabel htmlFor="Username">Username</FormLabel>
              <FormInput
                onChange={this.onChangeUsername}
                id="Username"
                type="text"
                placeholder="Enter blogs"
                value={username}
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                id="password"
                onChange={this.onChangePassword}
                value={password}
                placeholder="Enter blogs@123"
                type="password"
              />
            </FormField>
            <FormButton type="submit">Login</FormButton>
            {showSubmitError && (
              <ErrorMessage>Invalid username or password</ErrorMessage>
            )}
          </form>
        </LoginFormContainer>
      </Container>
    )
  }
}

export default Login
