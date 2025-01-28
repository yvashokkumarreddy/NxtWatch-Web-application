import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NextWatchReactContext from '../../context/NextWatchReactContext'

import {
  LoginFormWholebgContainer,
  LoginFormCard,
  LoginFormLogo,
  InputLabel,
  Form,
  LoginBtn,
  InputEle,
  ErrorMsgPara,
} from './styledComponent'

class Loginform extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShown: false,
    isSubmitErrorShow: false,
    errorMsg: '',
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onCheckBoxStatusChange = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, isSubmitErrorShow: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isPasswordShown, isSubmitErrorShow, errorMsg} =
      this.state
    const type = isPasswordShown ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NextWatchReactContext.Consumer>
        {value => {
          const {isDark} = value
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <>
              <LoginFormWholebgContainer isDark={isDark}>
                <LoginFormCard isDark={isDark}>
                  <LoginFormLogo src={logoUrl} alt="website logo" />
                  <Form onSubmit={this.submitForm}>
                    <InputLabel htmlFor="username">USERNAME</InputLabel>
                    <InputEle
                      type="text"
                      value={username}
                      id="username"
                      onChange={this.onUsernameChange}
                    />
                    <br />
                    <InputLabel htmlFor="password">PASSWORD</InputLabel>
                    <InputEle
                      type={type}
                      value={password}
                      id="password"
                      onChange={this.onPasswordChange}
                    />
                    <br />
                    <div>
                      <input
                        type="checkbox"
                        id="checkbox"
                        onChange={this.onCheckBoxStatusChange}
                      />
                      <InputLabel htmlFor="checkbox">Show Password</InputLabel>
                    </div>
                    <br />
                    <LoginBtn type="submit">Login</LoginBtn>
                  </Form>
                  {isSubmitErrorShow ? (
                    <ErrorMsgPara>*{errorMsg}</ErrorMsgPara>
                  ) : null}
                </LoginFormCard>
              </LoginFormWholebgContainer>
            </>
          )
        }}
      </NextWatchReactContext.Consumer>
    )
  }
}
export default Loginform
