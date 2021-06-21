import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isClick: false}

  onLoginClick = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    const {isClick} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <Message isLogin={isClick} />
          {isClick ? (
            <Logout onLogout={this.onLoginClick} />
          ) : (
            <Login onLogin={this.onLoginClick} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
